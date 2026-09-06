import { createFileRoute } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { FaqList } from "./index";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Cove IVF Tracker" },
      {
        name: "description",
        content:
          "Answers about what Cove is, whether it tracks IVF medications and injections, pricing, Android availability, privacy, and how it differs from general fertility trackers.",
      },
      { property: "og:title", content: "FAQ — Cove IVF Tracker" },
      {
        property: "og:description",
        content:
          "Answers about what Cove is, whether it tracks IVF medications and injections, pricing, Android availability, privacy, and how it differs from general fertility trackers.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.coveivf.life/faq" }],
  }),
  component: FaqPage,
});

const FAQS = [
  {
    q: "What is Cove and who is it for?",
    a: "Cove is a mobile app for people currently in an IVF (in vitro fertilization) cycle. It organizes your medication schedule, injections, appointments, and cycle history in one place. It's built specifically for IVF patients — not for general fertility awareness, ovulation tracking, or trying-to-conceive (TTC) tracking. If you're not yet in an active treatment cycle, a general fertility app will fit you better than Cove.",
  },
  {
    q: "Does it track IVF medications and injections?",
    a: "Yes. You can photograph your clinic's protocol sheet and Cove structures it into a day-by-day medication plan, with reminders for each dose. It also tracks injection sites so you can rotate them, and includes a dedicated reminder for the trigger shot with a countdown and discreet, escalating notifications. When your clinic changes a dose, you update it once and it updates today's card, future reminders, and your history.",
  },
  {
    q: "Does it work for multiple cycles?",
    a: "Yes. Cove keeps your cycle history — medications, doses, and results — across more than one IVF cycle, so if you do a second or third cycle you can look back at what happened in a prior one instead of starting from a blank slate.",
  },
  {
    q: "Is my data private?",
    a: "Cove is designed to be encrypted in transit and at rest. We do not sell your information and do not share it with advertisers, and the app is built without third-party advertising trackers. You can permanently delete your account and its data from within the app at any time. Protocol-sheet photos are processed to read your schedule and are not retained after processing. See the full privacy policy for details — it is currently a plain-language draft under review by a privacy attorney ahead of launch.",
  },
  {
    q: "How much does it cost?",
    a: "Cove is $12.99/month, or $8.33/month when you choose the plan billed every 6 months. A free trial is offered before either subscription starts.",
  },
  {
    q: "Is there an Android version?",
    a: "Not yet. Cove is available now on iPhone. Android is planned, and there's a waitlist on this site to get notified when it launches.",
  },
  {
    q: "Is this a medical device?",
    a: "No. Cove is an organizational tool, not a medical device. It does not diagnose, does not predict outcomes, and never suggests, adjusts, or interprets your doses. It never provides medical advice — your clinic makes every medical decision, and you should always follow your clinic's instructions over anything in the app.",
  },
  {
    q: "How is it different from a general fertility tracker like Flo or Premom?",
    a: "General fertility trackers like Flo or Premom are built around predicting ovulation and fertile windows for people trying to conceive naturally — cycle-day predictions, BBT, cervical mucus, LH-strip logging. None of that applies once you're in an IVF cycle, where your schedule is set by your clinic's protocol rather than your own cycle signals. Cove is built around the opposite problem: a clinic-directed protocol with multiple medications, exact dose timing, injection sites, appointments, and monitoring results that change as your clinic adjusts your plan. If you're not in treatment, a general tracker is the right tool. If you're in an IVF cycle, Cove is built for that specific situation.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

function FaqPage() {
  return (
    <div className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">Cove IVF</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">Frequently asked questions</h1>
        <p className="mt-5 max-w-2xl text-lg text-plum/80">
          Straight answers about what Cove tracks, what it costs, and how it's different from a general fertility app.
        </p>

        <div className="mt-12">
          <FaqList items={FAQS} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
