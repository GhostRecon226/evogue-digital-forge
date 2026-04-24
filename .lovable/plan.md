

## Slide-In Transition for Hero Carousel

Replace the current cross-fade between hero portraits with a smooth horizontal slide-in animation, so each new image glides in from the right while the previous one slides out to the left.

### What will change

- When the carousel advances (auto every 5s, or via dot click), the next portrait slides in from the right edge as the current one slides out to the left.
- Movement uses a soft easing curve (~700ms) so it feels polished, not abrupt.
- Manual dot navigation also slides in the same direction for consistency.
- Aspect ratio, dot indicators, pause-on-hover, and accessibility behavior stay exactly the same.

### Technical details

- Edit `src/components/HeroCarousel.tsx`:
  - Keep the absolute-stacked image layers, but swap the opacity-based transition for a `transform: translateX(...)` transition.
  - Each slide gets one of three states: active (`translate-x-0`), waiting on the right (`translate-x-full`), or exiting to the left (`-translate-x-full`).
  - Apply `transition-transform duration-700 ease-out` to each `<img>`.
  - Keep `overflow-hidden` on the container so off-screen slides are clipped cleanly.
  - Preserve `aria-hidden`, `loading`, and dot-button logic unchanged.

### Files

- Edit: `src/components/HeroCarousel.tsx`

