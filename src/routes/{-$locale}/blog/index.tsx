import { createFileRoute, Link } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getPublishedPosts } from "@/lib/blog";
import { blogDiscoveryCopy } from "@/lib/blog-discovery";
import { breadcrumbSchema, canonicalLink, hreflangLinks, pageMeta } from "@/lib/seo";
import { getDictionary, useLocale, useT } from "@/i18n";
import {
  DEFAULT_LOCALE,
  isLocale,
  localizedPath,
  LOCALE_HTML_LANG,
  type Locale,
} from "@/i18n/config";

function localeOf(params: { locale?: string }): Locale {
  return isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
}

export const Route = createFileRoute("/{-$locale}/blog/")({
  loader: () => getPublishedPosts(),
  head: ({ params }) => {
    const locale = localeOf(params);
    const d = getDictionary(locale);
    return {
      meta: pageMeta({
        title: d.meta.blog.title,
        description: d.meta.blog.description,
        path: "/blog",
        locale,
      }),
      links: [canonicalLink("/blog", locale), ...hreflangLinks("/blog")],
    };
  },
  component: BlogIndex,
});

function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(LOCALE_HTML_LANG[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogIndex() {
  const posts = Route.useLoaderData();
  const t = useT();
  const active = useLocale();
  const locale = active === DEFAULT_LOCALE ? undefined : active;

  const crumbs = [
    { label: t.nav.home, path: localizedPath("/", active), to: "/{-$locale}" as const },
    { label: t.nav.blog, path: localizedPath("/blog", active) },
  ];

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(crumbs.map(({ label, path }) => ({ name: label, path }))),
          ),
        }}
      />
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <Breadcrumbs
          label={t.nav.breadcrumb}
          items={crumbs.map(({ label, to }) => ({
            label,
            to,
            params: to ? { locale } : undefined,
          }))}
        />
        <p className="mt-4 font-mono-tnum text-[11px] uppercase tracking-widest text-muted">
          {t.blog.eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">
          {t.blog.heading}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-plum/80">{t.blog.intro}</p>
        {active !== DEFAULT_LOCALE && (
          <p className="mt-3 text-sm text-muted">{blogDiscoveryCopy[active].english}</p>
        )}

        {posts.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-line bg-petal/50 p-8 text-center">
            <p className="text-plum/80">{t.blog.empty}</p>
          </div>
        ) : (
          <ul className="mt-12 flex flex-col gap-5">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  to="/{-$locale}/blog/$slug"
                  params={{ locale: undefined, slug: post.slug }}
                  lang="en"
                  dir="ltr"
                  className="block rounded-2xl border border-line bg-petal/40 p-6 transition-colors hover:bg-petal/70 sm:p-8"
                >
                  <p className="font-mono-tnum text-xs uppercase tracking-widest text-muted">
                    {formatDate(post.published_at, active)}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-plum">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-plum/80">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}
