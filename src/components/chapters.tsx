import type { ReactNode } from "react";
import {
  AlarmClock,
  AppWindow,
  ArrowRight,
  Calendar,
  Check,
  File,
  FileText,
  HelpCircle,
  Image,
  MessageCircle,
  Pill,
  ScanLine,
  RefreshCw,
  BellRing,
  Table,
} from "lucide-react";
import { Reveal } from "@/components/reveal";


/* ---------- Life during IVF (situations, not testimonials) ---------- */

const SITUATIONS: { moment: string; snippet: React.ReactNode }[] = [
  {
    moment: "Your clinic changed today's dose.",
    snippet: (
      <div className="font-mono-tnum text-sm">
        <span className="line-through text-muted">150 IU</span>
        <span className="mx-2 text-rose">→</span>
        <span className="rounded-md bg-sage-soft px-2 py-0.5 text-sage-deep">225 IU</span>
      </div>
    ),
  },
  {
    moment: "Three medications tonight.",
    snippet: <div className="font-mono-tnum text-sm text-plum/80">Gonal-F · Menopur · Cetrotide</div>,
  },
  {
    moment: "Monitoring at 7:30 AM.",
    snippet: <div className="font-mono-tnum text-sm text-seafoam-deep">Bloodwork · ultrasound</div>,
  },
  {
    moment: "Trigger shot at exactly 8:00 PM.",
    snippet: <div className="font-mono-tnum text-sm text-rose">T-minus 36h to retrieval</div>,
  },
  {
    moment: "Which medication was mixed first?",
    snippet: <div className="font-mono-tnum text-sm text-plum/80">1. Menopur · 2. Gonal-F</div>,
  },
  {
    moment: "Waiting for tomorrow's fertilization report.",
    snippet: <div className="font-mono-tnum text-sm text-gold">Day 1 · pending</div>,
  },
];

