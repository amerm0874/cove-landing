import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronDown, ShieldCheck, HeartHandshake, Stethoscope, Smartphone } from "lucide-react";
import { BackgroundBlobs, Footer, Header, SocialIcons } from "@/components/site-chrome";
import {
  LifeDuringIVF,
  ChapterMedication,
  ChapterScanner,
  ChapterVerification,
  ChapterTrigger,
  ChapterTimeline,
  WithoutWithCove,
  CommunityReality,
} from "@/components/chapters";
import { Reveal } from "@/components/reveal";
import { WaitlistForm } from "@/components/waitlist";

export const Route = createFileRoute("/")({
  component: Landing,
});

const TRUST = [
  { Icon: HeartHandshake, text: "Built with IVF patients." },
  { Icon: Stethoscope, text: "Designed around real clinic protocols." },
  { Icon: ShieldCheck, text: "Encrypted in transit and at rest." },
];

const PRIVACY_INTRO = "Privacy isn't a feature we bolt on — it's how we're building Cove from day one.";

const PRIVACY = [
  { title: "Built to be encrypted", body: "Your data will be encrypted in transit and at rest." },
  { title: "Never sold, never shared", body: "We will never sell your information or share it with advertisers." },
  { title: "No ad trackers in the app", body: "Cove is being built without advertising SDKs, and your health data will never be used to target ads." },
  { title: "You'll stay in control", body: "You'll be able to delete your data permanently, anytime, in one tap." },
  { title: "Discreet by design", body: "We're designing lock-screen notifications that never name your medications." },
];

const FAQ = [
  { q: "Is this medical advice?", a: "No. Cove is an organizer. It never suggests, adjusts, or interprets doses, and never predicts outcomes. Your clinic decides everything medical." },
  { q: "What happens to my scan?", a: "It's processed to read your schedule, then discarded. Your schedule is stored encrypted, in transit and at rest." },
  { q: "Is it iPhone only?", a: "Yes, at launch." },
];

function Landing() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10">
        <Hero />
        <TrustStrip />
        <LifeDuringIVF />
        <WithoutWithCove />
        <ChapterMedication />
        <ChapterScanner />
        <ChapterVerification />
        <ChapterTrigger />
        <ChapterTimeline />
        <CommunityReality />
        <Privacy />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-5 pt-16 pb-20 text-center sm:px-8 sm:pt-24 sm:pb-28">
      <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">
        Your IVF companion · iOS
      </p>
      <h1 className="mx-auto mt-5 font-display text-4xl leading-[1.05] font-semibold text-plum sm:text-5xl md:text-6xl">
        From the first protocol to the final result — one calm place.
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-plum/80">
        Cove stays with you through the whole cycle. Every medication, appointment, dose change and result — kept together and encrypted, so you're not holding it all in your head.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#waitlist"
          className="rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-deep focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
        >
          Join the waitlist
        </a>
        <span
          aria-label="Coming soon on the App Store"
          className="inline-flex items-center gap-3 rounded-xl border border-plum/70 bg-plum px-4 py-2.5 text-blush select-none"
        >
          <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M16.365 1.43c0 1.14-.42 2.22-1.14 3.04-.78.9-2.04 1.6-3.06 1.5-.12-1.08.42-2.22 1.14-3.02.78-.88 2.14-1.56 3.06-1.52zM20.6 17.05c-.56 1.28-.82 1.86-1.54 2.98-.98 1.52-2.36 3.42-4.08 3.44-1.52.02-1.92-.98-3.98-.96-2.06.02-2.5.98-4.02.96-1.72-.02-3.02-1.74-4-3.26-2.76-4.28-3.06-9.3-1.36-11.98 1.22-1.92 3.14-3.04 4.94-3.04 1.84 0 2.98 1 4.5 1 1.48 0 2.38-1 4.5-1 1.6 0 3.3.86 4.52 2.36-3.98 2.18-3.34 7.86.52 9.5z" />
          </svg>
          <span className="flex flex-col leading-tight">
            <span className="font-mono-tnum text-[9px] uppercase tracking-widest opacity-70">Coming soon on the</span>
            <span className="font-display text-lg">App Store</span>
          </span>
        </span>
      </div>

      <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-4 py-2 font-mono-tnum text-[10px] uppercase tracking-widest text-plum/70">
        <Smartphone className="h-3.5 w-3.5 text-rose" aria-hidden />
        <span>iPhone · designed for IVF cycles</span>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-sage/25 bg-sage-soft/60 px-6 py-5 text-sm text-plum/80 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        {TRUST.map(({ Icon, text }) => (
          <div key={text} className="flex items-center gap-3">
            <span aria-hidden className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-sage-deep">
              <Icon className="h-4 w-4" strokeWidth={2} />
            </span>
            <span className="font-medium">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section id="privacy" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Privacy, specifically.</h2>
          <p className="mt-5 text-lg text-plum/80">
            {PRIVACY_INTRO}
          </p>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {PRIVACY.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <div className="flex h-full gap-4 rounded-2xl border border-line bg-petal/50 p-6">
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-sage bg-sage-soft">
                <Check aria-hidden className="h-4 w-4 text-sage-deep" strokeWidth={3} />
              </span>
              <div>
                <div className="font-display text-xl font-semibold">{p.title}</div>
                <p className="mt-2 text-plum/80">{p.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-line rounded-2xl border border-line bg-petal/40">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-[-4px]"
            >
              <span className="font-display text-lg font-semibold">{f.q}</span>
              <ChevronDown
                aria-hidden
                className={`h-5 w-5 shrink-0 text-rose transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && <div className="px-6 pb-6 text-plum/80">{f.a}</div>}
          </li>
        );
      })}
    </ul>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">Questions</h2>
      <div className="mt-8"><FaqList items={FAQ} /></div>
    </section>
  );
}

function Waitlist() {
  return (
    <section id="waitlist" className="mx-auto max-w-3xl px-5 pt-24 pb-12 text-center sm:px-8">
      <h2 className="font-display text-4xl font-semibold sm:text-5xl">A calm harbor for your cycle.</h2>
      <p className="mt-5 text-lg text-plum/80">
        Join the waitlist — one email when it's ready, quiet until then.
      </p>
      <WaitlistForm />
      <p className="mt-6 text-sm text-muted">
        Encrypted on your device. Never sold, never shared.
      </p>
      <div className="mt-10 flex justify-center"><SocialIcons size="lg" labeled /></div>
    </section>
  );
}
