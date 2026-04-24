

# Make Hero Portrait Background Match Hero Surface

The current `hero-portrait.jpg` has its own baked-in background color (from the original upload), which is why even with the radial mask, you still see a different tone behind the subject. We'll remove the image's background and replace it with a transparent PNG so the hero's `#f7fdf9` (`--brand-surface`) shows through cleanly behind the subject.

## What we'll change

1. **Process the source image** (`src/assets/hero-portrait.jpg`)
   - Use a background-removal step to isolate the subject.
   - Export as `src/assets/hero-portrait.png` with a fully transparent background.
   - Keep the original JPG in place as a fallback (no deletion needed).

2. **Update the Hero image markup** (`src/pages/Index.tsx`, lines ~263–294)
   - Swap the import to the new transparent PNG.
   - Remove the `WebkitMaskImage` / `maskImage` radial mask — it's no longer needed once the background is gone.
   - Remove the radial "edge wash" overlay (`absolute inset-0` div) for the same reason.
   - Keep the soft brand-tinted glow halo behind the subject for depth.
   - Result: the subject sits directly on the hero's `#f7fdf9` background with a subtle glow, no visible rectangle or color mismatch.

3. **Preserve responsiveness & accessibility**
   - Keep the `aspect-[4/5]` container, `object-cover object-center`, `lg:col-span-5` placement, and `Reveal` animation untouched.
   - Keep the existing `alt` text.

## Technical notes

- Background removal will be done via the `@huggingface/transformers` browser-side model OR a one-shot processing script during implementation that writes the cleaned PNG to `src/assets/`. We'll do the latter (build-time, not runtime) so there's zero performance cost in the browser — the served asset is already transparent.
- `--brand-surface` in `src/index.css` resolves to `#f7fdf9`, which is what will show through the transparent areas — exactly the user's requested behavior.
- No changes needed to Tailwind config, other pages, or the case studies system.

## Out of scope

- No changes to copy, CTAs, stats row, or layout proportions.
- No changes to other images on the site.

