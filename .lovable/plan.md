# Set up Lovable Emails for Evogue Consulting

Now that Cloudflare DNS is active and propagated, we can wire up branded email sending from your own domain — no external accounts, no API keys.

## What we'll do

### 1. Set up the sender domain
Open the email setup dialog and add `evogue.co` as the sender domain. Lovable will provision a `notify.evogue.co` subdomain delegated to Lovable's nameservers (NS records added automatically via Cloudflare's API). Sender address will be something like `hello@evogue.co` in the From header.

### 2. Provision email infrastructure
Behind the scenes, this creates:
- A durable email queue with automatic retries
- Send log + suppression list (bounce/complaint handling)
- One-click unsubscribe support
- A background dispatcher that processes the queue every few seconds

### 3. Scaffold the transactional email function
Creates a `send-transactional-email` edge function plus a branded React Email template directory.

### 4. Build a "new contact submission" email template
Branded to match Evogue (dark theme accents, your typography, white email body per email best practices). Sent to **you** (`hello@evogue.com.ng`) every time someone submits the contact form. Includes:
- Sender's name, email, company, project type, budget, message
- Timestamp
- Clear subject line like "New project enquiry from {name}"

### 5. Wire the contact form to trigger the email
Update the contact form submit handler to call `send-transactional-email` after the submission is saved, with an idempotency key so retries are safe.

### 6. (Optional) Confirmation email to the sender
A second template that auto-replies to the person who submitted the form: "Thanks for reaching out — we'll get back to you within 1–2 business days." Keeps leads warm while you respond.

## What you'll need to do
- Click **Set up email domain** when the dialog appears, enter `evogue.co`, and confirm. Cloudflare API will handle the NS delegation automatically since your nameservers point there.
- That's it — everything else is automatic.

## Notes
- Auth emails are not needed right now (no login on the site), so we'll skip that scaffold.
- Inbox notifications will go to `hello@evogue.com.ng` (your existing footer email). If you'd prefer a different inbox, let me know.
- Want the auto-reply confirmation to senders included in step 6, or skip it?
