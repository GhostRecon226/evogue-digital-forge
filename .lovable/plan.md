## Update phone and WhatsApp number to +44 7404 331835

Replace the existing Nigerian numbers across the site with the new UK number.

### Changes
1. **`src/components/WhatsAppButton.tsx`** — set `WHATSAPP_NUMBER` to `447404331835` (floating WhatsApp button used on every page).
2. **`src/components/Footer.tsx`** — update the WhatsApp link (`https://wa.me/447404331835`) and the displayed number to `+44 7404 331835`.
3. **`src/pages/Privacy.tsx`** — replace the contact phone `+234 706 565 2820` with `+44 7404 331835`.

### Notes
- WhatsApp links use the international format without `+` or spaces (`447404331835`).
- Displayed number uses the readable format `+44 7404 331835`.
- No structural or design changes — text/href values only.
