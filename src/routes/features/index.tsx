import { createFileRoute, Link } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { FEATURES } from "@/lib/features";
import { APP_STORE_URL, SITE_URL } from "@/lib/constants";

const DESCRIPTION =
  "Every part of Cove, explained: the protocol scanner, medication reminders and injection tracking, the trigger shot countdown, and your cycle timeline and history.";

export const Route = createFileRoute("/features/")({
  head: () => ({
    meta: [
      { title: "Cove Features — What the IVF Tracker Does" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Cove Features — What the IVF Tracker Does" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/features` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/features` }],
  }),
  component: FeaturesIndex,
});

function FeaturesIndex() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Features" }]} />

        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">
          What Cove does
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-plum/80">
          Cove is an IVF-specific medication and cycle tracker for iPhone. Each page below covers
          one part of it in detail — what it does, how it works, and the line it doesn't cross.
        </p>

        <ul className="mt-12 flex flex-col gap-5">
          {FEATURES.map((feature) => (
            <li key={feature.slug}>
              <Link
                to="/features/$slug"
                params={{ slug: feature.slug }}
                className="block rounded-2xl border border-line bg-petal/40 p-6 transition-colors hover:bg-petal/70 sm:p-8"
              >
                <p className="font-mono-tnum text-xs uppercase tracking-widest text-muted">
                  {feature.name}
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-plum">{feature.h1}</h2>
                <p className="mt-2 text-plum/80">{feature.description}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-line bg-petal/40 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-plum">Still deciding?</h2>
          <p className="mt-2 text-plum/80">
            The{" "}
            <Link
              to="/faq"
              className="underline decoration-rose/40 underline-offset-4 hover:text-rose"
            >
              FAQ
            </Link>{" "}
            covers pricing, privacy, and Android, and{" "}
            <Link
              to="/compare/$slug"
              params={{ slug: "ivf-tracker-vs-spreadsheet" }}
              className="underline decoration-rose/40 underline-offset-4 hover:text-rose"
            >
              the comparison with spreadsheets and phone alarms
            </Link>{" "}
            is the honest version of why you might not need an app at all.
          </p>
          <a
            href={APP_STORE_URL}
            className="mt-6 inline-flex rounded-full bg-rose px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-deep"
          >
            Download Cove for iPhone
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
