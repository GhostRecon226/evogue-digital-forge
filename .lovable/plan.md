

## Add 3 More Hero Carousel Photos (Including Group Shots)

Expand the homepage hero carousel from 3 to 6 portraits by generating 3 new branded photos — including group shots — that match the existing studio-style set.

### What will change

- Hero carousel rotates through 6 images instead of 3 (still auto-advances every 5s, same slide-in transition, same dot indicators — they'll just show 6 dots now).
- 3 new AI-generated photos added, all featuring Evogue logo on shirts:
  1. **Group photo** — 3 team members together, smiling, branded shirts visible.
  2. **Group photo** — 2 team members in a collaborative pose (e.g. reviewing something together), branded shirts.
  3. **Solo portrait** — a different team member in a fresh pose, for variety alongside the group shots.
- Style-matched to existing portraits: warm lighting, professional studio feel, 4:5 aspect ratio.

### Technical details

- **Image generation**: Use `google/gemini-3-pro-image-preview` via the ai-gateway skill, passing `evogue-logo.png` as a visual reference so the logo on shirts matches the real brand mark. Generate at 4:5 portrait orientation.
- **Files saved**: `src/assets/hero-portrait-4.jpg`, `hero-portrait-5.jpg`, `hero-portrait-6.jpg`.
- **Wiring**: Edit `src/pages/Index.tsx` to import the 3 new assets and append them to the `images` array passed to `<HeroCarousel />`. No changes needed to `HeroCarousel.tsx` — it already handles any number of slides.
- **QA**: Each generated image will be inspected before wiring; if the logo on shirts comes out distorted or unreadable, regenerate with a tighter prompt.

### Files

- New: `src/assets/hero-portrait-4.jpg`
- New: `src/assets/hero-portrait-5.jpg`
- New: `src/assets/hero-portrait-6.jpg`
- Edit: `src/pages/Index.tsx`

