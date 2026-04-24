

## Remove Tilt from Hero Carousel Images

Make the hero portraits sit perfectly straight instead of being rotated 10°.

### What will change

- The rotating hero image on the homepage will no longer be tilted — it will display upright.
- The subtle hover "untilt" interaction is removed since there's no tilt to begin with.
- All other styling (4:5 aspect ratio, cross-fade transitions, dot indicators, pause-on-hover) stays exactly the same.

### Technical details

- Edit `src/components/HeroCarousel.tsx`: remove `rotate-[10deg]`, `hover:rotate-[8deg]`, and the related `transition-transform duration-500` from the inner image wrapper. Keep `relative aspect-[4/5] overflow-hidden`.

### Files

- Edit: `src/components/HeroCarousel.tsx`

