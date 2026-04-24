// Auto-generates public/sitemap.xml from src/data/caseStudies.ts.
// Runs on dev server start and on every build via the Vite plugin in vite.config.ts.
// Safe to run standalone: `node scripts/generate-sitemap.mjs`
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SITE_URL = "https://www.evogue.co";

// Static routes that always exist (mirror src/App.tsx)
const STATIC_ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/case-studies", changefreq: "weekly", priority: "0.9" },
  { path: "/ai-services", changefreq: "monthly", priority: "0.9" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
];

function extractCaseStudySlugs() {
  const file = resolve(ROOT, "src/data/caseStudies.ts");
  const src = readFileSync(file, "utf8");
  // Match slug: "value" entries inside the caseStudies array
  const slugs = [];
  const regex = /slug:\s*["'`]([a-z0-9-]+)["'`]/gi;
  let match;
  while ((match = regex.exec(src)) !== null) {
    slugs.push(match[1]);
  }
  // De-duplicate while preserving order
  return [...new Set(slugs)];
}

function buildSitemapXml(urls) {
  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${SITE_URL}${u.path}</loc>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function generateSitemap() {
  const slugs = extractCaseStudySlugs();
  const caseStudyRoutes = slugs.map((slug) => ({
    path: `/case-studies/${slug}`,
    changefreq: "monthly",
    priority: "0.8",
  }));

  // Insert case study URLs right after /case-studies for readability
  const merged = [];
  for (const route of STATIC_ROUTES) {
    merged.push(route);
    if (route.path === "/case-studies") merged.push(...caseStudyRoutes);
  }

  const xml = buildSitemapXml(merged);
  const out = resolve(ROOT, "public/sitemap.xml");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, xml);
  return { count: merged.length, slugs };
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const { count, slugs } = generateSitemap();
  console.log(`[sitemap] wrote public/sitemap.xml — ${count} URLs (${slugs.length} case studies)`);
}
