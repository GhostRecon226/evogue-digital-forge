# Add "The Future Tech Academy" Case Study

Add a second real case study card (matching the Fala Products pattern) with full detail page, and surface it on the homepage Case Studies grid.

## Cover image

You mentioned "the provided cover image" but no image is attached to this message. I'll generate a custom editorial cover image (matching the quality/style we used for Fala Products) using an AI image model, then save it as `src/assets/case-studies/the-future-tech-academy.jpg`.

Concept: clean editorial composition representing a Forex + AI training academy — e.g. a focused Black professional in front of trading charts with subtle AI/data motifs and the academy brand tone (credible, professional, modern). 16:9, ~1600px wide, optimized for web.

If you'd rather supply your own image, upload it after approval and I'll swap it in instead.

## Card on `/case-studies` and homepage

New entry added to `src/data/caseStudies.ts` (placed second, right after Fala):

- slug: `the-future-tech-academy`
- name: "The Future Tech Academy"
- client: "Forex and AI training academy, Nigeria"
- tags: `["EDUTECH", "BRANDING", "STRATEGY"]`
- detailTags: `["EDUTECH", "BRANDING", "STRATEGY", "ADVISORY"]`
- categories: `["Branding", "Strategy"]` (so it appears under existing filter chips; no new filter needed)
- summary: "Built the brand identity, website, and business strategy for a Forex and AI training academy entering a competitive market."
- thumbnail: imported from the new asset
- thumbnailAlt: "The Future Tech Academy — Forex and AI training in Nigeria"
- metrics: `["Full Brand System", "Website Launch", "Strategy and Advisory"]`

The existing `CaseStudyCard` already renders the thumbnail with `object-cover w-full h-full` inside a fixed-height container, so the requested image CSS is already in place.

## Detail page (`/case-studies/the-future-tech-academy`)

Driven by existing `CaseStudyDetail.tsx` — no template changes needed. Data fields:

- problem, approach, outcome: the three paragraphs you provided.
- details:
  - client: "The Future Tech Academy"
  - industry: "EduTech, Financial Education"
  - services: "Brand Identity, Web Design and Development, Business Strategy, Advisory"
  - location: "Nigeria"
  - website: "www.thefuturetechacademy.com"
- testimonial:
  - quote: "We knew what we wanted to teach. Evogue helped us figure out how to show up. The brand and website they built gave us instant credibility with exactly the kind of students we wanted to attract."
  - name: "The Future Tech Academy Team"
- seo:
  - title: "The Future Tech Academy — Brand, Website & Strategy for a Forex and AI Academy"
  - description: "How Evogue Consulting built the brand identity, website, and business strategy for The Future Tech Academy, a Forex and AI training academy in Nigeria."
  - ogImage: "/og/the-future-tech-academy.jpg"

## Homepage grid

`src/pages/Index.tsx` currently uses `caseStudies.slice(0, 3)` for the featured grid. Once the new entry is inserted as the second item, the homepage automatically shows: Fala Products, The Future Tech Academy, Project Beta — fulfilling the request to show the new card alongside Fala on the home page. No code change needed there.

## Files changed

- `src/assets/case-studies/the-future-tech-academy.jpg` (new, generated)
- `src/data/caseStudies.ts` (insert new entry as second item)

No template or routing changes required — the dynamic `/case-studies/:slug` route and shared card/detail components handle the rest.
