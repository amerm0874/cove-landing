import { createFileRoute, notFound } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { getPublishedPostBySlug, type PostDetail } from "@/lib/blog";
import { canonicalLink, NOT_FOUND_META, OG_IMAGE_URL, pageMeta } from "@/lib/seo";
import { useLocale } from "@/i18n";
import { DEFAULT_LOCALE, isLocale, LOCALE_HTML_LANG, type Locale } from "@/i18n/config";

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

function articleSchema(post: PostDetail) {
  const image = post.og_image_url ?? DEFAULT_OG_IMAGE;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    ...(image ? { image } : {}),
    author: { "@type": "Organization", name: "Cove IVF" },
    publisher: { "@type": "Organization", name: "Cove IVF" },
    mainEntityOfPage: `https://www.coveivf.life/blog/${post.slug}`,
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

  return (
    <div className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }} />
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{formatDate(post.published_at, locale)}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">{post.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-plum/80">{post.description}</p>

        <article className="blog-body mt-12" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
      </main>
      <Footer />
    </div>
  );
}
