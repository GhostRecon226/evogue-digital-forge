

# Redesign Footer (inspired by uploaded reference)

Replace the current dark green footer with a light, four-column layout that mirrors the reference: brand block on the left, two link columns in the middle, and a contact/socials column on the right — all on a soft surface background, separated by a thin divider with a centered copyright underneath.

## Layout

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ [Logo]            Quick Links     Support              Contact            │
│ Tagline copy      Home            FAQ                  ✉  hello@evogue…  │
│ (max-w-xs)        About           Terms & Conditions   ☎  +234 …         │
│                   Case Studies    Privacy Policy       [in] [x] [ig]     │
│                   Academy                                                 │
│                   Contact                                                 │
├──────────────────────────────────────────────────────────────────────────┤
│                © 2025 Evogue Consulting. All rights reserved.            │
└──────────────────────────────────────────────────────────────────────────┘
```

- 4 columns on `lg`, 2 columns on `md`, stacked on mobile.
- Background: `bg-brand-surface` (`#f7fdf9`) — same warm off-white as the hero, so the footer feels like a natural continuation of the page rather than a hard dark slab.
- Top padding `pt-20`, bottom `pb-8`, with a `border-t border-brand-border/70` divider above the centered copyright row (matches the reference's thin hairline separator).

## Column contents

**Brand (col 1)**
- `<Logo variant="dark" />` (dark version, since background is light now).
- Tagline: "A product studio built on the continent, working with teams globally." (`text-sm text-brand-primary/70 max-w-xs`).

**Quick Links (col 2)** — heading "Quick Links"
- Home → `/`
- About → `/about`
- Case Studies → `/case-studies`
- Academy → `/#academy`
- Contact → `/contact`
- Use `react-router-dom` `Link` so navigation is SPA, not `<a href="#">` placeholders.

**Support (col 3)** — heading "Support"
- FAQ → `/#faq` (anchor; section may not exist yet — link still renders)
- Terms & Conditions → `/terms` (placeholder route)
- Privacy Policy → `/privacy` (placeholder route)

**Contact (col 4)** — heading "Contact"
- Email row: mail icon + `hello@evogueconsulting.com` (mailto link)
- Phone row: phone icon + `+234 706 565 2820` (tel link) — using the number from the reference as a stand-in; easy to swap later.
- Social row: LinkedIn, Twitter/X, Instagram icons (lucide-react), 20px, `text-brand-primary/70 hover:text-brand-accent`.

## Typography & color

- Headings: `text-sm font-semibold text-brand-primary` (no all-caps — matches reference's sentence-case headings).
- Links: `text-sm text-brand-primary/70 hover:text-brand-primary transition-colors`, vertical spacing `space-y-3`.
- Copyright: `text-xs text-brand-primary/60` centered.
- Icons: `lucide-react` (`Mail`, `Phone`, `Linkedin`, `Twitter`, `Instagram`) — already a project dependency.

## Responsive

- `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`, `gap-10 lg:gap-12`.
- Brand column spans full width on mobile; link columns sit side-by-side from `md` up.
- Container uses existing `.container` class for consistent horizontal padding with the rest of the site.

## Files

- **Edit** `src/components/Footer.tsx` — full rewrite with the new structure above.
- No changes to `Logo.tsx`, routes, or design tokens. Placeholder routes (`/terms`, `/privacy`, `/#faq`) are intentional — we can wire them up when those pages exist.

## Out of scope

- No newsletter signup form (not in the reference).
- No new pages for Terms / Privacy / FAQ — links only.
- No changes to header, hero, or other sections.

