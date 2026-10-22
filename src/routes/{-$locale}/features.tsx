import { createFileRoute, Link } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header, SocialIcons } from "@/components/site-chrome";
import { IPhoneScreenshot } from "@/components/iphone-frame";
import { Reveal } from "@/components/reveal";
import { getFeatureCategories, type FeatureCategory } from "@/lib/features";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";
import { canonicalLink, hreflangLinks, pageMeta } from "@/lib/seo";
import { getDictionary, useLocale, useT } from "@/i18n";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";
import googlePlayBadge from "@/assets/google-play-badge.png";
import scanSheetScreen from "@/assets/app/scan-sheet.webp";
import todayScreen from "@/assets/app/today.webp";
import triggerScreen from "@/assets/app/trigger-takeover.webp";
import injectionsScreen from "@/assets/app/injections.webp";
import stagesScreen from "@/assets/app/stages.webp";

function localeOf(params: { locale?: string }): Locale {
  return isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
}

export const Route = createFileRoute("/{-$locale}/features")({
  head: ({ params }) => {
    const locale = localeOf(params);
    const d = getDictionary(locale);
    return {
      meta: pageMeta({
        title: d.meta.features.title,
        description: d.meta.features.description,
        ogDescription: d.meta.features.ogDescription,
        path: "/features",
        locale,
      }),
      links: [canonicalLink("/features", locale), ...hreflangLinks("/features")],
    };
  },
  component: FeaturesPage,
});

const SPOTLIGHT_MEDIA = [scanSheetScreen, todayScreen, triggerScreen];

function FeaturesPage() {
  const t = useT();
  const categories = getFeatureCategories(t);
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10">
        <Hero />
        <JumpNav categories={categories} />
        <Spotlight />
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
        <DownloadCta />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const t = useT();
  const active = useLocale();
  const locale = active === DEFAULT_LOCALE ? undefined : active;
  const h = t.features.hero;
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
      <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{h.eyebrow}</p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-plum sm:text-5xl md:text-6xl">
        {h.heading}
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum/80">{h.body}</p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={APP_STORE_URL}
          className="rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-deep focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
        >
          {t.common.download}
        </a>
        <a href={GOOGLE_PLAY_URL} className="inline-flex items-center">
          <img src={googlePlayBadge} alt={t.common.googlePlayAlt} className="h-11 w-auto" width={646} height={250} decoding="async" />
        </a>
        <Link
          to="/{-$locale}"
          params={{ locale }}
          hash="how-it-works"
          className="rounded-full border border-line bg-white/70 px-6 py-3 text-sm font-semibold text-plum transition-colors hover:bg-petal focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
        >
          {h.howItWorks}
        </Link>
      </div>
    </section>
  );
}

function JumpNav({ categories }: { categories: FeatureCategory[] }) {
  const t = useT();
  return (
    <nav aria-label={t.features.jumpNavLabel} className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
      <ul className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <li key={category.id}>
            <a
              href={`#${category.id}`}
              className="inline-flex rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-plum/80 transition-colors hover:border-rose hover:bg-petal hover:text-plum focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
            >
              {category.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Spotlight() {
  const t = useT();
  const [first, second, third] = t.features.spotlight.items;
  const [firstSrc, secondSrc, thirdSrc] = SPOTLIGHT_MEDIA;
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold text-plum sm:text-4xl">{t.features.spotlight.heading}</h2>
      </Reveal>
      <div className="mt-10 grid gap-5 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <article className="flex h-full flex-col justify-between rounded-[28px] border border-line bg-petal/60 p-6 sm:p-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-plum sm:text-3xl">{first.title}</h3>
              <p className="mt-3 max-w-md text-plum/80">{first.body}</p>
            </div>
            <IPhoneScreenshot src={firstSrc} alt={first.alt} className="mt-8" />
          </article>
        </Reveal>
        <div className="grid gap-5 lg:col-span-2">
          <Reveal delay={80}>
            <article className="rounded-[28px] border border-line bg-white/70 p-6">
              <h3 className="font-display text-xl font-semibold text-plum">{second.title}</h3>
              <p className="mt-2 text-sm text-plum/80">{second.body}</p>
              <img src={secondSrc} alt={second.alt} className="mx-auto mt-5 w-full max-w-[180px]" width={763} height={1652} loading="lazy" decoding="async" />
            </article>
          </Reveal>
          <Reveal delay={140}>
            <article className="rounded-[28px] border border-sage/30 bg-sage-soft/70 p-6">
              <h3 className="font-display text-xl font-semibold text-plum">{third.title}</h3>
              <p className="mt-2 text-sm text-plum/80">{third.body}</p>
              <img src={thirdSrc} alt={third.alt} className="mx-auto mt-5 w-full max-w-[180px]" width={763} height={1652} loading="lazy" decoding="async" />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CategorySection({ category }: { category: FeatureCategory }) {
  const media = categoryMedia(category.id);
  return (
    <section id={category.id} className="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold text-plum sm:text-4xl">{category.headline}</h2>
        <p className="mt-4 max-w-[65ch] text-lg text-plum/80">{category.intro}</p>
      </Reveal>

      {media ? (
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
          <FeatureGrid items={category.items} />
          <Reveal delay={80} className="hidden lg:block">
            {media}
          </Reveal>
        </div>
      ) : (
        <div className="mt-12">
          <FeatureGrid items={category.items} />
        </div>
      )}
    </section>
  );
}

function FeatureGrid({ items }: { items: FeatureCategory["items"] }) {
  return (
    <ul className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
      {items.map((item, i) => (
        <li key={item.title} className="border-t border-line/80 py-6">
          <Reveal delay={(i % 4) * 40}>
            <div className="flex gap-3">
              <span aria-hidden className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white/80 text-rose">
                <item.Icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-plum">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum/80">{item.body}</p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

function categoryMedia(id: string) {
  if (id === "medications") {
    return <img src={injectionsScreen} alt="" aria-hidden className="w-full max-w-[240px]" width={763} height={1652} loading="lazy" decoding="async" />;
  }
  if (id === "cycle") {
    return <img src={stagesScreen} alt="" aria-hidden className="w-full max-w-[240px]" width={763} height={1652} loading="lazy" decoding="async" />;
  }
  return null;
}

function DownloadCta() {
  const t = useT();
  const active = useLocale();
  const locale = active === DEFAULT_LOCALE ? undefined : active;
  return (
    <section className="mx-auto max-w-3xl px-5 pt-8 pb-12 text-center sm:px-8">
      <h2 className="font-display text-4xl font-semibold text-plum sm:text-5xl">{t.features.downloadHeading}</h2>
      <p className="mt-5 text-lg text-plum/80">{t.common.availableNowPlain}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href={APP_STORE_URL}
          className="rounded-full bg-rose px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rose-deep focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
        >
          {t.common.downloadOnAppStore}
        </a>
        <a href={GOOGLE_PLAY_URL} className="inline-flex items-center">
          <img src={googlePlayBadge} alt={t.common.googlePlayAlt} className="h-12 w-auto" width={646} height={250} loading="lazy" decoding="async" />
        </a>
      </div>
      <p className="mt-6 text-sm text-muted">{t.common.encryptedNote}</p>
      <div className="mt-10 flex justify-center">
        <SocialIcons size="lg" labeled />
      </div>
      <p className="mt-10 text-sm text-muted">
        {t.features.questionsPrefix}{" "}
        <Link to="/{-$locale}/faq" params={{ locale }} className="text-plum hover:text-rose">
          {t.features.questionsLink}
        </Link>
      </p>
    </section>
  );
}
