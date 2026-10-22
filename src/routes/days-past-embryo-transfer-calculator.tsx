import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import coveLogo from "@/assets/cove-logo.webp";
import { toolDownloadUrl } from "@/lib/tool-attribution";
import { absoluteUrl, breadcrumbSchema, canonical, pageMeta } from "@/lib/seo";
import { localToday, transferDays } from "@/lib/transfer-days";

const path = "/days-past-embryo-transfer-calculator";
const title = "Days Past Embryo Transfer Calculator (DPT) | Cove";
const description = "Calculate days past embryo transfer, decode 7dp5dt, and count down to your clinic's pregnancy test. Free, instant and private. No signup needed.";
const faqs = [
  { question: "Is embryo transfer day day 0 or day 1?", answer: "For days past transfer (DPT), your transfer date is day 0. The next calendar day is 1 DPT. For example, if your transfer was on Monday, Thursday is 3 days past transfer." },
  { question: "What does 7dp5dt mean?", answer: "7dp5dt means 7 days past a 5-day embryo transfer. The first number counts the days since transfer; the second describes the embryo day. Similarly, 9dp3dt means 9 days past a 3-day embryo transfer." },
  { question: "Does this work for fresh and frozen embryo transfers?", answer: "Yes. Days past transfer are counted from the date the embryo was transferred, for both fresh transfers and frozen embryo transfers (FET). Time spent frozen does not add to days past transfer." },
  { question: "What if I do not know my embryo day?", answer: "Leave the embryo-day field on 'Not sure'. You can still calculate your days past transfer and clinic test countdown. The optional embryo day only changes the shorthand label, not the day count. Use the day your clinic documented; this tool does not calculate pregnancy dating." },
  { question: "When should I take a pregnancy test after embryo transfer?", answer: "Use the date your fertility clinic gave you. Clinics use different testing schedules, so this tool does not choose a test date. Testing early can be misleading, including a positive result caused by an hCG trigger injection. Add your clinic's scheduled date to see your countdown." },
  { question: "Can this calculator tell me whether implantation has happened?", answer: "No. It counts calendar days only. It cannot confirm implantation, pregnancy or treatment success, and it does not interpret symptoms or test results. Follow your clinic's testing plan and medication instructions." },
  { question: "Is the calculator free, and are my dates saved?", answer: "The calculator is free and does not require an account. Your entries are calculated in this browser, are not sent to Cove, and disappear when you reload the page. Cove IVF Tracker is a separate app with subscriptions." },
];

export const Route = createFileRoute("/days-past-embryo-transfer-calculator")({
  head: () => ({ meta: pageMeta({ title, description, path }), links: [canonical(path)] }),
  component: TransferCalculator,
});

