import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { COMPARISON_BY_SLUG, type Comparison } from "@/lib/comparisons";
import { APP_STORE_URL, SITE_URL } from "@/lib/constants";

export const Route = createFileRoute("/compare/$slug")({
  loader: ({ params }) => {
    const comparison = COMPARISON_BY_SLUG.get(params.slug);
    if (!comparison) {
      throw notFound();
    }
    return comparison;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {};
    }
    const url = `${SITE_URL}/compare/${loaderData.slug}`;
    return {
      meta: [
        { title: loaderData.title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ComparePage,
});

function faqSchema(comparison: Comparison) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comparison.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function ComparePage() {
  const comparison = Route.useLoaderData();

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(comparison)) }}
      />
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <Breadcrumbs
          trail={[{ label: "Home", href: "/" }, { label: "Compare" }, { label: comparison.name }]}
        />

        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">
          {comparison.h1}
        </h1>
        <p className="mt-5 text-lg text-plum/80">{comparison.lede}</p>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-plum sm:text-3xl">
            Side by side
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[560px] border-collapse bg-white/70 text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-petal/60">
                  <th
                    scope="col"
                    className="px-4 py-3 font-mono-tnum text-[11px] uppercase tracking-widest text-muted"
                  >
                    &nbsp;
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-display text-base font-semibold text-plum"
                  >
                    {comparison.alternativeLabel}
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-display text-base font-semibold text-rose"
                  >
                    Cove
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.aspect} className="border-b border-line/60 last:border-0 align-top">
                    <th scope="row" className="px-4 py-4 font-semibold text-plum">
                      {row.aspect}
                    </th>
                    <td className="px-4 py-4 text-plum/75">{row.alternative}</td>
                    <td className="px-4 py-4 text-plum/85">{row.cove}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-plum sm:text-3xl">
            When you should skip Cove
          </h2>
          <p className="mt-3 text-plum/80">
            There are real cases where an app is the wrong answer. These are them.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {comparison.whenAlternativeWins.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-line bg-white/60 px-5 py-4 text-plum/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-plum sm:text-3xl">
            When an app earns its keep
          </h2>
          <ul className="mt-6 flex flex-col gap-3">
            {comparison.whenCoveWins.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-line bg-petal/40 px-5 py-4 text-plum/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-plum sm:text-3xl">Questions</h2>
          <dl className="mt-6 flex flex-col gap-5">
            {comparison.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-line bg-petal/40 p-6">
                <dt className="font-display text-lg font-semibold text-plum">{faq.q}</dt>
                <dd className="mt-2 text-plum/80">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-plum sm:text-3xl">Read next</h2>
          <ul className="mt-6 flex flex-col gap-3">
            <li>
              <Link
                to="/features"
                className="block rounded-xl border border-line bg-white/60 px-5 py-4 transition-colors hover:bg-petal/70"
              >
                <span className="font-display text-lg font-semibold text-plum">
                  Everything Cove does
                </span>
                <span className="mt-1 block text-sm text-plum/75">
                  The protocol scanner, reminders, the trigger countdown, and cycle history, each in
                  detail.
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="block rounded-xl border border-line bg-white/60 px-5 py-4 transition-colors hover:bg-petal/70"
              >
                <span className="font-display text-lg font-semibold text-plum">FAQ</span>
                <span className="mt-1 block text-sm text-plum/75">
                  Pricing, privacy, Android, and how Cove differs from a general fertility tracker.
                </span>
              </Link>
            </li>
          </ul>
        </section>

        <div className="mt-14 rounded-2xl border border-line bg-petal/50 p-6 text-center sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-plum">Try it for a cycle</h2>
          <p className="mt-2 text-plum/80">Free to start, on iPhone.</p>
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
