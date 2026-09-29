import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";

import { useLocale, useT } from "@/i18n";
import { LOCALES, LOCALE_LABELS, localizedPath, parseLocalePath, type Locale } from "@/i18n/config";

/**
 * Persistent language switcher. Navigates to the SAME page under the chosen
 * locale (preserving the path and hash), never back to the home page.
 * Uses a full-document navigation so <html lang>/<dir> re-render correctly.
 */
export function LanguageSwitcher({ align = "end" }: { align?: "start" | "end" }) {
  const t = useT();
  const active = useLocale();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const { basePath } = parseLocalePath(pathname);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const suffix = hash ? `#${hash}` : "";
  const hrefFor = (loc: Locale) => `${localizedPath(basePath, loc)}${suffix}`;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t.languageSwitcher.choose}
        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-petal/60 px-3 py-2 text-sm text-plum transition-colors hover:bg-petal focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
      >
        <Globe className="h-4 w-4" aria-hidden />
        <span>{LOCALE_LABELS[active]}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>

      {open && (
        <ul
          role="menu"
          aria-label={t.languageSwitcher.label}
          className={`absolute z-50 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-line bg-blush/95 py-1 shadow-lg backdrop-blur ${
            align === "end" ? "end-0" : "start-0"
          }`}
        >
          {LOCALES.map((loc) => {
            const isActive = loc === active;
            return (
              <li key={loc} role="none">
                <a
                  role="menuitemradio"
                  aria-checked={isActive}
                  href={hrefFor(loc)}
                  hrefLang={loc}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-petal/70 ${
                    isActive ? "font-semibold text-plum" : "text-plum/80"
                  }`}
                >
                  <span>{LOCALE_LABELS[loc]}</span>
                  {isActive && <Check className="h-4 w-4 text-rose" aria-hidden />}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
