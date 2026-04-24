## WhatsApp Integration Plan

Add a persistent floating WhatsApp chat button visible on every page that opens a WhatsApp conversation with Evogue, prefilled with a consultation message.

### Configuration
- **Number**: `08107396844` → normalized to international format `2348107396844` (Nigeria, drop leading 0, add country code 234) for the `wa.me` link.
- **Prefilled message**: "Hello Evogue team, I'm interested in booking a consultation."
- **Link format**: `https://wa.me/2348107396844?text=Hello%20Evogue%20team%2C%20I'm%20interested%20in%20booking%20a%20consultation.`
- Opens in a new tab (`target="_blank"`, `rel="noopener noreferrer"`).

### What gets built

1. **New component**: `src/components/WhatsAppButton.tsx`
   - Fixed position bottom-right (`fixed bottom-6 right-6 z-50`), safe spacing from edges on mobile.
   - Circular brand-green button (WhatsApp `#25D366`) with the official WhatsApp glyph (inline SVG, no extra dependency).
   - Subtle pulse/ring animation on idle, scale-up on hover, accessible focus ring.
   - Tooltip label "Chat on WhatsApp" on hover (desktop) and `aria-label` for screen readers.
   - Optional small "Chat with us" pill that expands on first scroll then collapses to icon (kept minimal so it doesn't compete with content).

2. **Mount globally**: render `<WhatsAppButton />` once in `src/App.tsx` so it appears on all routes (Home, About, AI Services, Case Studies, Contact, FAQ, Privacy, Terms, etc.).

3. **Polish details**
   - Hidden when printing (`print:hidden`).
   - Respects `prefers-reduced-motion` (no pulse animation).
   - Does not overlap key CTAs: bottom-right placement, with a small bottom offset adjustment on the Contact page if needed (verified by quick visual check after implementation).

### Out of scope
- No backend, no WhatsApp Business API, no analytics events (can be added later if you want click tracking).
- No changes to footer, contact page, or homepage contact card (you chose floating button only).

### Files
- **Create**: `src/components/WhatsAppButton.tsx`
- **Edit**: `src/App.tsx` (mount the component)
