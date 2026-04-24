
## Hero Image Carousel with Branded Portraits

Replace the static hero portrait on the homepage with a smoothly auto-rotating carousel of 3 portraits — keeping the existing one and adding 2 new AI-generated photos featuring team members wearing shirts with the Evogue logo.

### What will change

**Homepage hero (right column)**
- The single tilted portrait becomes a rotating display of 3 images.
- Auto-advances every ~5 seconds with a soft cross-fade transition.
- Preserves the current 4:5 aspect ratio, 10° rotation, glow halo, and hover effect.
- Small dot indicators below the image so visitors can see progress / click to jump.
- Pauses rotation on hover for accessibility.

**New images to generate (2 photos)**
Style-matched to the existing `hero-portrait.jpg` (warm, professional, studio-feel) so they look like one cohesive set:
1. A professional team member (different person/pose) wearing a branded polo/t-shirt with the Evogue logo clearly visible on the chest.
2. A second team member in a different setting/pose, also wearing a shirt with the Evogue logo on the chest.

Both will be generated with Nano Banana Pro using `evogue-logo.png` as a visual reference so the logo on the shirt matches the real brand mark. Saved as `src/assets/hero-portrait-2.jpg` and `src/assets/hero-portrait-3.jpg`.

### Technical details

- **Image generation**: Use the `ai-gateway` skill with `google/gemini-3-pro-image-preview` (higher quality for realistic people + readable logo on fabric). Pass the existing logo PNG as a reference image in the prompt so the shirt print matches. Generate 4:5 portrait orientation to match the existing slot.
- **Carousel component**: New lightweight `HeroCarousel.tsx` in `src/components/`. Pure React (no extra deps) — uses `useState` + `useEffect` interval for rotation and absolute-positioned `<img>` layers with `opacity` transitions for the cross-fade. Keeps the existing wrapper markup (rotation, glow, aspect ratio) so styling is unchanged.
- **Index.tsx**: Replace the `<img src={heroPortrait} … />` block inside the Reveal with `<HeroCarousel images={[heroPortrait, heroPortrait2, heroPortrait3]} />`.
- **Accessibility**: Each slide has descriptive `alt` text; carousel pauses on hover/focus; indicator dots are real `<button>`s with `aria-label`.

### Files

- New: `src/assets/hero-portrait-2.jpg` (generated)
- New: `src/assets/hero-portrait-3.jpg` (generated)
- New: `src/components/HeroCarousel.tsx`
- Edit: `src/pages/Index.tsx` (swap single image for carousel)

### Notes

- I'll QA the generated images before wiring them in — if the logo on the shirt comes out distorted or unreadable, I'll regenerate with a tighter prompt or fall back to a clean chest-pocket placement.
- No backend, no new dependencies, no other sections of the page are touched.
