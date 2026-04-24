## Goal
Send an automatic confirmation email to anyone who submits the contact form on `/contact`, from the verified `notify.evogue.com.ng` sender (shown as `evogue.com.ng` in the From header).

## Status check
- Email infrastructure is already set up (queue, suppression list, send function deployed).
- Sender domain `notify.evogue.com.ng` is **verified**.
- Existing transactional template: `ai-readiness-checklist`.
- Contact form currently has a placeholder `setTimeout` instead of a real submit.

## Changes

### 1. New email template — `supabase/functions/_shared/transactional-email-templates/contact-confirmation.tsx`
Branded React Email confirming receipt of the message. Includes:
- "Thanks, {name}!" heading
- 24-hour business-day response promise
- A boxed summary of what they submitted (help topic + message)
- "View Case Studies" CTA linking to `https://www.evogueconsulting.com/case-studies`
- Brand styling matching the existing checklist template (dark navy bar, Inter font, white background)
- Subject: `We received your message — Evogue Consulting`

### 2. Register the template — `supabase/functions/_shared/transactional-email-templates/registry.ts`
Add the import and a `'contact-confirmation'` entry to the `TEMPLATES` map.

### 3. Wire the contact form — `src/pages/Contact.tsx`
- Import `supabase` client.
- Replace the `setTimeout` placeholder with a real submit that calls `supabase.functions.invoke('send-transactional-email', ...)` with:
  - `templateName: 'contact-confirmation'`
  - `recipientEmail`: the submitter's email
  - `idempotencyKey`: `contact-confirm-<uuid>` (generated per submit)
  - `templateData`: `{ name, helpWith, message }`
- On success: keep existing toast + reset form.
- On failure: show an error toast pointing to `Hello@evogueconsulting.com`.

### 4. Deploy
Deploy the `send-transactional-email` function so it picks up the new template registry entry.

## Out of scope
- No `contact_submissions` database table (not needed for the confirmation email; can add later if you want submission history).
- No internal notification email to your team (could be a follow-up — let me know if you want one to land in `Hello@evogueconsulting.com` too).