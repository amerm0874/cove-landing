import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { SITE_URL } from "@/lib/constants";

export type Crumb = {
  label: string;
  /** Absolute site path. Omitted on the final crumb, which is the current page. */
  href?: string;
};

/**
 * Visible breadcrumb trail plus the matching BreadcrumbList JSON-LD.
 * Both come from the same array, so the markup and the structured data can
 * never drift apart.
 */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${SITE_URL}${crumb.href === "/" ? "/" : crumb.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 font-mono-tnum text-[11px] uppercase tracking-widest text-muted">
          {trail.map((crumb, i) => (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 text-muted/60" aria-hidden />}
              {crumb.href ? (
                <Link to={crumb.href} className="transition-colors hover:text-rose">
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-plum/70">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
