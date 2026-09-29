/**
 * Shared page metadata, locale-aware.
 *
 * Every route builds its own tags with `pageMeta()` so each page ships its own
 * canonical `og:url`, `og:locale`, `og:type`, `twitter:*` pair and preview image.
 * `path` is always the BASE (English) path, e.g. "/faq"; the locale is applied
 * to produce the canonical/og:url and the hreflang alternates.
 *
 * TanStack Router dedupes meta by `name` / `property`, keeping the last
 * occurrence, so a route's own tags always win over the root's.
 */

import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_HTML_LANG,
  OG_LOCALE,
  localizedPath,
  type Locale,
} from "@/i18n/config";

export const SITE_URL = "https://www.coveivf.life";

/** 1200x630 preview image in /public. */
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
export const OG_IMAGE_ALT = "Cove IVF Tracker — IVF meds, shots and reminders";
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "630";

/** Organization logo (absolute URL, PNG in /public) for JSON-LD. */
export const LOGO_URL = `${SITE_URL}/logo.png`;

export const APP_STORE_ID = "6788749556";
export const APP_STORE_LISTING_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;

/** Shape accepted by TanStack Router's `head().meta`. */
export type HeadMeta = {
  title?: string;
  name?: string;
  property?: string;
  content?: string;
};

export type HeadLink = {
  rel: string;
  href: string;
  hrefLang?: string;
};

export function absoluteUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/** Canonical link for a base path under a given locale. */
export function canonicalLink(basePath: string, locale: Locale = DEFAULT_LOCALE): HeadLink {
  return { rel: "canonical", href: absoluteUrl(localizedPath(basePath, locale)) };
}

/** @deprecated English-only canonical. Prefer canonicalLink(path, locale). */
export function canonical(path: string): HeadLink {
  return canonicalLink(path, DEFAULT_LOCALE);
}

/**
 * hreflang alternates for every locale + x-default (English), for one page.
 * `basePath` is the English path, e.g. "/faq" or "/".
 */
export function hreflangLinks(basePath: string): HeadLink[] {
  const links: HeadLink[] = LOCALES.map((loc) => ({
    rel: "alternate",
    hrefLang: LOCALE_HTML_LANG[loc],
    href: absoluteUrl(localizedPath(basePath, loc)),
  }));
  links.push({
    rel: "alternate",
    hrefLang: "x-default",
    href: absoluteUrl(localizedPath(basePath, DEFAULT_LOCALE)),
  });
  return links;
}

export type PageMetaInput = {
  title: string;
  description: string;
  /** Base (English) route path, e.g. "/faq". Used for canonical + og:url. */
  path: string;
  /** Active locale — applied to canonical/og:url/og:locale. */
  locale?: Locale;
  /** Defaults to `description`. */
  ogDescription?: string;
  type?: "website" | "article";
  /** Post-specific image. Falls back to the site-wide preview. */
  image?: string | null;
};

/**
 * Full meta set for one page. Width/height are only emitted for the site-wide
 * image — a post's own image has unknown dimensions, and wrong ones are worse
 * than none.
 */
export function pageMeta({
  title,
  description,
  path,
  locale = DEFAULT_LOCALE,
  ogDescription,
  type = "website",
  image,
}: PageMetaInput): HeadMeta[] {
  const social = ogDescription ?? description;
  const imageUrl = image ?? OG_IMAGE_URL;
  const isDefaultImage = imageUrl === OG_IMAGE_URL;
  const url = absoluteUrl(localizedPath(path, locale));

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: social },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:locale", content: OG_LOCALE[locale] },
    { property: "og:image", content: imageUrl },
    ...(isDefaultImage
      ? [
          { property: "og:image:width", content: OG_IMAGE_WIDTH },
          { property: "og:image:height", content: OG_IMAGE_HEIGHT },
        ]
      : []),
    { property: "og:image:alt", content: isDefaultImage ? OG_IMAGE_ALT : title },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: social },
    { name: "twitter:image", content: imageUrl },
  ];
}

/** Unknown page / unknown post slug — keep it out of the index. */
export const NOT_FOUND_META: HeadMeta[] = [
  { title: "Page not found — Cove IVF" },
  { name: "robots", content: "noindex" },
];
