

# Case Studies Page

Add a dedicated Case Studies experience: an index page with filtering and a project grid, plus a dynamic individual case study page reachable from each card.

## Routes

- `/case-studies` — index (hero, filter bar, grid, CTA banner)
- `/case-studies/:slug` — individual case study layout
- Update homepage nav anchor `#case-studies` to also link here from the "Case Studies" nav item

## Files

**New**
- `src/data/caseStudies.ts` — typed array of 6 case studies (slug, tags, name, client, summary, metrics, problem/approach/outcome paragraphs, details: industry, services, duration, year). Single source of truth for both list and detail pages.
- `src/pages/CaseStudies.tsx` — index page
- `src/pages/CaseStudyDetail.tsx` — individual layout

**Edited**
- `src/App.tsx` — register the two new routes above the catch-all
- `src/components/Nav.tsx` — point the "Case Studies" link to `/case-studies` (keep behavior consistent with About/Contact pattern)

## Section-by-section build (`/case-studies`)

1. **Hero** — `bg-brand-surface` + `dot-grid` overlay (matches homepage). Pill `CASE STUDIES`, h1 "Work that speaks for itself.", secondary green subhead. Fades in via `Reveal`.
2. **Filter bar** — sticky-feeling row of 6 pills (All, Product Design, Engineering, Strategy, Branding, AI and Automation). Local `useState` for active filter. Selected: `bg-brand-primary text-white`; unselected: white bg, `border-brand` thin border, `text-brand-primary`. Hover lifts color to secondary green.
3. **Grid** — `md:grid-cols-2 gap-6`, cards rendered with Framer Motion `AnimatePresence` + `layout` so non-matching cards fade/scale out and the grid reflows smoothly. Card structure exactly per spec: 200px gradient thumbnail (`linear-gradient(135deg, brand-surface → brand-border → brand-accent/35)`), tag chips (reuse `Pill` style), name, client line, 2-line summary (`line-clamp-2`), 3-metric row (small pill style with accent-tinted background), and a "View Case Study →" link revealed on hover. Hover: `-translate-y-1`, `shadow-card`, border transitions to `brand-secondary`. Cards stagger in via `Reveal delay={i * 0.08}`.
4. **CTA banner** — `bg-brand-primary` strip, accent-green eyebrow, white headline "Seen enough? Let's talk.", light-green subtext, white button → `/contact`.
5. **Footer** — existing `<Footer />`.

## Individual case study (`/case-studies/:slug`)

Lookup by slug; if not found render a small "Not found, back to Case Studies" state.

- Back link top-left ("← Back to Case Studies", `text-brand-secondary`, hover deep green).
- Hero block: tag row, large h1 name, one-line summary, 3 metric pills inline.
- Full-width 320px gradient image placeholder, rounded.
- Two-column body (`lg:grid-cols-3`, gap-12):
  - **Left (col-span-2)**: "The Problem", "Our Approach", "The Outcome" — each with `label-caps` label + 2–3 paragraph body.
  - **Right (col-span-1, sticky `lg:sticky lg:top-32 self-start`)**:
    - Project details card (border-brand, rounded): Client, Industry, Services, Duration, Year.
    - CTA card: "Have a similar project?" + "Start a Project" button → `/contact`.
- Bottom strip: right-aligned "Next Case Study →" linking to the next slug in the array (wraps to first).

## Animations

- Reuse `Reveal` for hero, section headings, and card stagger.
- Filter transitions: Framer Motion `AnimatePresence` with `layout` on each card; fade + slight scale on enter/exit (~250ms).
- Smooth scroll already inherited from global `html { scroll-behavior: smooth }`.
- Hover lift on cards via Tailwind transitions (already used on homepage).

## SEO / polish

- `<Helmet>` titles + meta descriptions on both pages (matches Contact page pattern).
- `scroll-margin-top` already handles the sticky nav offset globally.
- Mobile: filter bar becomes horizontally scrollable (`overflow-x-auto`, `snap-x`) so all six pills remain reachable; grid collapses to 1 column.

## Out of scope

- No CMS/backend wiring — case studies stay in the static `caseStudies.ts` array. (Easy to migrate to a `case_studies` table later if you want.)
- Email-form/cloud work continues to wait on DNS verification — unchanged by this task.