export function LifeDuringIVF() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-plum sm:text-5xl">
          IVF is hard enough. Keeping track of everything shouldn't be.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-plum/75">
          A cycle isn't a routine. It's a stack of specific, moving details — and they all matter.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SITUATIONS.map((s, i) => (
          <Reveal key={s.moment} delay={i * 60}>
            <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white/70 p-6 backdrop-blur-sm">
              <p className="font-display text-lg font-semibold leading-snug text-plum">{s.moment}</p>
              <div className="mt-6 border-t border-line/70 pt-4">{s.snippet}</div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------ Full-screen chapter frame ----------------- */

function Chapter({
  n,
  eyebrow,
  headline,
  body,
  media,
  reverse = false,
  id,
}: {
  n: string;
  eyebrow: string;
  headline: string;
  body?: string;
  media: React.ReactNode;
  reverse?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 py-24 sm:px-8"
    >
      <div className={`grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal>
          <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-rose">
            Chapter {n} · {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] font-semibold text-plum sm:text-5xl md:text-[3.5rem]">
            {headline}
          </h2>
          {body && <p className="mt-6 max-w-lg text-lg text-plum/75">{body}</p>}
        </Reveal>
        <Reveal delay={120}>
          <div className="relative">{media}</div>
        </Reveal>
      </div>
    </section>
  );
}

/* --- Simple on-brand visual anchor (no device frames) --- */
function ChapterAnchor({
  Icon,
  label,
  detail,
  tone = "blush",
}: {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  label: string;
  detail: ReactNode;
  tone?: "blush" | "sage" | "plum" | "gold";
}) {
  const tones: Record<string, string> = {
    blush: "from-petal/70 via-blush to-petal/50 border-line text-plum",
    sage: "from-sage-soft/80 via-sage-soft/40 to-white border-sage/30 text-plum",
    plum: "from-plum via-plum-soft to-[#4a2f3d] border-plum/30 text-blush",
    gold: "from-[#f7ecd7] via-[#fbf4e4] to-[#f7ecd7] border-gold/30 text-plum",
  };
  const isDark = tone === "plum";
  return (
    <div
      className={`relative mx-auto flex aspect-square w-full max-w-[380px] flex-col items-center justify-center gap-5 rounded-[36px] border bg-gradient-to-br p-10 ${tones[tone]}`}
    >
      <span
        aria-hidden
        className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${
          isDark ? "bg-white/10 text-blush" : "bg-white/70 text-rose"
        }`}
      >
        <Icon className="h-8 w-8" strokeWidth={1.75} aria-hidden />
      </span>
      <div className={`font-mono-tnum text-[10px] uppercase tracking-widest ${isDark ? "text-blush/70" : "text-muted"}`}>
        {label}
      </div>
      <div className={`text-center font-display text-xl leading-snug ${isDark ? "text-blush" : "text-plum"}`}>
        {detail}
      </div>
    </div>
  );
}

export function ChapterMedication() {
  return (
    <Chapter
      id="how-it-works"
      n="01"
      eyebrow="Medication plan"
      headline="Know exactly what tonight requires."
      body="Your evening lineup, in order, with a quiet check before you start mixing. The whole plan, held together — not scattered across a PDF, a portal, and a text thread."
      media={
        <ChapterAnchor
          Icon={Pill}
          label="Tonight · in order"
          tone="blush"
          detail={<>Gonal-F · Menopur · Cetrotide</>}
        />
      }
    />
  );
}

export function ChapterScanner() {
  return (
    <Chapter
      n="02"
      eyebrow="Protocol scanner"
      headline="One clinic sheet becomes your entire treatment plan."
      body="Photograph the protocol once. Cove structures it into a plan you can actually read — every drug, every dose, every day, in the same place."
      media={
        <ChapterAnchor
          Icon={ScanLine}
          label="One photo · full plan"
          tone="sage"
          detail={<>Every drug, every dose, every day.</>}
        />
      }
      reverse
    />
  );
}

export function ChapterVerification() {
  return (
    <Chapter
      n="03"
      eyebrow="Dose verification"
      headline="When your clinic changes one number, everything stays accurate."
      body="Update the value once — after you confirm it against your clinic sheet. Cove replaces it on tonight's card, tomorrow's reminder, and the log."
      media={
        <ChapterAnchor
          Icon={RefreshCw}
          label="Verified update"
          tone="gold"
          detail={
            <span className="font-mono-tnum">
              <span className="text-muted line-through">150 IU</span>
              <span className="mx-2 text-rose">→</span>
              <span className="text-plum">225 IU</span>
            </span>
          }
        />
      }
    />
  );
}

export function ChapterTrigger() {
  return (
    <Chapter
      n="04"
      eyebrow="Trigger shot protection"
      headline="The one reminder that cannot fail."
      body="A countdown, escalating quiet reminders, and a clear confirmation. Discreet on your lock screen — your medications are never named."
      media={
        <ChapterAnchor
          Icon={BellRing}
          label="Discreet · exact"
          tone="plum"
          detail={<>A quiet reminder at exactly 8:00 PM.</>}
        />
      }
      reverse
    />
  );
}



/* --- Chapter 5: timeline --- */
const PHASES = [
  { k: "Protocol", state: "done" as const },
  { k: "Stimulation", state: "done" as const },
  { k: "Monitoring", state: "done" as const },
  { k: "Trigger", state: "current" as const },
  { k: "Retrieval", state: "next" as const },
  { k: "Fertilization report", state: "next" as const },
  { k: "Embryos", state: "later" as const },
  { k: "Transfer", state: "later" as const },
  { k: "Beta test", state: "later" as const },

];

function TimelineVertical() {
  return (
    <ol className="relative rounded-3xl border border-line bg-white/80 p-6 backdrop-blur-sm sm:p-8">
      <div aria-hidden className="absolute left-9 top-8 bottom-8 w-px bg-line sm:left-11" />
      {PHASES.map((p, i) => {
        const isCurrent = p.state === "current";
        const isDone = p.state === "done";
        const isLater = p.state === "later";
        return (
          <li key={p.k} className="relative flex items-center gap-4 py-3">
            <span
              className={`relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                isDone ? "border-sage bg-sage-soft" : isCurrent ? "border-rose bg-rose/15 pulse-soft" : "border-line bg-white"
              }`}
            >
              {isDone && <Check className="h-3 w-3 text-sage-deep" strokeWidth={3} aria-hidden />}
              {isCurrent && <span className="h-1.5 w-1.5 rounded-full bg-rose" />}
            </span>
            <div className="flex flex-1 items-center justify-between gap-3">
              <span className={`text-base ${isCurrent ? "font-semibold text-plum" : isLater ? "text-muted" : "text-plum/85"}`}>
                <span className="font-mono-tnum text-[10px] uppercase tracking-widest text-muted mr-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p.k}
              </span>
              {isLater && (
                <span className="rounded-full border border-line px-2 py-0.5 font-mono-tnum text-[9px] uppercase tracking-widest text-muted">
                  Coming soon
                </span>
              )}
              {isCurrent && (
                <span className="rounded-full bg-rose/10 px-2 py-0.5 font-mono-tnum text-[9px] uppercase tracking-widest text-rose">
                  You are here
                </span>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export function ChapterTimeline() {
  return (
    <Chapter
      id="timeline"
      n="05"
      eyebrow="Treatment timeline"
      headline="Always know where you are."
      body="A quiet vertical view of your cycle. Version one carries you through the stim cycle and the first fertilization report. Later stages are on the way."
      media={<TimelineVertical />}
    />
  );
}

/* ------------------- Without Cove / With Cove ------------------- */

export function WithoutWithCove() {
  const messy = [
    { text: "Excel spreadsheet of doses", Icon: Table },
    { text: "Notion page of notes", Icon: FileText },
    { text: "PDF protocol from the clinic", Icon: File },
    { text: "Clinic portal login", Icon: AppWindow },
    { text: "Calendar alerts", Icon: Calendar },
    { text: "Phone alarms labeled 'meds'", Icon: AlarmClock },
    { text: "WhatsApp thread with the nurse", Icon: MessageCircle },
    { text: "Screenshot of the protocol sheet", Icon: Image },
    { text: "\"What was today's dose?\"", Icon: HelpCircle },
  ];
  const calm = [
    "One verified treatment plan",
    "One medication schedule",
    "One appointment timeline",
    "One place for dose changes",
    "One place for results",
    "One calm companion",
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush via-petal/60 to-blush py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">The difference</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-plum sm:text-5xl md:text-6xl">
              A cycle carried in ten places — or one.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="h-full rounded-[32px] border border-line bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-10">
              <div className="font-mono-tnum text-[10px] uppercase tracking-widest text-muted">Without Cove</div>
              <div className="mt-2 font-display text-3xl font-semibold text-plum/70 sm:text-4xl">Scattered. Uneasy.</div>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {messy.map(({ text, Icon }, i) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-plum/70"
                    style={{ transform: `rotate(${(i % 5) - 2}deg)` }}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden />
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full rounded-[32px] border border-sage/40 bg-sage-soft/70 p-8 shadow-sm backdrop-blur-sm sm:p-10">
              <div className="absolute -top-3 -right-3 hidden h-16 w-16 rounded-full bg-rose/10 lg:flex items-center justify-center">
                <ArrowRight className="h-7 w-7 text-rose" />
              </div>
              <div className="font-mono-tnum text-[10px] uppercase tracking-widest text-sage-deep">With Cove</div>
              <div className="mt-2 font-display text-3xl font-semibold text-plum sm:text-4xl">Calm. Single. Ordered.</div>
              <ul className="mt-8 space-y-4">
                {calm.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-plum">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-sage bg-white">
                      <Check className="h-3.5 w-3.5 text-sage-deep" strokeWidth={3} aria-hidden />
                    </span>
                    <span className="text-lg">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --------- Community reality (themes, NOT testimonials) --------- */

const VOICES = [
  "I was terrified of forgetting something.",
  "Every monitoring appointment changed the plan.",
  "I had reminders everywhere and still worried I'd miss a dose.",
  "The logistics became almost as exhausting as the treatment.",
];

export function CommunityReality() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
      <Reveal>
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">Common ground</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-plum sm:text-4xl">
          You're not the only one who feels this way.
        </h2>
      </Reveal>
      <div className="mt-12 space-y-6">
        {VOICES.map((v, i) => (
          <Reveal key={v} delay={i * 80}>
            <blockquote className="font-display text-xl leading-snug text-plum/85 sm:text-2xl">
              &ldquo;{v}&rdquo;
            </blockquote>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <p className="mt-14 font-display text-2xl leading-snug text-plum sm:text-3xl">
          IVF is already overwhelming. Keeping it organized shouldn't be.
        </p>
        <p className="mt-3 text-sm text-muted">
          Themes patients often describe publicly. Not attributed quotes. Not endorsements.
        </p>
      </Reveal>
    </section>
  );
}
