import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// @ts-expect-error — plain JS module without types
import { generateSitemap } from "./scripts/generate-sitemap.mjs";

// Vite plugin: regenerates public/sitemap.xml automatically.
// - Runs once when the dev server starts and on every build
// - Re-runs whenever src/data/caseStudies.ts is edited
function sitemapPlugin() {
  const run = (label: string) => {
    try {
      const { count, slugs } = generateSitemap() as { count: number; slugs: string[] };
      console.log(`[sitemap] ${label}: ${count} URLs (${slugs.length} case studies)`);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.warn("[sitemap] generation failed:", message);
    }
  };
  return {
    name: "evogue-sitemap",
    apply: () => true,
    buildStart() {
      run("build");
    },
    configureServer(server: { watcher: { on: (event: string, cb: (file: string) => void) => void } }) {
      run("dev start");
      server.watcher.on("change", (file: string) => {
        if (file.replace(/\\/g, "/").endsWith("src/data/caseStudies.ts")) {
          run("caseStudies.ts changed");
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    sitemapPlugin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
