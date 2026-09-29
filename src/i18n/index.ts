import { createContext, createElement, useContext, type ReactNode } from "react";

import { DEFAULT_LOCALE, localizedPath, type Locale } from "./config";
import { en, type Dictionary } from "./dictionaries/en";
import { ar } from "./dictionaries/ar";
import { de } from "./dictionaries/de";
import { fr } from "./dictionaries/fr";
import { es } from "./dictionaries/es";

const DICTIONARIES: Record<Locale, Dictionary> = { en, ar, de, fr, es };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE];
}

type LocaleContextValue = { locale: Locale; t: Dictionary };

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  t: en,
});

/**
 * Provides the active locale + its dictionary to the whole page subtree.
 * Set once in the `{-$locale}` layout route so every route component and shared
 * component (Header, Footer, chapters) can call useT()/useLocale().
 */
export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value: LocaleContextValue = { locale, t: getDictionary(locale) };
  return createElement(LocaleContext.Provider, { value }, children);
}

export function useLocale(): Locale {
  return useContext(LocaleContext).locale;
}

/** The active locale's dictionary. */
export function useT(): Dictionary {
  return useContext(LocaleContext).t;
}

/** Build a locale-aware href for the active locale. */
export function useLocalizedPath(): (path: string) => string {
  const locale = useLocale();
  return (path: string) => localizedPath(path, locale);
}

export type { Dictionary };
