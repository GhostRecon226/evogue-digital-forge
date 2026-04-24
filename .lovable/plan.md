

# Fix: Make Hero Image Background Match the Hero Surface (#f7fdf9)

You're right — the previous attempt didn't actually replace the image's background with the hero's surface color. The uploaded portrait still shows its original dark/colored backdrop, which is why it doesn't blend.

## What went wrong

The PNG that was generated previously either kept the original background or wasn't truly transparent on the subject's edges. Either way, the image visually sits on top of the hero like a card, instead of blending into `#f7fdf9`.

## The fix

1. **Re-process `src/assets/hero-portrait.jpg` properly**
   - Run a real background-removal pass on the original JPG using the `rembg` Python tool (high-quality alpha matting model — handles hair/edges cleanly).
   - Composite the resulting cut-out **onto a solid `#f7fdf9` background** and export as `src/assets/hero-portrait.jpg` (overwriting the current file).
   - This way the image's own background pixels literally become `#f7fdf9` — identical to the hero surface — so it blends perfectly with zero edge artifacts, regardless of mask/blend mode.

2. **Update `src/pages/Index.tsx` (lines 263–279)**
   - Switch the import back to `hero-portrait.jpg` (the new flattened version).
   - Keep the layout: `lg:col-span-5`, `aspect-[4/5]`, `Reveal` animation, soft brand glow halo behind it.
   - Use `object-cover object-center` since the image now has a proper full-frame background matching the hero.
   - No masks, no gradient overlays, no edge washes needed — the background literally is the hero color.

3. **Cleanup**
   - Delete the broken `src/assets/hero-portrait.png` (no longer referenced).

## Why this approach (vs. transparent PNG)

A flattened JPG with `#f7fdf9` baked in is more reliable than a transparent PNG because:
- No anti-aliasing halos around the subject's edges
- Smaller file size (JPG ~150–250KB vs PNG ~1.4MB currently)
- Renders identically across all browsers/devices with zero CSS gymnastics
- If the hero ever changes background, we just re-flatten once

## Out of scope

- No copy, CTA, stats, or layout proportion changes
- No changes to other images or pages

