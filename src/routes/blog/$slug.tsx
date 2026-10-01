import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import {
  getPublishedPostBySlug,
  getPublishedPosts,
  type PostDetail,
  type PostSummary,
} from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";

/** Site-wide social preview, used when a post row carries no `og_image_url`
 * of its own. A post's own image always wins. */
const DEFAULT_OG_IMAGE: string | null = `${SITE_URL}/og-image.jpg`;

/** Square logo at a stable path — used as the publisher logo in Article schema. */
const PUBLISHER_LOGO = `${SITE_URL}/logo.png`;

const RELATED_COUNT = 3;

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const [post, allPosts] = await Promise.all([
      getPublishedPostBySlug({ data: params.slug }),
      getPublishedPosts(),
    ]);
    if (!post) {
      throw notFound();
    }
    const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, RELATED_COUNT);
    return { post, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {};
    }
    const { post } = loaderData;
    const ogImage = post.og_image_url ?? DEFAULT_OG_IMAGE;
    return {
      meta: [
        { title: `${post.title} — Cove IVF` },
        { name: "description", content: post.description },
        { name: "author", content: "The Cove team" },
        { property: "og:title", content: `${post.title} — Cove IVF` },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE_URL}/blog/${post.slug}` },
        { property: "article:published_time", content: post.published_at },
        { property: "article:modified_time", content: post.updated_at },
        ...(ogImage
          ? [
              { property: "og:image", content: ogImage },
              { name: "twitter:image", content: ogImage },
            ]
          : []),
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/blog/${post.slug}` }],
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
    author: {
      "@type": "Organization",
      name: "The Cove team",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Cove IVF",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: PUBLISHER_LOGO, width: 512, height: 512 },
    },
    isAccessibleForFree: true,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

/** True when the post has been meaningfully revised since publication. */
function wasUpdated(post: PostDetail): boolean {
  return new Date(post.updated_at).toDateString() !== new Date(post.published_at).toDateString();
}

function AuthorCard() {
  return (
    <aside className="mt-16 rounded-2xl border border-line bg-petal/40 p-6 sm:p-8">
      <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">
        About the author
      </p>
      <h2 className="mt-2 font-display text-xl font-semibold text-plum">The Cove team</h2>
      <p className="mt-3 text-plum/80">
        We build{" "}
        <Link to="/" className="underline decoration-rose/40 underline-offset-4 hover:text-rose">
          Cove
        </Link>
        , an IVF medication and cycle tracker for iPhone, alongside people going through IVF cycles
        and around the protocols real clinics hand out. What we write here comes from that work and
        from the patients who use it.
      </p>
      <p className="mt-3 text-sm text-muted">
        We are not clinicians, and nothing here is medical advice. Cove is an organisational tool,
        not a medical device: it does not diagnose, predict outcomes, or interpret or adjust doses.
        Your clinic makes every medical decision — follow their instructions over anything you read
        here.
      </p>
    </aside>
  );
}

function RelatedPosts({ posts }: { posts: PostSummary[] }) {
  if (posts.length === 0) {
    return null;
  }
  return (
    <section className="mt-14">
      <h2 className="font-display text-2xl font-semibold text-plum">Read next</h2>
      <ul className="mt-6 flex flex-col gap-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="block rounded-xl border border-line bg-white/60 px-5 py-4 transition-colors hover:bg-petal/70"
            >
              <span className="font-display text-lg font-semibold text-plum">{post.title}</span>
              <span className="mt-1 block text-sm text-plum/75">{post.description}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/features"
            className="block rounded-xl border border-line bg-white/60 px-5 py-4 transition-colors hover:bg-petal/70"
          >
            <span className="font-display text-lg font-semibold text-plum">What Cove does</span>
            <span className="mt-1 block text-sm text-plum/75">
              The protocol scanner, medication reminders, the trigger countdown, and cycle history.
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

function BlogPost() {
  const { post, related } = Route.useLoaderData();

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">{post.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-plum/80">{post.description}</p>

        <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          <span>By the Cove team</span>
          <span aria-hidden>·</span>
          <span>
            Published <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
          </span>
          {wasUpdated(post) && (
            <>
              <span aria-hidden>·</span>
              <span>
                Updated <time dateTime={post.updated_at}>{formatDate(post.updated_at)}</time>
              </span>
            </>
          )}
        </p>

        <article className="blog-body mt-12" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />

        <AuthorCard />
        <RelatedPosts posts={related} />
      </main>
      <Footer />
    </div>
  );
}
