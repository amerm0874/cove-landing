import { createFileRoute, notFound } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getPublishedPostBySlug, type PostDetail } from "@/lib/blog";
import {
  absoluteUrl,
  breadcrumbSchema,
  canonicalLink,
  LOGO_URL,
  NOT_FOUND_META,
  OG_IMAGE_URL,
  pageMeta,
  SITE_URL,
} from "@/lib/seo";
import { useLocale, useT } from "@/i18n";
import { DEFAULT_LOCALE, isLocale, localizedPath, LOCALE_HTML_LANG, type Locale } from "@/i18n/config";

/** A post's own `og_image_url` wins; otherwise the site-wide preview. */
const DEFAULT_OG_IMAGE: string = OG_IMAGE_URL;

function localeOf(params: { locale?: string }): Locale {
  return isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
}

export const Route = createFileRoute("/{-$locale}/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getPublishedPostBySlug({ data: params.slug });
    if (!post) {
      throw notFound();
    }
    return post;
  },
  head: ({ loaderData, params }) => {
    // Unknown slug — the loader threw notFound(); keep it out of the index.
    if (!loaderData) {
      return { meta: NOT_FOUND_META };
    }
    const locale = localeOf(params);
    const basePath = `/blog/${loaderData.slug}`;
    // Post BODIES come from the DB and are not translated, so a post has one
    // canonical English URL and no hreflang alternates — only the chrome differs.
    return {
      meta: pageMeta({
        title: `${loaderData.title} — Cove IVF`,
        description: loaderData.description,
        path: basePath,
        locale,
        type: "article",
        image: loaderData.og_image_url ?? DEFAULT_OG_IMAGE,
      }),
      links: [canonicalLink(basePath, DEFAULT_LOCALE)],
    };
  },
  component: BlogPost,
});

/**
 * BlogPosting rather than the generic Article: it is the narrower type and the
 * one Google's article guidance keys off. `publisher.logo` is required for
 * article rich results, `headline` is capped at 110 characters because Google
 * ignores the field past that length.
 */
function articleSchema(post: PostDetail) {
  const image = post.og_image_url ?? DEFAULT_OG_IMAGE;
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.slice(0, 110),
    description: post.description,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    ...(image ? { image: [image] } : {}),
    inLanguage: "en",
    author: { "@type": "Organization", name: "Cove IVF", url: `${SITE_URL}/` },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Cove IVF",
      logo: { "@type": "ImageObject", url: LOGO_URL, width: 636, height: 517 },
    },
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(LOCALE_HTML_LANG[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPost() {
  const post = Route.useLoaderData();
  const locale = useLocale();
  const t = useT();
  const localeParam = locale === DEFAULT_LOCALE ? undefined : locale;

  // Crumb URLs follow the ACTIVE locale so the JSON-LD trail matches the links
  // on the page, even though the post body itself is English-only.
  const crumbs = [
    { label: t.nav.home, path: localizedPath("/", locale), to: "/{-$locale}" as const },
    { label: t.nav.blog, path: localizedPath("/blog", locale), to: "/{-$locale}/blog" as const },
    { label: post.title },
  ];

  return (
    <div className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(crumbs.map(({ label, path }) => ({ name: label, path })))),
        }}
      />
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <Breadcrumbs
          label={t.nav.breadcrumb}
          items={crumbs.map(({ label, to }) => ({ label, to, params: to ? { locale: localeParam } : undefined }))}
        />
        <p className="mt-4 font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{formatDate(post.published_at, locale)}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">{post.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-plum/80">{post.description}</p>

        <article className="blog-body mt-12" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
      </main>
      <Footer />
    </div>
  );
}
