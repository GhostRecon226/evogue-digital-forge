# Fala Products thumbnail: new image + fill the card

## What's done already
A new on-brand product photo has been generated and saved to `src/assets/case-studies/fala-products.jpg` — a solar desk fan paired with a forest-green tee and natural canvas tote on a warm minimalist surface. It already replaces the cropped screenshot used before.

Preview:

![preview](attachment://fala_preview)

## What still needs to change (one tiny edit)

**File:** `src/components/CaseStudyCard.tsx`

Switch the thumbnail `<img>` from `object-contain` (with padding, leaving empty space around the image) to `object-cover` so the new image fills the entire 200px tall thumbnail area edge to edge.

- Remove `object-contain p-4`
- Add `object-cover`
- Keep the subtle hover zoom

That's the only code change. The placeholder gradient cards (Project Beta, Gamma, etc.) are untouched and continue to show the centered project name on the green gradient.

## Result
The Fala Products card will display the bespoke generated product shot, filling the full thumbnail area with no empty padding, with a gentle zoom and the existing dark-overlay on hover.
