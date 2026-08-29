import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { CONTACT_EMAIL } from "@/lib/constants";
import {
  submitAffiliateApplication,
  type AffiliateFormInput,
} from "@/lib/submit-affiliate";

export const Route = createFileRoute("/affiliate")({
  head: () => ({
    meta: [
      { title: "Cove Affiliate — Cove IVF" },
      {
        name: "description",
        content:
          "Cove affiliate program: 20% of paid Cove Pro from your code. Codes are issued manually. Apply by email.",
      },
      { property: "og:title", content: "Cove Affiliate — Cove IVF" },
      {
        property: "og:description",
        content: "20% of paid Cove Pro from your code. Codes are issued by email after review.",
      },
    ],
  }),
  component: Affiliate,
});

const EMPTY_FORM: AffiliateFormInput = {
  name: "",
  email: "",
  handle: "",
  inCycle: "",
  isCreator: "",
  platform: "",
  viewTarget: "",
  notes: "",
};

function affiliateMailtoHref(input: AffiliateFormInput): string {
  const viewTargetLabel =
    input.viewTarget === "200k"
      ? "200k"
      : input.viewTarget === "300k"
        ? "300k"
        : input.viewTarget === "no"
          ? "no view target"
          : "n/a";
  const body = [
    "Cove affiliate application",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Instagram or TikTok: ${input.handle}`,
    `In a current IVF cycle: ${input.inCycle}`,
    `Creator: ${input.isCreator}`,
    `Expected platform: ${input.isCreator === "yes" ? input.platform : "n/a"}`,
    `View target: ${input.isCreator === "yes" ? viewTargetLabel : "n/a"}`,
    "",
    "Anything else:",
    input.notes || "(none)",
  ].join("\n");
  const subject = encodeURIComponent(`Cove affiliate — ${input.name || "application"}`);
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl font-semibold text-plum">{children}</h2>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-plum/85">{children}</p>;
}

function Affiliate() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">Partnerships</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">Cove Affiliate</h1>

        <H2>Who it's for</H2>
        <P>
          People in an IVF cycle, and creators who will use the app in a real cycle.
        </P>

        <H2>Commission</H2>
        <P>20% of paid Cove Pro from your code.</P>

        <H2>Cookie</H2>
        <P>90 days.</P>

        <H2>How it works now</H2>
        <P>
          Codes are issued manually. Paid events are Apple in-app purchase plus RevenueCat, not Stripe, so there is no automatic dashboard yet. If we take the partnership, you get a code by email after review.
        </P>

        <H2>What we measure</H2>
        <P>Code activated → 7-day use → paid. Not views, not follower count.</P>

        <H2>Influencer trial</H2>
        <P>
          We agree a view target of 200k or 300k up front. If you hit the target, you get paid. The 20% affiliate code stays on the whole time. After the first month: continue, raise the paid-view fee, or end it.
        </P>

        <AffiliateForm />
      </main>
      <Footer />
    </div>
  );
}

function AffiliateForm() {
  const [form, setForm] = useState<AffiliateFormInput>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof AffiliateFormInput>(key: K, value: AffiliateFormInput[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const result = await submitAffiliateApplication({ data: form });
      if (result.ok) {
        setSubmitted(true);
        return;
      }
      if ("useMailto" in result && result.useMailto) {
        window.location.href = affiliateMailtoHref(form);
        setSubmitted(true);
        return;
      }
      setError(result.error || "Could not send. Please try again.");
    } catch {
      window.location.href = affiliateMailtoHref(form);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mt-12 rounded-2xl border border-line bg-petal/50 p-6 sm:p-8">
        <p className="text-lg leading-relaxed text-plum">
          We'll email you if we take it. Do not post a Cove link until you have a code.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-12 grid gap-4 rounded-2xl border border-line bg-blush/70 p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold text-plum">Apply</h2>
      <p className="text-sm text-plum/80">
        We'll review this by hand. Do not post a Cove link until you have a code.
      </p>

      <label htmlFor="affiliate-name" className="flex w-full flex-col gap-2 text-sm">
        <span className="block font-semibold text-plum">Name</span>
        <input
          id="affiliate-name"
          name="name"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="block w-full rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
        />
      </label>
      <label htmlFor="affiliate-email" className="flex w-full flex-col gap-2 text-sm">
        <span className="block font-semibold text-plum">Email</span>
        <input
          id="affiliate-email"
          name="email"
          required
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="block w-full rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-semibold text-plum">Instagram or TikTok handle</span>
        <input
          required
          value={form.handle}
          onChange={(e) => update("handle", e.target.value)}
          className="rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
        />
      </label>

      <fieldset className="grid gap-2 text-sm">
        <legend className="font-semibold text-plum">In a current IVF cycle?</legend>
        <div className="mt-1 flex gap-6">
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="inCycle"
              required
              checked={form.inCycle === "yes"}
              onChange={() => update("inCycle", "yes")}
            />
            Yes
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="inCycle"
              checked={form.inCycle === "no"}
              onChange={() => update("inCycle", "no")}
            />
            No
          </label>
        </div>
      </fieldset>

      <fieldset className="grid gap-2 text-sm">
        <legend className="font-semibold text-plum">Creator?</legend>
        <div className="mt-1 flex gap-6">
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="isCreator"
              required
              checked={form.isCreator === "yes"}
              onChange={() => update("isCreator", "yes")}
            />
            Yes
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="isCreator"
              checked={form.isCreator === "no"}
              onChange={() => {
                setForm((current) => ({
                  ...current,
                  isCreator: "no",
                  platform: "",
                  viewTarget: "",
                }));
              }}
            />
            No
          </label>
        </div>
      </fieldset>

      {form.isCreator === "yes" && (
        <>
          <label className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-plum">Expected platform</span>
            <input
              required
              value={form.platform}
              onChange={(e) => update("platform", e.target.value)}
              placeholder="Instagram, TikTok, or both"
              className="rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
            />
          </label>
          <fieldset className="grid gap-2 text-sm">
            <legend className="font-semibold text-plum">View target</legend>
            <div className="mt-1 flex flex-col gap-2">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="viewTarget"
                  required
                  checked={form.viewTarget === "200k"}
                  onChange={() => update("viewTarget", "200k")}
                />
                200k
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="viewTarget"
                  checked={form.viewTarget === "300k"}
                  onChange={() => update("viewTarget", "300k")}
                />
                300k
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="viewTarget"
                  checked={form.viewTarget === "no"}
                  onChange={() => update("viewTarget", "no")}
                />
                no view target
              </label>
            </div>
          </fieldset>
        </>
      )}

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-semibold text-plum">Anything else</span>
        <textarea
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          rows={4}
          maxLength={2000}
          className="rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
        />
      </label>

      {error && <p className="text-sm text-coral">{error}</p>}

      <div>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-deep disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Apply"}
        </button>
      </div>
    </form>
  );
}
