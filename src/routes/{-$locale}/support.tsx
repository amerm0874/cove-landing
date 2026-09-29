import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { BackgroundBlobs, Footer, Header, SocialIcons } from "@/components/site-chrome";
import { FaqList } from "./index";
import { canonicalLink, hreflangLinks, pageMeta } from "@/lib/seo";
import { getDictionary, useLocale, useT } from "@/i18n";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";

function localeOf(params: { locale?: string }): Locale {
  return isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
}

export const Route = createFileRoute("/{-$locale}/support")({
  head: ({ params }) => {
    const locale = localeOf(params);
    const d = getDictionary(locale);
    return {
      meta: pageMeta({
        title: d.meta.support.title,
        description: d.meta.support.description,
        ogDescription: d.meta.support.ogDescription,
        path: "/support",
        locale,
      }),
      links: [canonicalLink("/support", locale), ...hreflangLinks("/support")],
    };
  },
  component: Support,
});

const SUPPORT_EMAIL = "coveivf@gmail.com";

function Support() {
  const t = useT();
  const active = useLocale();
  const locale = active === DEFAULT_LOCALE ? undefined : active;
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-4xl px-5 pt-14 pb-20 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{t.support.eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">{t.support.heading}</h1>
        <p className="mt-5 max-w-2xl text-lg text-plum/80">{t.support.intro}</p>

        <ContactCard />
        <ContactForm />

        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold">{t.support.faqHeading}</h2>
          <div className="mt-6">
            <FaqList items={t.support.faq} />
          </div>
        </section>

        <section className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-petal/50 p-6">
          <div className="flex gap-6 text-sm">
            <Link to="/{-$locale}/privacy" params={{ locale }} className="text-plum hover:text-rose">
              {t.support.privacyLink}
            </Link>
            <Link to="/{-$locale}/terms" params={{ locale }} className="text-plum hover:text-rose">
              {t.support.termsLink}
            </Link>
          </div>
          <SocialIcons labeled />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ContactCard() {
  const t = useT();
  return (
    <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-line bg-petal p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <div className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{t.support.emailLabel}</div>
        <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-2 block font-display text-2xl font-semibold text-plum hover:text-rose">
          {SUPPORT_EMAIL}
        </a>
      </div>
      <a
        href={`mailto:${SUPPORT_EMAIL}`}
        className="inline-flex items-center gap-2 self-start rounded-full bg-rose px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-deep sm:self-auto"
      >
        <Mail className="h-4 w-4" aria-hidden />
        {t.support.emailUs}
      </a>
    </div>
  );
}

function ContactForm() {
  const t = useT();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Cove support — ${name || "message"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-2xl border border-line bg-blush/70 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-plum">{t.support.form.name}</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-plum">{t.support.form.email}</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm">
        <span className="font-semibold text-plum">{t.support.form.message}</span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
        />
      </label>
      <div>
        {/* TODO: wire this to a real form backend (Resend, Formspree, etc.). */}
        <button
          type="submit"
          className="rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-deep"
        >
          {t.support.form.send}
        </button>
      </div>
    </form>
  );
}
