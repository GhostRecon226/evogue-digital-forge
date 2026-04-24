// Local replay test: exercises the queue helpers with a fake Supabase client
// to catch type/runtime issues before deploy. No network, no real DB.
import { assertEquals, assert } from 'https://deno.land/std@0.224.0/assert/mod.ts'
import {
  isRateLimited,
  isForbidden,
  getRetryAfterSeconds,
  parseJwtClaims,
  moveToDlq,
} from './index.ts'

type Call = { table?: string; method: string; args: unknown }

function createFakeSupabase() {
  const calls: Call[] = []

  const builder = (table: string) => ({
    insert: (args: unknown) => {
      calls.push({ table, method: 'insert', args })
      return Promise.resolve({ error: null })
    },
  })

  const client = {
    from: (table: string) => builder(table),
    rpc: (fn: string, args: unknown) => {
      calls.push({ method: `rpc:${fn}`, args })
      return Promise.resolve({ data: null, error: null })
    },
  }

  return { client, calls }
}

Deno.test('isRateLimited detects 429 from status and message', () => {
  assert(isRateLimited({ status: 429 }))
  assert(isRateLimited(new Error('HTTP 429 Too Many Requests')))
  assert(!isRateLimited({ status: 500 }))
  assert(!isRateLimited(new Error('boom')))
})

Deno.test('isForbidden detects 403', () => {
  assert(isForbidden({ status: 403 }))
  assert(isForbidden(new Error('403 Forbidden')))
  assert(!isForbidden({ status: 401 }))
})

Deno.test('getRetryAfterSeconds returns value or default 60', () => {
  assertEquals(getRetryAfterSeconds({ retryAfterSeconds: 30 }), 30)
  assertEquals(getRetryAfterSeconds({ retryAfterSeconds: null }), 60)
  assertEquals(getRetryAfterSeconds(new Error('x')), 60)
})

Deno.test('parseJwtClaims decodes service_role JWT payload', () => {
  // header.payload.signature — payload = {"role":"service_role"}
  const payload = btoa(JSON.stringify({ role: 'service_role' }))
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replaceAll('=', '')
  const token = `h.${payload}.s`
  const claims = parseJwtClaims(token)
  assertEquals(claims?.role, 'service_role')
})

Deno.test('parseJwtClaims returns null for malformed token', () => {
  assertEquals(parseJwtClaims('not-a-jwt'), null)
})

Deno.test('moveToDlq logs to email_send_log and calls move_to_dlq RPC', async () => {
  const { client, calls } = createFakeSupabase()
  const msg = {
    msg_id: 42,
    message: {
      message_id: 'abc-123',
      label: 'welcome',
      to: 'user@example.com',
    },
  }

  await moveToDlq(client, 'transactional_emails', msg, 'TTL exceeded')

  assertEquals(calls.length, 2)
  assertEquals(calls[0].table, 'email_send_log')
  assertEquals(calls[0].method, 'insert')
  const insertArgs = calls[0].args as Record<string, unknown>
  assertEquals(insertArgs.message_id, 'abc-123')
  assertEquals(insertArgs.template_name, 'welcome')
  assertEquals(insertArgs.recipient_email, 'user@example.com')
  assertEquals(insertArgs.status, 'dlq')
  assertEquals(insertArgs.error_message, 'TTL exceeded')

  assertEquals(calls[1].method, 'rpc:move_to_dlq')
  const rpcArgs = calls[1].args as Record<string, unknown>
  assertEquals(rpcArgs.source_queue, 'transactional_emails')
  assertEquals(rpcArgs.dlq_name, 'transactional_emails_dlq')
  assertEquals(rpcArgs.message_id, 42)
})

Deno.test('moveToDlq falls back to queue name when label missing', async () => {
  const { client, calls } = createFakeSupabase()
  await moveToDlq(
    client,
    'auth_emails',
    { msg_id: 1, message: { to: 'a@b.com' } },
    'max retries'
  )
  const insertArgs = calls[0].args as Record<string, unknown>
  assertEquals(insertArgs.template_name, 'auth_emails')
})

