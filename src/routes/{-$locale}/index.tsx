import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronDown, ShieldCheck, HeartHandshake, Stethoscope, Smartphone } from "lucide-react";
import { BackgroundBlobs, Footer, Header, SocialIcons } from "@/components/site-chrome";
import {
  LifeDuringIVF,
  ChapterMedication,
  ChapterScanner,
  ChapterVerification,
  ChapterTrigger,
  ChapterTimeline,
  WithoutWithCove,
  CommunityReality,
} from "@/components/chapters";
import { Reveal } from "@/components/reveal";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";
import { canonicalLink, hreflangLinks, pageMeta } from "@/lib/seo";
import { getDictionary, useLocale, useT, type Dictionary } from "@/i18n";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";
import todayScreen from "@/assets/app/today.png";
import googlePlayBadge from "@/assets/google-play-badge.png";

function localeOf(params: { locale?: string }): Locale {
  return isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
}

export const Route = createFileRoute("/{-$locale}/")({
  head: ({ params }) => {
    const locale = localeOf(params);
    const d = getDictionary(locale);
    return {
      meta: pageMeta({ title: d.meta.home.title, description: d.meta.home.description, path: "/", locale }),
      links: [canonicalLink("/", locale), ...hreflangLinks("/")],
    };
  },
  component: Landing,
});

const SOFTWARE_APPLICATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Cove IVF Tracker",
  operatingSystem: "iOS, Android",
  applicationCategory: "HealthApplication",
  description:
    "Calm IVF tracker and medication companion. Protocol scanner, exact medication lineups, dose tracking, and discreet reminders for IVF cycles.",
  url: "https://www.coveivf.life/",
  downloadUrl: APP_STORE_URL,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const TRUST_ICONS = [HeartHandshake, Stethoscope, ShieldCheck];

function Landing() {
  return (
    <div className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APPLICATION_SCHEMA) }} />
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10">
        <Hero />
        <TrustStrip />
        <LifeDuringIVF />
        <WithoutWithCove />
        <ChapterMedication />
        <ChapterScanner />
        <ChapterVerification />
        <ChapterTrigger />
        <ChapterTimeline />
        <AllFeaturesLink />
        <CommunityReality />
        <Privacy />
        <Faq />
        <DownloadCta />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const t = useT();
  const h = t.home.hero;
  return (
    <section className="mx-auto max-w-3xl px-5 pt-16 pb-20 text-center sm:px-8 sm:pt-24 sm:pb-28">
      <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{h.eyebrow}</p>
      <h1 className="mx-auto mt-5 font-display text-4xl leading-[1.05] font-semibold text-plum sm:text-5xl md:text-6xl">
        {h.heading}
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-plum/80">{h.body}</p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a
          href={APP_STORE_URL}
          aria-label={t.common.downloadOnAppStore}
          className="inline-flex items-center gap-3 rounded-xl border border-plum/70 bg-plum px-4 py-2.5 text-blush transition-colors hover:bg-plum-soft"
        >
          <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M16.365 1.43c0 1.14-.42 2.22-1.14 3.04-.78.9-2.04 1.6-3.06 1.5-.12-1.08.42-2.22 1.14-3.02.78-.88 2.14-1.56 3.06-1.52zM20.6 17.05c-.56 1.28-.82 1.86-1.54 2.98-.98 1.52-2.36 3.42-4.08 3.44-1.52.02-1.92-.98-3.98-.96-2.06.02-2.5.98-4.02.96-1.72-.02-3.02-1.74-4-3.26-2.76-4.28-3.06-9.3-1.36-11.98 1.22-1.92 3.14-3.04 4.94-3.04 1.84 0 2.98 1 4.5 1 1.48 0 2.38-1 4.5-1 1.6 0 3.3.86 4.52 2.36-3.98 2.18-3.34 7.86.52 9.5z" />
          </svg>
          <span className="flex flex-col leading-tight text-start">
            <span className="font-mono-tnum text-[9px] uppercase tracking-widest opacity-70">{t.common.downloadOnThe}</span>
            <span className="font-display text-lg">{t.common.appStore}</span>
          </span>
        </a>
        <a href={GOOGLE_PLAY_URL} className="inline-flex items-center">
          <img src={googlePlayBadge} alt={t.common.googlePlayAlt} className="h-[52px] w-auto" width={646} height={250} />
        </a>
      </div>

      <p className="mt-4 font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{t.common.availableNow}</p>

      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-2 font-mono-tnum text-[10px] uppercase tracking-widest text-plum/70">
        <Smartphone className="h-3.5 w-3.5 text-rose" aria-hidden />
        <span>{h.badge}</span>
      </div>

      <img src={todayScreen} alt={h.todayAlt} className="mx-auto mt-14 w-full max-w-[300px]" width={763} height={1652} />
    </section>
  );
}

