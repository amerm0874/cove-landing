/**
 * Visible breadcrumb trail for nested pages (blog index, blog posts).
 *
 * Pairs with `breadcrumbSchema()` in src/lib/seo.ts — Google wants the JSON-LD
 * trail to match a trail the user can actually see, so the two are always
 * rendered together. Styled as the existing "eyebrow" line so it reads as part
 * of the page furniture rather than a new UI element.
 *
 * `to`/`params` are the TanStack Router props, so links stay inside the active
 * locale; the final crumb is the current page and is not a link.
 */
import { Link, type LinkProps } from "@tanstack/react-router";
import { Fragment } from "react";

export type Crumb = {
  label: string;
  /** Omit on the last crumb — the current page is not linked. */
  to?: LinkProps["to"];
  params?: LinkProps["params"];
};

export function Breadcrumbs({ items, label }: { items: Crumb[]; label: string }) {
  return (
    <nav
      aria-label={label}
      className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((crumb, i) => {
          const isLast = i === items.length - 1;
          return (
            <Fragment key={`${crumb.label}-${i}`}>
              <li>
                {crumb.to && !isLast ? (
                  <Link
                    to={crumb.to}
                    params={crumb.params}
                    className="transition-colors hover:text-rose focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined}>{crumb.label}</span>
                )}
              </li>
              {!isLast && (
                <li aria-hidden className="text-muted/60">
                  /
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
