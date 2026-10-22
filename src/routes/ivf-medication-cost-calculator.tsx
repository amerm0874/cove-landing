import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import coveLogo from "@/assets/cove-logo.webp";
import { toolDownloadUrl } from "@/lib/tool-attribution";
import { absoluteUrl, breadcrumbSchema, canonical, pageMeta } from "@/lib/seo";
import { calculateQuote, moneyCents, wholeCount, type QuoteInput } from "@/lib/medication-quote";

const path = "/ivf-medication-cost-calculator";
const title = "IVF Medication Cost Calculator: Compare Quotes | Cove";
const description = "Compare two IVF medication quotes, including pack sizes, whole packs, shipping and fees. See the total for the quantity you need. Free, private, no signup.";
const faqs = [
  { question: "What does this IVF medication cost calculator compare?", answer: "Two quotes you already have for one identical medication and strength. It calculates the whole packs needed for your requested quantity, then adds the shipping and fees you enter. It does not look up pharmacy prices or estimate the cost of your entire IVF cycle." },
  { question: "How do I compare a price per vial with a price per box?", answer: "Use vials as the shared item type. For a single-vial quote, enter 1 item per pack and the vial price. For a box of 5 identical vials, enter 5 items per pack and the price for the whole box. Both must be the same medication, strength and vial size. Do not enter an injection dose or convert between IU, mg and mL." },
  { question: "Why can the lower price per item have a higher total?", answer: "You may need to buy extra items to make up a whole pack, and shipping or fees can change the comparison. For example, 6 items at 20 each cost 120. Two packs of 5 at 90 each cost 180, even though their price per item is lower. These are fictional numbers, not pharmacy prices." },
  { question: "Can I compare different brands, strengths or insurance prices?", answer: "Do not compare different medicines, strengths or presentations here. Confirm equivalence with your clinic or pharmacist. Use the same payment basis for both quotes, such as two confirmed self-pay quotes. This calculator does not account for deductibles, benefit limits, insurance reimbursement or eligibility for assistance." },
  { question: "What should I include in the prices and fees?", answer: "Enter the final quoted price per pack after confirmed discounts, and the total shipping, taxes and other fees for this purchase in the fees field. Enter 0 only if there are no extra charges. If you do not know an amount, leave it blank and ask the pharmacy. A blank amount is never treated as zero." },
  { question: "Does the lower total mean I should order from that pharmacy?", answer: "It only means that the amounts entered add up to a lower total. Confirm the prescription, pack contents, current price, stock, quote expiry, delivery timing and any conditions with the pharmacy and your clinic before ordering. The calculator does not assess pharmacies or recommend changing your prescribed medication or quantity." },
  { question: "Are my entries saved or sent anywhere?", answer: "No. Your quantities and quotes are calculated in this browser and disappear when you reload or leave the page. No account is needed. The calculator is free; the separate Cove IVF Tracker app offers subscriptions." },
];
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebApplication", name: "IVF Medication Cost Calculator", url: absoluteUrl(path), description, applicationCategory: "UtilitiesApplication", operatingSystem: "Any", browserRequirements: "Requires JavaScript", inLanguage: "en", isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, publisher: { "@id": "https://www.coveivf.life/#organization" } },
    { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    breadcrumbSchema([{ name: "Cove IVF", path: "/" }, { name: "IVF medication cost calculator" }]),
  ],
};
const fieldClass = "mt-2 block min-h-12 w-full min-w-0 rounded-xl border border-line bg-white px-3 py-3 text-base text-plum focus-visible:outline-2 focus-visible:outline-rose-deep focus-visible:outline-offset-2";
const linkClass = "inline-flex min-h-11 items-center underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-rose-deep";
const emptyQuote = (): QuoteInput => ({ packSize: "", price: "", fees: "" });

