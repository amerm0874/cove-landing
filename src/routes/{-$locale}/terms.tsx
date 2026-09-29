import { createFileRoute } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { LegalDocument } from "@/components/legal-doc";
import { canonicalLink, hreflangLinks, pageMeta } from "@/lib/seo";
import { getDictionary, useLocale, useT } from "@/i18n";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";

function localeOf(params: { locale?: string }): Locale {
  return isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
}

export const Route = createFileRoute("/{-$locale}/terms")({
  head: ({ params }) => {
    const locale = localeOf(params);
    const d = getDictionary(locale);
    return {
      meta: pageMeta({
        title: d.meta.terms.title,
        description: d.meta.terms.description,
        ogDescription: d.meta.terms.ogDescription,
        path: "/terms",
        locale,
      }),
      links: [canonicalLink("/terms", locale), ...hreflangLinks("/terms")],
    };
  },
  component: Terms,
});

function Terms() {
  const t = useT();
  const locale = useLocale();
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{t.terms.eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">{t.terms.title}</h1>
        <p className="mt-3 font-mono-tnum text-sm text-muted">{t.terms.lastUpdated}</p>

        {locale !== DEFAULT_LOCALE && (
          <p className="mt-6 rounded-xl border border-line bg-petal/50 px-4 py-3 text-sm text-plum/75">{t.legalNotice}</p>
        )}

        <LegalDocument doc={t.terms.doc} />
      </main>
      <Footer />
    </div>
  );
}
