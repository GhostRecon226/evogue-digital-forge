## Fix WhatsApp "blocked" link

Switch the floating button to the more reliable `api.whatsapp.com/send` endpoint and remove the apostrophe in the prefilled message that can cause encoding issues.

### Change
In `src/components/WhatsAppButton.tsx`:
- URL: `https://wa.me/2348107396844?text=...` → `https://api.whatsapp.com/send?phone=2348107396844&text=...`
- Message: "Hello Evogue team, I'm interested in booking a consultation." → "Hello Evogue team, I am interested in booking a consultation."

That's it — single small edit, no other files touched.