export const Route = createFileRoute("/ivf-medication-cost-calculator")({
  head: () => ({ meta: pageMeta({ title, description, path }), links: [canonical(path)] }),
  component: MedicationCostCalculator,
});

function QuoteFields({ name, quote, onChange, currency }: { name: string; quote: QuoteInput; onChange: (quote: QuoteInput) => void; currency: string }) {
  const fields = [
    { key: "packSize" as const, label: "Items in one pack", hint: "Use 1 for an individually sold vial, pen or syringe.", valid: wholeCount(quote.packSize) !== null, error: "Enter a whole number from 1 to 10,000." },
    { key: "price" as const, label: `Price for one whole pack (${currency})`, hint: "Use the final quoted price after confirmed discounts.", valid: moneyCents(quote.price) !== null, error: "Enter 0 to 1,000,000 with up to two decimal places." },
    { key: "fees" as const, label: `Total shipping, taxes & fees (${currency})`, hint: "For this purchase. Enter 0 if confirmed free; leave blank if unknown.", valid: moneyCents(quote.fees) !== null, error: "Enter 0 to 1,000,000 with up to two decimal places." },
  ];
  return <fieldset className="min-w-0 border-t border-line pt-5"><legend className="pr-3 font-display text-2xl">Quote {name}</legend><div className="mt-2 space-y-5">{fields.map(f => {
    const id = `quote-${name}-${f.key}`;
    const invalid = quote[f.key] !== "" && !f.valid;
    return <div key={f.key}><label htmlFor={id} className="font-semibold">{f.label}</label><input id={id} type="text" inputMode={f.key === "packSize" ? "numeric" : "decimal"} autoComplete="off" maxLength={12} value={quote[f.key]} onChange={e => onChange({ ...quote, [f.key]: e.target.value })} className={fieldClass} aria-invalid={invalid} aria-describedby={`${id}-hint`} /><p id={`${id}-hint`} className={`mt-2 text-sm leading-relaxed ${invalid ? "font-semibold text-rose-deep" : "text-plum-soft"}`}>{invalid ? f.error : f.hint}</p></div>;
  })}</div></fieldset>;
}

