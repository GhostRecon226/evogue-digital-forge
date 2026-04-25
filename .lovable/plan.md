# Finalize "Book a Call" with Calendly

## What's there today
- **Contact page** (`src/pages/Contact.tsx`, line 462): Book a Call link points to a placeholder `https://calendly.com/`.
- **AI Services page** (`src/pages/AiServices.tsx`, line 870-878): "Strategy" pricing tier's "Book a Call" routes internally to `/contact` — likely fine to leave, or also point to Calendly.

## What I need from you
**Your Calendly URL** — something like `https://calendly.com/evogue-consulting/discovery-call` or your account's scheduling link. Paste it in your reply and I'll wire it up.

## Plan

### 1. Centralize the Calendly URL
Add a single constant `CALENDLY_URL` in `src/lib/utils.ts` (or a new `src/lib/links.ts`) so the link is defined once and reused. Avoids the placeholder drift we just hit.

### 2. Replace the placeholder on Contact page
Update `src/pages/Contact.tsx` line 462 to use `CALENDLY_URL`. Keep `target="_blank"` + `rel="noopener noreferrer"` (already correct).

### 3. AI Services "Strategy" tier CTA — pick one
- **Option A (recommended):** Keep it routing to `/contact` so users see context + form options before booking.
- **Option B:** Point it directly to Calendly like the contact page button.

I'll default to **A** unless you say otherwise.

### 4. Optional UX upgrade — inline Calendly popup
Instead of opening Calendly in a new tab, embed it as a **popup modal** using Calendly's official widget (`react-calendly` package, ~12KB). Click "Book a Call" → modal opens with the scheduler inside your site, branded background. Falls back to new tab if JS fails.

Let me know if you want this — otherwise we'll keep the simple new-tab link (faster, zero deps).

## Technical details
- New file: `src/lib/links.ts` exporting `export const CALENDLY_URL = "..."`.
- Edits: `src/pages/Contact.tsx` (1 line), optionally `src/pages/AiServices.tsx` (1 anchor swap).
- If popup chosen: `bun add react-calendly`, wrap CTA in `PopupButton` from the package.

## Decisions needed
1. **Your Calendly URL?** (required)
2. **AI Services Strategy tier** — keep routing to `/contact` (A) or send straight to Calendly (B)?
3. **Inline popup widget** or **simple new-tab link**?
