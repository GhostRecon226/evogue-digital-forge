// Auto-generates public/sitemap.xml.
// Runs on dev server start and on every build via the Vite plugin in vite.config.ts.
// Safe to run standalone: `node scripts/generate-sitemap.mjs`
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SITE_URL = "https://www.evogueconsulting.com";

// Clean, curated list of indexable routes
const ROUTES = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
  { path: "/ai-services", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
];

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
  const xml = buildSitemapXml(ROUTES, lastmod);
  const out = resolve(ROOT, "public/sitemap.xml");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, xml);
  return { count: ROUTES.length, slugs: [] };
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const { count } = generateSitemap();
  console.log(`[sitemap] wrote public/sitemap.xml — ${count} URLs`);
}
