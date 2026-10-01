import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { SITE_URL } from "@/lib/constants";
import { getPublishedPosts } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  loader: () => getPublishedPosts(),
  head: () => ({
    meta: [
      { title: "Blog — Cove IVF" },
      {
        name: "description",
        content: "Notes on IVF cycles, medication tracking, and building a calmer treatment process.",
      },
      { property: "og:title", content: "Blog — Cove IVF" },
      {
        property: "og:description",
        content: "Notes on IVF cycles, medication tracking, and building a calmer treatment process.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: BlogIndex,
});

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function BlogIndex() {
  const posts = Route.useLoaderData();

  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">
          The Cove IVF blog
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-plum/80">
          Notes on IVF cycles, medication tracking, and building a calmer treatment process.
        </p>

        {posts.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-line bg-petal/50 p-8 text-center">
            <p className="text-plum/80">Nothing published yet — check back soon.</p>
          </div>
        ) : (
          <ul className="mt-12 flex flex-col gap-5">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="block rounded-2xl border border-line bg-petal/40 p-6 transition-colors hover:bg-petal/70 sm:p-8"
                >
                  <p className="font-mono-tnum text-xs uppercase tracking-widest text-muted">
                    {formatDate(post.published_at)}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-plum">{post.title}</h2>
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
