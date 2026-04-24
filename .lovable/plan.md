## Fix: Scroll to top on route change

**Problem:** Clicking "View Case Study" (and any other in-app link) navigates to the new route but preserves the previous scroll position, dropping users mid-page on the detail view.

**Cause:** React Router does not auto-scroll on navigation, and there's no global scroll-restoration component in `src/App.tsx`.

### Changes

1. **Create `src/components/ScrollToTop.tsx`** — a tiny component that listens to `pathname` changes via `useLocation` and calls `window.scrollTo({ top: 0, left: 0 })`. Returns `null`. Uses `"auto"` behavior (instant) so the new page appears at the top immediately rather than animating.

2. **Mount it in `src/App.tsx`** — render `<ScrollToTop />` inside `<BrowserRouter>`, just above `<Routes>`, so it runs on every route change across the app (case studies, about, contact, AI services, etc.).

### Notes

- This is a global fix — every internal navigation will reset scroll, not just the case studies link.
- Hash links (e.g. `#contact`) are unaffected because they don't change `pathname`.
- No changes needed to `CaseStudyCard.tsx` or `CaseStudies.tsx`.