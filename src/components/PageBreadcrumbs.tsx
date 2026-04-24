import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

interface PageBreadcrumbsProps {
  items: Crumb[];
}

const SITE_URL = "https://www.evogue.co";

const PageBreadcrumbs = ({ items }: PageBreadcrumbsProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.to ? { item: `${SITE_URL}${c.to}` } : {}),
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm">
          {items.map((c, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${c.label}-${i}`} className="inline-flex items-center gap-1.5">
                {c.to && !isLast ? (
                  <Link
                    to={c.to}
                    className="text-brand-primary/60 hover:text-brand-primary transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={isLast ? "text-brand-primary font-medium" : "text-brand-primary/60"}
                  >
                    {c.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight
                    aria-hidden="true"
                    className="w-3.5 h-3.5 text-brand-primary/40"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default PageBreadcrumbs;
