/**
 * i18n configuration — single source of truth for which locales exist,
 * how they map to URL prefixes, and text direction.
 *
 * English is the default and lives at the site root (`/`, `/faq`, …).
 * The other locales are served under a prefix (`/ar`, `/de/faq`, …) via the
 * optional `{-$locale}` route segment (see src/routes/{-$locale}/route.tsx).
 */

export const LOCALES = ["en", "ar", "de", "fr", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Locales that render right-to-left. */
export const RTL_LOCALES: readonly Locale[] = ["ar"];

/** Human-readable, in the language itself — used by the language switcher. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
};

/** BCP-47 tags for <html lang> / hreflang / og:locale. */
export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en",
  ar: "ar",
  de: "de",
  fr: "fr",
  es: "es",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  ar: "ar_AR",
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

export function isRtl(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}

export function localeDir(locale: Locale): "rtl" | "ltr" {
  return isRtl(locale) ? "rtl" : "ltr";
}

/**
 * Build a locale-aware path. English keeps the bare path; other locales get a
 * `/xx` prefix. Always returns a leading-slash path.
 *   localizedPath("/faq", "en") -> "/faq"
 *   localizedPath("/faq", "ar") -> "/ar/faq"
 *   localizedPath("/",    "de") -> "/de"
 */
export function localizedPath(path: string, locale: Locale): string {
  const clean = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

/**
 * Read the active locale from a pathname's first segment. Returns the locale
 * and the "bare" path (the same URL as English would use), so callers can both
 * theme the document and rebuild alternate-locale URLs.
 *   parseLocalePath("/ar/faq") -> { locale: "ar", basePath: "/faq" }
 *   parseLocalePath("/faq")    -> { locale: "en", basePath: "/faq" }
 */
export function parseLocalePath(pathname: string): { locale: Locale; basePath: string } {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (isLocale(first) && first !== DEFAULT_LOCALE) {
    const rest = "/" + segments.slice(1).join("/");
    return { locale: first, basePath: rest === "/" ? "/" : rest.replace(/\/$/, "") };
  }
  return { locale: DEFAULT_LOCALE, basePath: pathname === "" ? "/" : pathname.replace(/\/$/, "") || "/" };
}
