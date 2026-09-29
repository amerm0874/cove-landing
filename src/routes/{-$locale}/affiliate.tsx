import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { CONTACT_EMAIL } from "@/lib/constants";
import { canonicalLink, hreflangLinks, pageMeta } from "@/lib/seo";
import { getDictionary, useT } from "@/i18n";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/config";
import { submitAffiliateApplication, type AffiliateFormInput } from "@/lib/submit-affiliate";

function localeOf(params: { locale?: string }): Locale {
  return isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
}

export const Route = createFileRoute("/{-$locale}/affiliate")({
  head: ({ params }) => {
    const locale = localeOf(params);
    const d = getDictionary(locale);
    return {
      meta: pageMeta({
        title: d.meta.affiliate.title,
        description: d.meta.affiliate.description,
        ogDescription: d.meta.affiliate.ogDescription,
        path: "/affiliate",
        locale,
      }),
      links: [canonicalLink("/affiliate", locale), ...hreflangLinks("/affiliate")],
    };
  },
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

/** Application email body is intentionally English — it lands in the Cove team inbox. */
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

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl font-semibold text-plum">{children}</h2>;
}
function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 leading-relaxed text-plum/85">{children}</p>;
}

function Affiliate() {
  const t = useT();
  const a = t.affiliate;
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{a.eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">{a.heading}</h1>

        <H2>{a.whoHeading}</H2>
        <P>{a.whoBody}</P>

        <H2>{a.commissionHeading}</H2>
        <P>{a.commissionBody}</P>

        <H2>{a.cookieHeading}</H2>
        <P>{a.cookieBody}</P>

        <H2>{a.howHeading}</H2>
        <P>{a.howBody}</P>

        <H2>{a.measureHeading}</H2>
        <P>{a.measureBody}</P>

        <H2>{a.trialHeading}</H2>
        <P>{a.trialBody}</P>

        <AffiliateForm />
      </main>
      <Footer />
    </div>
  );
}

function AffiliateForm() {
  const t = useT();
  const f = t.affiliate.form;
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
      setError(result.error || f.errorGeneric);
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
        <p className="text-lg leading-relaxed text-plum">{t.affiliate.submittedBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-12 grid gap-4 rounded-2xl border border-line bg-blush/70 p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold text-plum">{f.applyHeading}</h2>
      <p className="text-sm text-plum/80">{f.applyIntro}</p>

      <label htmlFor="affiliate-name" className="flex w-full flex-col gap-2 text-sm">
        <span className="block font-semibold text-plum">{f.name}</span>
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
        <span className="block font-semibold text-plum">{f.email}</span>
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
        <span className="font-semibold text-plum">{f.handle}</span>
        <input
          required
          value={form.handle}
          onChange={(e) => update("handle", e.target.value)}
          className="rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
        />
      </label>

      <fieldset className="grid gap-2 text-sm">
        <legend className="font-semibold text-plum">{f.inCycle}</legend>
        <div className="mt-1 flex gap-6">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="inCycle" required checked={form.inCycle === "yes"} onChange={() => update("inCycle", "yes")} />
            {f.yes}
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="inCycle" checked={form.inCycle === "no"} onChange={() => update("inCycle", "no")} />
            {f.no}
          </label>
        </div>
      </fieldset>

      <fieldset className="grid gap-2 text-sm">
        <legend className="font-semibold text-plum">{f.creator}</legend>
        <div className="mt-1 flex gap-6">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="isCreator" required checked={form.isCreator === "yes"} onChange={() => update("isCreator", "yes")} />
            {f.yes}
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              name="isCreator"
              checked={form.isCreator === "no"}
              onChange={() => {
                setForm((current) => ({ ...current, isCreator: "no", platform: "", viewTarget: "" }));
              }}
            />
            {f.no}
          </label>
        </div>
      </fieldset>

      {form.isCreator === "yes" && (
        <>
          <label className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-plum">{f.expectedPlatform}</span>
            <input
              required
              value={form.platform}
              onChange={(e) => update("platform", e.target.value)}
              placeholder={f.expectedPlatformPlaceholder}
              className="rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
            />
          </label>
          <fieldset className="grid gap-2 text-sm">
            <legend className="font-semibold text-plum">{f.viewTarget}</legend>
            <div className="mt-1 flex flex-col gap-2">
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="viewTarget" required checked={form.viewTarget === "200k"} onChange={() => update("viewTarget", "200k")} />
                200k
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="viewTarget" checked={form.viewTarget === "300k"} onChange={() => update("viewTarget", "300k")} />
                300k
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="viewTarget" checked={form.viewTarget === "no"} onChange={() => update("viewTarget", "no")} />
                {f.noViewTarget}
              </label>
            </div>
          </fieldset>
        </>
      )}

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-semibold text-plum">{f.anythingElse}</span>
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
          {submitting ? f.sending : f.apply}
        </button>
      </div>
    </form>
  );
}