function MedicationCostCalculator() {
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("vials");
  const [currency, setCurrency] = useState("USD");
  const [a, setA] = useState(emptyQuote);
  const [b, setB] = useState(emptyQuote);
  const [confirmed, setConfirmed] = useState(false);
  const resultA = calculateQuote(quantity, a);
  const resultB = calculateQuote(quantity, b);
  const ready = confirmed && resultA && resultB;
  const money = (cents: number) => new Intl.NumberFormat("en", { style: "currency", currency, currencyDisplay: "code" }).format(cents / 100);
  const invalidQuantity = quantity !== "" && wholeCount(quantity) === null;
  const updateA = (quote: QuoteInput) => { setA(quote); setConfirmed(false); };
  const updateB = (quote: QuoteInput) => { setB(quote); setConfirmed(false); };
  return <div className="min-h-screen bg-blush text-plum selection:bg-petal">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <a href="#quote-calculator" className="sr-only focus:not-sr-only focus:block focus:p-4">Skip to calculator</a>
    <header className="border-b border-line"><div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8"><a href="/" aria-label="Cove home" className="flex min-h-11 items-center gap-2 font-display text-2xl font-semibold"><img src={coveLogo} alt="" width="32" height="26" />Cove</a><span className="text-sm">Free fertility tools</span></div></header>
    <main className="mx-auto max-w-5xl px-5 pb-12 pt-9 sm:px-8 sm:pt-14">
      <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl">IVF medication cost calculator</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed">One quote is per vial. The other is per box. Compare what you would actually pay for the quantity you need.</p>
      <p className="mt-3 text-sm text-plum-soft">Use your own quotes. Free, no signup. Entries stay in this browser.</p>
      <section id="quote-calculator" aria-label="Compare medication quotes" className="ph-no-capture mt-8 rounded-2xl border border-line bg-white p-5 sm:p-8">
        <h2 className="text-2xl">Compare one medication at a time</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-plum-soft">Use the exact same medicine, strength and item size in both quotes. Your clinic or pharmacist supplies the quantity; this tool does not choose it.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <div><label htmlFor="quote-quantity" className="font-semibold">Number of items needed</label><input id="quote-quantity" type="text" inputMode="numeric" autoComplete="off" maxLength={5} value={quantity} onChange={e => { setQuantity(e.target.value); setConfirmed(false); }} className={fieldClass} aria-invalid={invalidQuantity} aria-describedby="quantity-hint" /><p id="quantity-hint" className={`mt-2 text-sm ${invalidQuantity ? "font-semibold text-rose-deep" : "text-plum-soft"}`}>{invalidQuantity ? "Enter a whole number from 1 to 10,000." : "Count whole items, not doses or IU."}</p></div>
          <div><label htmlFor="quote-unit" className="font-semibold">Same item type in both quotes</label><select id="quote-unit" value={unit} onChange={e => { setUnit(e.target.value); setConfirmed(false); }} className={fieldClass}>{["vials", "pens", "syringes", "tablets", "items"].map(u => <option key={u} value={u}>{u}</option>)}</select></div>
          <div><label htmlFor="quote-currency" className="font-semibold">Currency for both quotes</label><select id="quote-currency" value={currency} onChange={e => { setCurrency(e.target.value); setConfirmed(false); }} className={fieldClass}>{["USD", "GBP", "EUR", "CAD", "AUD", "EGP"].map(c => <option key={c}>{c}</option>)}</select><p className="mt-2 text-sm text-plum-soft">No currency conversion.</p></div>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2"><QuoteFields name="A" quote={a} onChange={updateA} currency={currency} /><QuoteFields name="B" quote={b} onChange={updateB} currency={currency} /></div>
        <label className="mt-7 flex min-h-12 cursor-pointer items-start gap-3 rounded-xl bg-blush p-4"><input type="checkbox" checked={confirmed} onChange={e => setConfirmed(e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-rose-deep focus-visible:outline-2 focus-visible:outline-rose-deep" /><span className="leading-relaxed">Both quotes are for the same medicine, strength and item size, in the same currency and on the same payment basis. I have included all quoted charges.</span></label>
        <p className="mt-2 text-sm text-plum-soft">If any of these differ or are unknown, ask your pharmacist before comparing.</p>
        <section className="mt-6 rounded-xl bg-petal p-5 sm:p-6" aria-label="Quote comparison result">
          <div role="status" aria-live="polite" aria-atomic="true"><h2 className="text-2xl">{ready ? resultA.total === resultB.total ? "Both quotes have the same total" : `Quote ${resultA.total < resultB.total ? "A" : "B"} totals ${money(Math.abs(resultA.total - resultB.total))} less` : "Your comparison will appear here"}</h2><p className="mt-2 leading-relaxed">{ready ? "Based only on your entries, buying whole packs. This is a cost comparison, not a pharmacy recommendation." : !resultA || !resultB ? "Enter the quantity and all three amounts for each quote. Unknown fees stay blank, not zero." : "Confirm that the quotes match using the checkbox above."}</p></div>
          {ready && <div className="mt-6 grid gap-6 sm:grid-cols-2">{[{ name: "A", result: resultA }, { name: "B", result: resultB }].map(({ name, result }) => <div key={name}><h3 className="text-xl">Quote {name}</h3><dl className="mt-3 space-y-2 text-sm">{[
            ["Whole packs to buy", result.packs.toLocaleString("en")],
            [`Total ${unit} supplied`, result.supplied.toLocaleString("en")],
            ["Extra items in those packs", result.extra.toLocaleString("en")],
            ["Price per item (rounded)", money(result.perItem)],
            ["Medication subtotal", money(result.subtotal)],
            ["Shipping, taxes & fees", money(result.fees)],
          ].map(([label, value]) => <div key={label} className="flex flex-wrap justify-between gap-x-3 gap-y-1"><dt>{label}</dt><dd className="font-semibold tabular-nums">{value}</dd></div>)}<div className="flex flex-wrap justify-between gap-2 border-t border-plum/20 pt-3 text-base"><dt className="font-semibold">Total</dt><dd className="font-bold tabular-nums">{money(result.total)}</dd></div></dl></div>)}</div>}
        </section>
      </section>
      <noscript><p className="mt-4">Enable JavaScript for instant results. To calculate manually: round items needed divided by items per pack up to a whole pack, multiply by the pack price, then add all shipping and fees.</p></noscript>
      <section className="my-9 flex flex-col gap-5 border-b border-line pb-9 sm:flex-row sm:items-center sm:justify-between"><div className="max-w-lg"><h2 className="text-2xl">Next, keep your medication plan together.</h2><p className="mt-2 leading-relaxed">Track your clinic’s medication schedule and reminders in Cove IVF Tracker.</p><p className="mt-2 text-sm text-plum-soft">This calculator is free. The Cove app offers subscriptions.</p></div><a href={toolDownloadUrl(path)} referrerPolicy="no-referrer" data-store-placement="medication_quote_calculator" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-rose-deep px-6 py-3 font-semibold text-white hover:bg-plum focus-visible:outline-2 focus-visible:outline-plum focus-visible:outline-offset-4">Download Cove for iPhone</a></section>
      <div className="max-w-3xl"><section><h2 className="text-3xl">Compare the pack, not just the price</h2><p className="mt-4 leading-relaxed">A price for one vial and a price for five vials are different offers. First match the medicine, strength and size of each item. Then check the number of items in the quoted pack and how many whole packs you would need to purchase.</p><p className="mt-4 leading-relaxed">The calculation is: whole packs needed × price per pack + shipping, taxes and fees. If the pharmacy sells individual items instead, ask for a per-item quote and enter 1 item per pack. Do not count a partial pack unless the pharmacy has quoted it separately.</p></section>
      <section className="mt-10" aria-labelledby="cost-faq"><h2 id="cost-faq" className="text-3xl">Medication quote questions</h2><div className="mt-4">{faqs.map(({ question, answer }) => <details key={question} className="border-b border-line py-1"><summary className="cursor-pointer py-4 pr-3 font-semibold focus-visible:outline-2 focus-visible:outline-rose-deep">{question}</summary><p className="pb-5 leading-relaxed text-plum-soft">{answer}</p></details>)}</div></section>
      <section className="mt-10"><h2 className="text-2xl">Before placing an order</h2><p className="mt-3 leading-relaxed">Ask your pharmacy to confirm the final quote and your clinic’s prescription. <a href="https://inciid.org/fertility-medications-cost-tool/" className="underline underline-offset-4">INCIID’s fertility medication cost resource</a> also emphasizes checking current prices with the pharmacy. This tool does not validate a seller, compare medication alternatives or provide medical advice.</p><p className="mt-3 text-sm text-plum-soft">Created by Cove. Quote arithmetic only; no patient prices are collected.</p></section>
      <nav aria-label="More from Cove" className="mt-8 flex flex-wrap gap-x-6 gap-y-2"><a href="/features" className={linkClass}>Cove medication tracking</a><a href="/days-past-embryo-transfer-calculator" className={linkClass}>Days past transfer calculator</a><a href="/faq" className={linkClass}>Cove app FAQs</a></nav></div>
    </main><footer className="border-t border-line px-5 py-6"><div className="mx-auto flex max-w-5xl flex-wrap gap-6 text-sm"><a href="/" className={linkClass}>Cove IVF Tracker</a><a href="/privacy" className={linkClass}>Privacy</a><a href="/support" className={linkClass}>Support</a></div></footer>
  </div>;
}
