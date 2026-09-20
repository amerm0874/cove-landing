import { createFileRoute, notFound } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { getPublishedPostBySlug, type PostDetail } from "@/lib/blog";
import { ORGANIZATION_SCHEMA, OG_IMAGE_URL, SITE_URL, pageHead } from "@/lib/seo";
import { NotFound } from "@/components/not-found";

// Site-wide preview image for posts that don't ship their own artwork. A post's
// `og_image_url` still overrides this whenever one is set on the row.
const DEFAULT_OG_IMAGE: string = OG_IMAGE_URL;

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getPublishedPostBySlug({ data: params.slug });
    if (!post) {
      throw notFound();
    }
    return post;
  },
  // `loaderData` is always present here — the loader throws notFound() when the
  // slug misses, and the router skips head() for a not-found render. That 404's
  // head comes from <NotFound /> instead.
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          title: `${loaderData.title} — Cove IVF`,
          description: loaderData.description,
          url: `${SITE_URL}/blog/${loaderData.slug}`,
          type: "article",
          image: loaderData.og_image_url ?? DEFAULT_OG_IMAGE,
          imageAlt: loaderData.og_image_url ? loaderData.title : undefined,
        })
      : {},
  component: BlogPost,
  notFoundComponent: NotFound,
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
    author: ORGANIZATION_SCHEMA,
    publisher: ORGANIZATION_SCHEMA,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function BlogPost() {
  const post = Route.useLoaderData();

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">
          {formatDate(post.published_at)}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">{post.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-plum/80">{post.description}</p>

        <article className="blog-body mt-12" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
      </main>
      <Footer />
    </div>
  );
}
