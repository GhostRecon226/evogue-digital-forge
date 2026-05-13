// Auto-generates public/sitemap.xml.
// Runs on dev server start and on every build via the Vite plugin in vite.config.ts.
// Safe to run standalone: `node scripts/generate-sitemap.mjs`
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SITE_URL = "https://www.evogueconsulting.com";

// Static, indexable routes
const STATIC_ROUTES = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
  { path: "/ai-services", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/unsubscribe", changefreq: "yearly", priority: "0.2" },
];

// Pull case study slugs from src/data/caseStudies.ts (regex; avoids TS import).
function readCaseStudySlugs() {
  try {
    const src = readFileSync(resolve(ROOT, "src/data/caseStudies.ts"), "utf8");
    const slugs = [];
    const re = /slug:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(src)) !== null) slugs.push(m[1]);
    return slugs;
  } catch {
    return [];
  }
}

function buildSitemapXml(urls, lastmod) {
  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${SITE_URL}${u.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function generateSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const slugs = readCaseStudySlugs();
  const dynamicRoutes = slugs.map((slug) => ({
    path: `/case-studies/${slug}`,
    changefreq: "monthly",
    priority: "0.7",
  }));
  const all = [...STATIC_ROUTES, ...dynamicRoutes];
  const xml = buildSitemapXml(all, lastmod);
  const out = resolve(ROOT, "public/sitemap.xml");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, xml);
  return { count: all.length, slugs };
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const { count } = generateSitemap();
  console.log(`[sitemap] wrote public/sitemap.xml — ${count} URLs`);
}
