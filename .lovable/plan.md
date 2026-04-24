

## Add an AI Customer Service Agent — "Evo"

A floating chat widget on every page that answers visitor questions about Evogue and books discovery calls directly into your Google Calendar.

### What visitors will see

1. **Floating launcher button** (bottom-right, all pages) matching the dark/minimal aesthetic.
2. **Chat panel** with message history, typing indicator, and markdown-rendered responses.
3. **Greeting**: *"Hi, I'm Evo — Evogue's AI assistant. I can answer questions about our work or help you book a free 30-minute discovery call."*
4. **Booking flow inside chat**: Evo asks for name, email, company, project summary, and preferred time → checks your real Google Calendar availability → creates the event → confirms in-chat with the meeting time.

### Technical approach

- **Frontend**: `AIChatWidget.tsx` + `AIChatLauncher.tsx`, mounted in `App.tsx` so the bubble appears on Home, About, Case Studies, and Contact. Uses existing Tailwind tokens; `react-markdown` renders responses.
- **AI**: Lovable AI Gateway with `google/gemini-3-flash-preview` (fast, no API key required from you). Streams responses token-by-token. System prompt is grounded in Evogue's services, FAQs, pricing ($5K+), location, and process.
- **Tool calling**: The agent exposes two tools:
  - `check_availability(date_range)` — queries your Google Calendar freebusy
  - `book_discovery_call(name, email, company, summary, start_time)` — creates the calendar event with a Google Meet link
- **Edge functions**:
  - `chat-agent` — streams AI responses, handles tool calls
  - `book-meeting` — wraps Google Calendar API via the Lovable connector gateway
- **Database** (Lovable Cloud):
  - `chat_conversations` (session_id, visitor_email, created_at)
  - `chat_messages` (conversation_id, role, content, created_at)
  - `meeting_requests` (name, email, company, summary, scheduled_for, calendar_event_id, status)
  - `user_roles` table + `has_role()` security definer function
  - RLS: anonymous visitors can INSERT into chat tables and meeting_requests; reads restricted to admins
- **Google Calendar integration**: Uses the **Google Calendar connector** via Lovable's connector gateway. This connects *your* calendar (the Evogue account that authorizes it) — every booking lands there. We'll prompt you to connect it during the build.

### Files to create / change

- `src/components/AIChatWidget.tsx`, `src/components/AIChatLauncher.tsx` — widget UI
- `src/App.tsx` — mount widget globally
- `supabase/functions/chat-agent/index.ts` — streaming chat + tool calling
- `supabase/functions/book-meeting/index.ts` — Google Calendar booking
- Migration: chat tables, meeting_requests, user_roles, RLS policies, has_role() function
- Connect Google Calendar connector (one-click prompt during build)

### Heads-up

- **Calendar account**: All bookings go into the Google account you authorize. Use your Evogue calendar (e.g. hello@evogue.com.ng).
- **Timezone**: Bookings will use Africa/Lagos by default — let me know if you'd prefer detecting the visitor's timezone instead.
- **Confirmation emails**: Google Calendar will send the standard invite email to the visitor automatically (includes the Meet link). No extra setup needed.

Approve and I'll build it.

