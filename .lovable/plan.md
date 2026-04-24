

# Tilt Hero Image 10° to the Right

Apply a bold 10° rightward tilt to the hero portrait on the homepage.

## Changes

**`src/pages/Index.tsx`** — hero image container (~lines 263–279)
- Add `rotate-[10deg]` to the image wrapper so the portrait tilts clockwise.
- Add a hover transition: `transition-transform duration-500 hover:rotate-[8deg]` for a subtle settle effect on hover.
- Keep the existing `Reveal` animation, `aspect-[4/5]`, `lg:col-span-5`, and brand glow halo intact.
- Halo stays untilted (sits behind), so the glow remains a soft circular backdrop while only the image rotates.

## Responsive behavior

- Tilt applies at all breakpoints. On mobile the image is stacked above the text, so the 10° rotation reads as a playful angled card.
- Add small horizontal padding margin to the column to prevent the rotated corners from clipping against the viewport edge on narrow screens.

## Out of scope

- No copy, layout, or color changes.
- No changes to the image asset itself.

