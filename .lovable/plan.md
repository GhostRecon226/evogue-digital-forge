

## Match Carousel Image Background to Hero Section

Make the carousel photos visually merge with the hero section background so there's no visible "box" or color mismatch behind them — the photo subjects appear to float directly on the hero's background.

### The problem

Right now images use `mix-blend-mode: multiply`, which blends the photo's pixels with whatever is behind them. If the photos were shot on a **white** studio background, multiply works perfectly on a light hero (white pixels disappear). But the hero section in `src/pages/Index.tsx` uses a tinted/colored background, so the white photo backgrounds get **tinted** by multiply instead of disappearing — leaving a visible rectangular tint behind each portrait.

### What will change

- The carousel slide area will visually share the exact same background as the hero section — no tinted rectangle, no visible photo edge.
- The photo subjects (people) remain fully visible and correctly colored.
- Slide-in transition, dot indicators, 4:5 aspect ratio, pause-on-hover all stay identical.

### Approach (need your input)

Multiply blending only "disappears" white backgrounds when the surface behind is also white. Since your hero isn't pure white, I need to pick one of these fixes:

1. **Force the carousel area to a white background** (matches what multiply needs). Photos blend cleanly, but you'll see a white rectangle behind them instead of the hero color.
2. **Remove `mix-blend-mode` and instead remove the photo backgrounds entirely** (transparent PNGs of just the people). Photos then sit directly on the hero background with no rectangle at all — this is what you most likely want, but it requires regenerating the 6 hero images as background-removed PNGs.
3. **Switch blend mode to `screen` or `lighten`** if your hero background is dark — different math, same goal.

### Files likely touched

- `src/components/HeroCarousel.tsx` (blend mode / background tweak)
- Possibly regenerate `src/assets/hero-portrait-1..6.jpg` as transparent `.png` (option 2)
- Possibly `src/pages/Index.tsx` (re-import as `.png`)

### Question for you

Which result do you want?
- **A)** Photos sit on a clean **white panel** inside the hero (simplest, no regeneration).
- **B)** Photo backgrounds are **fully removed** so subjects float directly on the hero background with no rectangle (best looking, requires regenerating all 6 images).
- **C)** Something else — tell me the hero background color you want behind the photos and I'll match it exactly.

