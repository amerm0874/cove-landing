import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";

import { LocaleProvider } from "@/i18n";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";

/**
 * Optional locale layout. English lives at the root (no prefix); the other
 * locales are served under `/ar`, `/de`, `/fr`, `/es`. One set of route files
 * serves all five. Unknown prefixes (and a redundant `/en`) 404.
 */
export const Route = createFileRoute("/{-$locale}")({
  beforeLoad: ({ params }) => {
    const raw = (params as { locale?: string }).locale;
    if (raw === undefined) return;
    if (!isLocale(raw) || raw === DEFAULT_LOCALE) throw notFound();
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  const params = Route.useParams() as { locale?: string };
  const locale: Locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
  return (
    <LocaleProvider locale={locale}>
      <Outlet />
    </LocaleProvider>
  );
}
