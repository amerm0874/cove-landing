import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { FEATURE_BY_SLUG, type Feature } from "@/lib/features";
import { APP_STORE_URL, SITE_URL } from "@/lib/constants";

export const Route = createFileRoute("/features/$slug")({
  loader: ({ params }) => {
    const feature = FEATURE_BY_SLUG.get(params.slug);
    if (!feature) {
      throw notFound();
    }
    return feature;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {};
    }
    const url = `${SITE_URL}/features/${loaderData.slug}`;
    return {
      meta: [
        { title: loaderData.title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: FeaturePage,
});

function faqSchema(feature: Feature) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: feature.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function FeaturePage() {
  const feature = Route.useLoaderData();
  const related = feature.related
    .map((slug) => FEATURE_BY_SLUG.get(slug))
    .filter((f): f is Feature => Boolean(f));

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(feature)) }}
      />
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <Breadcrumbs
          trail={[
            { label: "Home", href: "/" },
            { label: "Features", href: "/features" },
            { label: feature.name },
          ]}
        />

        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">
          {feature.h1}
        </h1>
        <p className="mt-5 text-lg text-plum/80">{feature.lede}</p>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-plum sm:text-3xl">
            How it works
          </h2>
          <ol className="mt-6 flex flex-col gap-5">
            {feature.steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-line bg-petal/40 p-6">
                <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-rose">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-plum">{step.title}</h3>
                <p className="mt-2 text-plum/80">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-plum sm:text-3xl">
            What it deliberately doesn't do
          </h2>
          <p className="mt-3 text-plum/80">
            Cove is an organisational tool, not a medical device. These limits are design decisions,
            not gaps waiting to be filled.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {feature.limits.map((limit) => (
              <li
                key={limit}
                className="rounded-xl border border-line bg-white/60 px-5 py-4 text-plum/80"
              >
                {limit}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-plum sm:text-3xl">Questions</h2>
          <dl className="mt-6 flex flex-col gap-5">
            {feature.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-line bg-petal/40 p-6">
                <dt className="font-display text-lg font-semibold text-plum">{faq.q}</dt>
                <dd className="mt-2 text-plum/80">{faq.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm text-muted">
            More answers on pricing, privacy, and Android are on the{" "}
            <Link
              to="/faq"
              className="underline decoration-rose/40 underline-offset-4 hover:text-rose"
            >
              FAQ page
            </Link>
            .
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-plum sm:text-3xl">Related</h2>
          <ul className="mt-6 flex flex-col gap-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to="/features/$slug"
                  params={{ slug: r.slug }}
                  className="block rounded-xl border border-line bg-white/60 px-5 py-4 transition-colors hover:bg-petal/70"
                >
                  <span className="font-display text-lg font-semibold text-plum">{r.name}</span>
                  <span className="mt-1 block text-sm text-plum/75">{r.description}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/compare/$slug"
                params={{ slug: "ivf-tracker-vs-spreadsheet" }}
                className="block rounded-xl border border-line bg-white/60 px-5 py-4 transition-colors hover:bg-petal/70"
              >
                <span className="font-display text-lg font-semibold text-plum">
                  IVF tracker vs. a spreadsheet
                </span>
                <span className="mt-1 block text-sm text-plum/75">
                  When the spreadsheet-and-alarms method is genuinely enough, and when it stops
                  being enough.
                </span>
              </Link>
            </li>
          </ul>
        </section>

        <div className="mt-14 rounded-2xl border border-line bg-petal/50 p-6 text-center sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-plum">Cove is on iPhone now</h2>
          <p className="mt-2 text-plum/80">Free to start. Your whole cycle in one calm place.</p>
          <a
            href={APP_STORE_URL}
            className="mt-6 inline-flex rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-deep"
          >
            Download Cove
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
