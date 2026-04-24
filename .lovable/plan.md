# Show the Fala Products image on the case study detail page

## Problem
The case study detail page (`/case-studies/fala-products`) renders an empty green gradient block where the hero image should be. The new product image already lives at `src/assets/case-studies/fala-products.jpg` and is wired into the data file as `study.thumbnail`, but `CaseStudyDetail.tsx` still renders a hardcoded gradient div instead of the image.

## Change

**File:** `src/pages/CaseStudyDetail.tsx` (the "Hero image" block, around line 109)

Replace the static gradient div with a real image container:

- If `study.thumbnail` exists → render an `<img>` filling the area with `object-cover`, using `study.thumbnailAlt` (fallback to `"{name} — {client}"`).
- If no thumbnail → keep the current green gradient as a fallback, but center the project name on top of it (matching the card behavior).
- Bump the hero height on larger screens from `h-[320px]` to `md:h-[460px]` so the image gets proper visual weight.
- Wrap in `rounded-[12px] overflow-hidden border border-brand` to match the rest of the page's card styling.

## Result

- **Fala Products** detail page shows the generated solar fan + lifestyle product photo as a large hero image, no more empty green block.
- Other case studies (which still have no thumbnail) gracefully fall back to the green gradient with their project name centered on it — same pattern already used on the cards.
