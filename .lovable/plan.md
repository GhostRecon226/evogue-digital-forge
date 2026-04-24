## Goal
Add a tasteful, brand-aligned image to the Contact page hero (Section 1) so it feels warmer and more visual, while keeping the current copy and minimal aesthetic intact.

## Concept for the image
A soft, editorial illustration that *resonates with "contact"* without resorting to a clichéd phone/envelope icon. Direction:

- Abstract, painterly composition of two organic shapes leaning toward each other — suggesting **conversation / connection / reaching out**.
- Brand palette: deep green `#0D3D25`, mid green `#1A7A4A`, bright accent `#00C47A`, on the cream `#f7fdf9` surface so it blends with the existing dot-grid background.
- Subtle paper grain, generous negative space, no text, no hard edges — it should feel like a quiet piece of contemporary art, not a stock illustration.
- Transparent or surface-matched background so it sits naturally on the hero.

Generated with the AI gateway (Nano Banana Pro, `google/gemini-3-pro-image-preview`) for crisper results, saved to `src/assets/contact-hero.png`.

## Layout change
Convert the hero into a 2-column grid on `md+`, keep single column on mobile.

```text
md and up:
┌────────────────────────────┬──────────────────┐
│  Contact (chip)            │                  │
│  Let's build something     │   [ Image ]      │
│  worth using.              │   soft, organic  │
│  Subhead paragraph...      │                  │
└────────────────────────────┴──────────────────┘

mobile:
[ chip ]
[ headline ]
[ subhead ]
[ image ] (smaller, centered)
```

- Left column: existing chip + h1 + paragraph (unchanged copy).
- Right column: the generated image, `object-contain`, max-height bounded so it never dominates the headline. Soft fade-in via existing `animate-fade-in` / `Reveal`.
- On mobile the image appears below the text at reduced size, so the headline remains the first thing users read.

## Files to change
- **New**: `src/assets/contact-hero.png` — generated image.
- **Edit**: `src/pages/Contact.tsx` (lines 213–228) — restructure hero into 2-column grid, import and render the image with proper `alt` text ("Abstract illustration symbolising connection and conversation").

## Out of scope
- No copy changes.
- No changes to the form, FAQ, or other sections.
- No new dependencies.

## QA
After generating, inspect the PNG to confirm: brand-aligned palette, transparent/surface background, no accidental text, clean composition. Then verify the hero on desktop (1328px) and mobile widths — image should never push the headline off-screen or overlap the nav.