function TransferCalculator() {
  const [transfer, setTransfer] = useState("");
  const [reference, setReference] = useState("");
  const [embryoDay, setEmbryoDay] = useState("");
  const [test, setTest] = useState("");
  useEffect(() => { setReference(localToday()); }, []);
  const result = transfer && reference ? transferDays(transfer, reference, test) : null;
  const fieldClass = "mt-2 block min-h-12 w-full min-w-0 rounded-xl border border-line bg-blush px-3 py-3 text-base text-plum focus-visible:outline-2 focus-visible:outline-rose-deep focus-visible:outline-offset-2";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebApplication", "@id": `${absoluteUrl(path)}#tool`, name: "Days Past Embryo Transfer Calculator", url: absoluteUrl(path), description, applicationCategory: "HealthApplication", operatingSystem: "Any", browserRequirements: "Requires JavaScript", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, publisher: { "@id": "https://www.coveivf.life/#organization" } },
      { "@type": "FAQPage", "@id": `${absoluteUrl(path)}#faq`, mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      breadcrumbSchema([{ name: "Cove IVF", path: "/" }, { name: "Days past embryo transfer calculator" }]),
    ],
  };
  return (
    <div className="min-h-screen bg-blush text-plum selection:bg-petal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <a href="#calculator" className="sr-only focus:not-sr-only focus:block focus:p-4">Skip to calculator</a>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <a href="/" aria-label="Cove home" className="flex min-h-11 items-center gap-2 font-display text-2xl font-semibold"><img src={coveLogo} alt="" width="32" height="26" />Cove</a>
          <span className="text-sm text-plum-soft">Free fertility tools</span>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 pb-12 pt-9 sm:px-8 sm:pt-14">
        <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl">Days past embryo transfer calculator</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-plum-soft">One less thing to count. Find your day after transfer, understand your IVF shorthand, and see how long until your clinic’s test.</p>
        <p className="mt-3 text-sm text-plum-soft">Free to use. No signup. Your dates stay in this browser.</p>
        <section id="calculator" aria-label="Calculate your days past transfer" className="mt-8 grid scroll-mt-5 overflow-hidden rounded-2xl border border-line md:grid-cols-2">
          <div className="min-w-0 space-y-5 bg-white p-5 sm:p-8 ph-no-capture">
            <label className="block font-semibold">Embryo transfer date<input type="date" value={transfer} min="1900-01-01" max="2100-12-31" onChange={e => setTransfer(e.target.value)} className={fieldClass} aria-describedby="transfer-help" /></label>
            <p id="transfer-help" className="!mt-2 text-sm text-plum-soft">The day your embryo was transferred. This is day 0.</p>
            <label className="block font-semibold">Count days as of<input type="date" value={reference} min="1900-01-01" max="2100-12-31" onChange={e => setReference(e.target.value)} className={fieldClass} /></label>
            <label className="block font-semibold">Embryo day <span className="font-normal">(optional)</span><select value={embryoDay} onChange={e => setEmbryoDay(e.target.value)} className={fieldClass}><option value="">Not sure</option>{[3, 5, 6, 7].map(day => <option key={day} value={day}>Day {day}</option>)}</select></label>
            <label className="block font-semibold">Clinic pregnancy test date <span className="font-normal">(optional)</span><input type="date" value={test} min={transfer || "1900-01-01"} max="2100-12-31" onChange={e => setTest(e.target.value)} className={fieldClass} aria-describedby="test-help" /></label>
            <p id="test-help" className="!mt-2 text-sm text-plum-soft">Use the date your clinic gave you. We won’t guess it.</p>
          </div>
          <div className="flex min-w-0 flex-col justify-center bg-petal p-5 sm:p-8">
            <div role="status" aria-live="polite" aria-atomic="true" className="ph-no-capture">
              {!result ? <><h2 className="text-3xl">Where are you in the wait?</h2><p className="mt-4 leading-relaxed">Enter your transfer date to see your result here instantly.</p></> : "error" in result ? <p className="font-semibold">{result.error}</p> : <>
                <h2 className="text-3xl leading-tight">{result.days < 0 ? `${-result.days} ${result.days === -1 ? "day" : "days"} until transfer` : result.days === 0 ? "It’s transfer day" : `${result.days} ${result.days === 1 ? "day" : "days"} past transfer`}</h2>
                <p className="mt-4 leading-relaxed">{result.days < 0 ? "Your selected transfer date is after the date you are counting from. The DPT count starts on transfer day." : `Your transfer day is day 0. You are ${result.days} calendar ${result.days === 1 ? "day" : "days"} beyond that date.`}</p>
                {result.days >= 0 && <p className="mt-5 text-2xl font-semibold tabular-nums">{embryoDay ? `${result.days}dp${embryoDay}dt` : `${result.days} DPT`}</p>}
                {result.days >= 0 && embryoDay && <p className="mt-1 text-sm">{result.days} days past a {embryoDay}-day embryo transfer.</p>}
                {result.untilTest !== null && <p className="mt-6 border-t border-plum/20 pt-5 font-semibold">{result.untilTest > 0 ? `${result.untilTest} ${result.untilTest === 1 ? "day" : "days"} until your clinic’s test` : result.untilTest === 0 ? "Your clinic test is scheduled for this date." : `Your scheduled clinic test was ${-result.untilTest} ${result.untilTest === -1 ? "day" : "days"} before this date.`}</p>}
              </>}
            </div>
            <p className="mt-8 text-sm leading-relaxed">A day count, not a prediction. This cannot tell you whether implantation has happened or whether you are pregnant.</p>
          </div>
        </section>
        <noscript><p className="mt-4">Enable JavaScript for an instant result. To count manually, subtract your transfer date from your counting date in calendar days; transfer day is day 0.</p></noscript>
        <section className="my-9 flex flex-col gap-5 border-b border-line pb-9 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-lg"><h2 className="text-2xl">Keep the rest of your cycle together.</h2><p className="mt-2 leading-relaxed text-plum-soft">Track medications, symptoms and your two-week wait in Cove IVF Tracker.</p><p className="mt-2 text-sm text-plum-soft">This calculator is free. The Cove app offers subscriptions.</p></div>
          <a href={toolDownloadUrl(path)} referrerPolicy="no-referrer" data-store-placement="transfer_calculator" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-rose-deep px-6 py-3 font-semibold text-white hover:bg-plum focus-visible:outline-2 focus-visible:outline-plum focus-visible:outline-offset-4">Download Cove for iPhone</a>
        </section>
        <div className="max-w-3xl">
          <section aria-labelledby="how-heading"><h2 id="how-heading" className="text-3xl">How to count days past transfer</h2><p className="mt-4 leading-relaxed">Subtract your embryo transfer date from the date you want to check. Count calendar days, starting with day 0 on transfer day. A transfer on October 1 is 7 DPT on October 8. If your clinic documented a day-5 embryo, the shorthand is 7dp5dt.</p><p className="mt-4 leading-relaxed">The embryo day changes the shorthand, not the number of days since transfer. This calculator works for fresh IVF transfers and frozen embryo transfers.</p></section>
          <section id="faq" className="mt-10" aria-labelledby="faq-heading"><h2 id="faq-heading" className="text-3xl">Your transfer-day questions</h2><div className="mt-4">{faqs.map(({ question, answer }) => <details key={question} className="border-b border-line py-1"><summary className="cursor-pointer py-4 pr-3 font-semibold focus-visible:outline-2 focus-visible:outline-rose-deep">{question}</summary><p className="pb-5 leading-relaxed text-plum-soft">{answer}</p></details>)}</div></section>
          <section className="mt-10"><h2 className="text-2xl">A note on pregnancy testing</h2><p className="mt-3 leading-relaxed">Follow your clinic’s test date and medication instructions. <a className="underline underline-offset-4" href="https://www.guysandstthomas.nhs.uk/health-information/ivf-treatment/results-your-pregnancy-test">Guy’s and St Thomas’ NHS guidance</a> explains why an early test can be misleading after a trigger injection. Your clinic’s plan takes priority over an online calculator.</p><p className="mt-3 text-sm text-plum-soft">Created by Cove. This is a calendar tool, not medical advice.</p></section>
          <nav aria-label="Explore Cove" className="mt-8 flex flex-wrap gap-x-6 gap-y-2"><a className="inline-flex min-h-11 items-center underline underline-offset-4" href="/features">Explore Cove’s tracking features</a><a className="inline-flex min-h-11 items-center underline underline-offset-4" href="/blog">Read the IVF journal</a><a className="inline-flex min-h-11 items-center underline underline-offset-4" href="/faq">Cove app FAQs</a></nav>
        </div>
      </main>
      <footer className="border-t border-line px-5 py-6"><div className="mx-auto flex max-w-5xl flex-wrap gap-6 text-sm"><a href="/" className="inline-flex min-h-11 items-center">Cove IVF Tracker</a><a href="/privacy" className="inline-flex min-h-11 items-center">Privacy</a><a href="/support" className="inline-flex min-h-11 items-center">Support</a></div></footer>
    </div>
  );
}
