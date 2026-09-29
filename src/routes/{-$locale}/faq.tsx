import { createFileRoute } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { FaqList } from "./index";
import { canonicalLink, hreflangLinks, pageMeta } from "@/lib/seo";
import { getDictionary, useT } from "@/i18n";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";

function localeOf(params: { locale?: string }): Locale {
  return isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
}

export const Route = createFileRoute("/{-$locale}/faq")({
  head: ({ params }) => {
    const locale = localeOf(params);
    const d = getDictionary(locale);
    return {
      meta: pageMeta({ title: d.meta.faq.title, description: d.meta.faq.description, path: "/faq", locale }),
      links: [canonicalLink("/faq", locale), ...hreflangLinks("/faq")],
    };
  },
  component: FaqPage,
});

function FaqPage() {
  const t = useT();
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqPage.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{t.faqPage.eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">{t.faqPage.heading}</h1>
        <p className="mt-5 max-w-2xl text-lg text-plum/80">{t.faqPage.intro}</p>

        <div className="mt-12">
          <FaqList items={t.faqPage.items} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