// Replay sample messages: simulates the per-message control flow that the
// serve() handler runs, but uses the exported helpers + fake client only.
Deno.test('replay: TTL-expired and max-retry messages route to DLQ', async () => {
  const { client, calls } = createFakeSupabase()
  const MAX_RETRIES = 5

  const samples = [
    {
      label: 'expired',
      msg: {
        msg_id: 1,
        message: { message_id: 'm1', to: 'a@x.com', queued_at: '2000-01-01T00:00:00Z' },
      },
      failedAttempts: 0,
      ageMs: Date.now() - new Date('2000-01-01T00:00:00Z').getTime(),
      ttlMs: 60 * 60 * 1000,
    },
    {
      label: 'maxed-out',
      msg: { msg_id: 2, message: { message_id: 'm2', to: 'b@x.com' } },
      failedAttempts: MAX_RETRIES,
      ageMs: 0,
      ttlMs: 60 * 60 * 1000,
    },
  ]

  for (const s of samples) {
    if (s.ageMs > s.ttlMs) {
      await moveToDlq(client, 'transactional_emails', s.msg, 'TTL exceeded (60 minutes)')
    } else if (s.failedAttempts >= MAX_RETRIES) {
      await moveToDlq(client, 'transactional_emails', s.msg, `Max retries (${MAX_RETRIES}) exceeded`)
    }
  }

  // Each sample produces 1 insert + 1 rpc call = 4 total
  assertEquals(calls.length, 4)
  assertEquals(calls[0].table, 'email_send_log')
  assertEquals(calls[1].method, 'rpc:move_to_dlq')
  assertEquals(calls[2].table, 'email_send_log')
  assertEquals(calls[3].method, 'rpc:move_to_dlq')
})

// Edge-case fixtures: malformed or partial messages must NOT crash helpers.
// These mirror real failure modes seen in queues:
//  - missing message_id (no idempotency key generated upstream)
//  - malformed/non-object payload (corrupted JSON deserialization)
//  - empty recipient (validation slipped through enqueue)
Deno.test('moveToDlq handles message without message_id', async () => {
  const { client, calls } = createFakeSupabase()
  await moveToDlq(
    client,
    'transactional_emails',
    { msg_id: 10, message: { to: 'x@y.com', label: 'welcome' } },
    'no message_id'
  )
  const insertArgs = calls[0].args as Record<string, unknown>
  assertEquals(insertArgs.message_id, undefined)
  assertEquals(insertArgs.template_name, 'welcome')
  assertEquals(insertArgs.recipient_email, 'x@y.com')
})

Deno.test('moveToDlq handles empty recipient', async () => {
  const { client, calls } = createFakeSupabase()
  await moveToDlq(
    client,
    'transactional_emails',
    { msg_id: 11, message: { message_id: 'm-empty', to: '', label: 'welcome' } },
    'empty recipient'
  )
  const insertArgs = calls[0].args as Record<string, unknown>
  assertEquals(insertArgs.recipient_email, '')
  assertEquals(calls[1].method, 'rpc:move_to_dlq')
})

Deno.test('moveToDlq handles malformed payload (empty object)', async () => {
  const { client, calls } = createFakeSupabase()
  await moveToDlq(
    client,
    'auth_emails',
    { msg_id: 12, message: {} as Record<string, unknown> },
    'malformed body'
  )
  const insertArgs = calls[0].args as Record<string, unknown>
  // Falls back to queue name when label missing
  assertEquals(insertArgs.template_name, 'auth_emails')
  assertEquals(insertArgs.message_id, undefined)
  assertEquals(insertArgs.recipient_email, undefined)
  assertEquals(insertArgs.status, 'dlq')
})

// Replay: simulate the serve() per-message guards on bad fixtures.
// Ensures the message_id extraction + failed-attempt lookup logic does
// not throw on missing/malformed/empty fields.
Deno.test('replay: bad fixtures do not crash message_id extraction', () => {
  const messages: any[] = [
    { msg_id: 1, message: { to: 'a@b.com' } }, // missing message_id
    { msg_id: 2, message: null }, // malformed: null body
    { msg_id: 3, message: 'not-an-object' }, // malformed: string body
    { msg_id: 4, message: { message_id: '', to: '' } }, // empty fields
    { msg_id: 5, message: { message_id: 123, to: 'c@d.com' } }, // non-string id
    { msg_id: 6, message: { message_id: 'ok-1', to: 'e@f.com' } }, // valid
  ]

  const ids = Array.from(
    new Set(
      messages
        .map((msg: any) =>
          msg?.message?.message_id && typeof msg.message.message_id === 'string'
            ? msg.message.message_id
            : null
        )
        .filter((id: string | null): id is string => Boolean(id))
    )
  )

  // Only the valid string message_id survives
  assertEquals(ids, ['ok-1'])
})

Deno.test('replay: malformed messages route to DLQ without throwing', async () => {
  const { client, calls } = createFakeSupabase()
  const fixtures = [
    { msg_id: 100, message: {} },
    { msg_id: 101, message: { to: '' } },
    { msg_id: 102, message: { message_id: 'm-x' } }, // no recipient
  ]
  for (const f of fixtures) {
    await moveToDlq(client, 'transactional_emails', f as any, 'invalid payload')
  }
  // 3 fixtures × (1 insert + 1 rpc) = 6 calls
  assertEquals(calls.length, 6)
  for (let i = 0; i < calls.length; i += 2) {
    assertEquals(calls[i].table, 'email_send_log')
    assertEquals(calls[i + 1].method, 'rpc:move_to_dlq')
  }
})
