import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { canonicalLink, hreflangLinks, pageMeta } from "@/lib/seo";
import { getDictionary, useT } from "@/i18n";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";

function localeOf(params: { locale?: string }): Locale {
  return isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
}

export const Route = createFileRoute("/{-$locale}/delete-account")({
  head: ({ params }) => {
    const locale = localeOf(params);
    const d = getDictionary(locale);
    return {
      meta: pageMeta({
        title: d.meta.deleteAccount.title,
        description: d.meta.deleteAccount.description,
        ogDescription: d.meta.deleteAccount.ogDescription,
        path: "/delete-account",
        locale,
      }),
      links: [canonicalLink("/delete-account", locale), ...hreflangLinks("/delete-account")],
    };
  },
  component: DeleteAccount,
});

const CONTACT = "coveivf@gmail.com";

function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 leading-relaxed text-plum/85">{children}</p>;
}

function DeleteAccount() {
  const t = useT();
  const d = t.deleteAccount;
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{d.eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">{d.heading}</h1>

        <P>{d.intro}</P>

        <P>{d.fromAppLead}</P>
        <ol className="mt-3 list-decimal space-y-2 ps-5 text-plum/85">
          {d.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>

        <P>
          <strong>{d.whatDeletedLabel}</strong>
          {d.whatDeletedBody}
        </P>

        <P>
          {d.noAccessPrefix}
          <a className="text-rose hover:underline" href={`mailto:${CONTACT}`}>
            {CONTACT}
          </a>
          {d.noAccessSuffix}
        </P>
      </main>
      <Footer />
    </div>
  );
}
