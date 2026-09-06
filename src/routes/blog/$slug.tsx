import { createFileRoute, notFound } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { getPublishedPostBySlug, type PostDetail } from "@/lib/blog";

// TODO(og-image): site-wide fallback intentionally unset until a real
// 1200x630 asset is supplied (see __root.tsx). A post's own `og_image_url`
// still overrides this whenever one is set on the row.
const DEFAULT_OG_IMAGE: string | null = null;

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getPublishedPostBySlug({ data: params.slug });
    if (!post) {
      throw notFound();
    }
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {};
    }
    const ogImage = loaderData.og_image_url ?? DEFAULT_OG_IMAGE;
    return {
      meta: [
        { title: `${loaderData.title} — Cove IVF` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: `${loaderData.title} — Cove IVF` },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        ...(ogImage
          ? [
              { property: "og:image", content: ogImage },
              { name: "twitter:image", content: ogImage },
            ]
          : []),
      ],
      links: [{ rel: "canonical", href: `https://www.coveivf.life/blog/${loaderData.slug}` }],
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
