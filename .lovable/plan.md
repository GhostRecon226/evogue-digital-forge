# Update site-wide email to hello@evogue.com.ng

Several pages still display old email addresses (`hello@evogue.consulting` and `hello@evogue.co`). These will be unified to `hello@evogue.com.ng`, which already appears in the footer, Privacy, and Terms pages.

## Files to update

1. **src/pages/Index.tsx** (3 occurrences)
   - Line 630–631: contact link `href="mailto:hello@evogue.consulting"` and visible text → `hello@evogue.com.ng`
   - Line 662: `window.location.href = mailto:hello@evogue.consulting?...` → `hello@evogue.com.ng`

2. **src/pages/Contact.tsx** (2 occurrences)
   - Line 314: `value: "hello@evogue.co"` → `"hello@evogue.com.ng"`
   - Line 315: `href: "mailto:hello@evogue.co"` → `"mailto:hello@evogue.com.ng"`

3. **src/pages/About.tsx** (1 occurrence)
   - Line 153: `email: "hello@evogue.consulting"` → `"hello@evogue.com.ng"`

## Files left untouched (already correct)

- `src/components/Footer.tsx` — already `hello@evogue.com.ng`
- `src/pages/Privacy.tsx` — already `hello@evogue.com.ng`
- `src/pages/Terms.tsx` — already `hello@evogue.com.ng`
- Form input placeholders like `you@company.com` (sample placeholder text, not a real address)

## Out of scope

- No backend / email infrastructure changes. The sender domain (`notify.evogue.com.ng`) and queue setup remain as configured.
- No copy/content rewrites — only the email string is swapped.