function TrustStrip() {
  const t = useT();
  return (
    <section className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-sage/25 bg-sage-soft/60 px-6 py-5 text-sm text-plum/80 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        {t.home.trust.map((text, i) => {
          const Icon = TRUST_ICONS[i] ?? ShieldCheck;
          return (
            <div key={text} className="flex items-center gap-3">
              <span aria-hidden className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-sage-deep">
                <Icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="font-medium">{text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function AllFeaturesLink() {
  const t = useT();
  const active = useLocale();
  const locale = active === DEFAULT_LOCALE ? undefined : active;
  const a = t.home.allFeatures;
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-4 rounded-[28px] border border-line bg-white/70 px-6 py-8 sm:flex-row sm:items-center sm:px-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-plum sm:text-3xl">{a.heading}</h2>
            <p className="mt-2 max-w-md text-plum/80">{a.body}</p>
          </div>
          <Link
            to="/{-$locale}/features"
            params={{ locale }}
            className="inline-flex shrink-0 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-deep focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
          >
            {a.cta}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function Privacy() {
  const p = useT().home.privacy;
  return (
    <section id="privacy" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{p.heading}</h2>
          <p className="mt-5 text-lg text-plum/80">{p.intro}</p>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {p.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <div className="flex h-full gap-4 rounded-2xl border border-line bg-petal/50 p-6">
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-sage bg-sage-soft">
                <Check aria-hidden className="h-4 w-4 text-sage-deep" strokeWidth={3} />
              </span>
              <div>
                <div className="font-display text-xl font-semibold">{item.title}</div>
                <p className="mt-2 text-plum/80">{item.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-line rounded-2xl border border-line bg-petal/40">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-start focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-[-4px]"
            >
              <span className="font-display text-lg font-semibold">{f.q}</span>
              <ChevronDown aria-hidden className={`h-5 w-5 shrink-0 text-rose transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <div className="px-6 pb-6 text-plum/80">{f.a}</div>}
          </li>
        );
      })}
    </ul>
  );
}

function Faq() {
  const t = useT();
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t.home.faqHeading}</h2>
      <div className="mt-8">
        <FaqList items={t.home.faq} />
      </div>
    </section>
  );
}

function DownloadCta() {
  const t = useT();
  return (
    <section id="download" className="mx-auto max-w-3xl px-5 pt-24 pb-12 text-center sm:px-8">
      <h2 className="font-display text-4xl font-semibold sm:text-5xl">{t.home.downloadCta.heading}</h2>
      <p className="mt-5 text-lg text-plum/80">{t.common.availableNowPlain}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={APP_STORE_URL}
          className="rounded-full bg-rose px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rose-deep focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
        >
          {t.common.downloadOnAppStore}
        </a>
        <a href={GOOGLE_PLAY_URL} className="inline-flex items-center">
          <img src={googlePlayBadge} alt={t.common.googlePlayAlt} className="h-12 w-auto" width={646} height={250} />
        </a>
      </div>
      <p className="mt-6 text-sm text-muted">{t.common.encryptedNote}</p>
      <div className="mt-10 flex justify-center">
        <SocialIcons size="lg" labeled />
      </div>
    </section>
  );
}

export type { Dictionary };
