

## Replace placeholder logo with new uploaded asset

### What will change

1. **Save the logo** to `src/assets/evogue-logo.png` from `user-uploads://Untitled_design_1.png` (square lockup: circular "E" mark above serif "EVOGUE" wordmark with green "CONSULTING" subtext, on white).

2. **Rewrite `src/components/Logo.tsx`**:
   - Import the asset: `import logoSrc from "@/assets/evogue-logo.png"`.
   - Render `<img src={logoSrc} alt="Evogue Consulting" />` — drop the inline SVG mark and the "EVOGUE / Consulting" text block (the wordmark is baked into the image).
   - Keep the `variant="dark" | "light"` and `className` props so `Nav.tsx` and `Footer.tsx` need no changes.
   - For `variant="light"` (dark green footer), apply Tailwind `brightness-0 invert` so the dark text/ring renders white. The bright accent green inside the "E" mark will flatten to white — acceptable trade-off for a single-source logo.
   - Sizing: `h-10 md:h-11 w-auto` in nav, `h-14 w-auto` in footer. The lockup is square, so it needs more vertical room than the previous side-by-side mark.
   - Add `loading="eager"` + `decoding="async"` for the nav instance to protect LCP.

3. **No changes to `Nav.tsx` or `Footer.tsx`** — they consume `<Logo />` and `<Logo variant="light" />` unchanged. Nav row stays `h-16` and the `h-10/h-11` logo fits within it.

### Technical notes

- PNG imported through Vite for fingerprinting and caching.
- `w-auto` + fixed height class preserves the square aspect ratio without CLS.
- `aria-hidden` on the `<img>` is not needed — the `alt` provides the accessible name; the `aria-label` already on the nav anchor remains as a redundant safeguard.

### Caveat

The uploaded PNG has a white background baked in (not transparent). Invisible on the white nav, but the `invert` filter on the footer relies on the white pixels inverting to the dark green range — it will look clean but the bright accent-green stripe inside the "E" loses its color. If you later upload a transparent PNG or SVG (ideally a white-on-transparent variant for the footer), I'll swap it in for a crisper result.

