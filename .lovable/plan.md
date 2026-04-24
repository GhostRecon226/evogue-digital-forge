## Goal
Replace the phone number in the footer with the project's WhatsApp number, so users get a tap-to-chat experience consistent with the floating WhatsApp button.

## Changes
**File: `src/components/Footer.tsx`**

1. Swap the lucide icon import: `Phone` → `MessageCircle` (a chat-bubble icon, clearer affordance for WhatsApp than a phone receiver).
2. Replace the existing `<li>` (currently `tel:+2347065652820` showing "+234 706 565 2820") with a WhatsApp link:
   - `href`: `https://wa.me/2348107396844?text=...` using the same number and prefilled message already used by `WhatsAppButton.tsx` (`2348107396844`, "Hello Evogue team, I am interested in booking a consultation.").
   - Opens in a new tab (`target="_blank"`, `rel="noopener noreferrer"`).
   - `aria-label="Chat with Evogue on WhatsApp"`.
   - Visible label: `+234 810 739 6844`.
   - Keeps the same styling, hover underline, and icon size as the surrounding contact links.

## Out of scope
- No changes to the floating WhatsApp button.
- No changes to the email link or social icons.
- The old `+234 706 565 2820` number is removed entirely (per the request to replace).