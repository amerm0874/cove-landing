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
  Table,
} from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { IPhoneScreenshot } from "@/components/iphone-frame";
import { useT } from "@/i18n";
import injectionsScreen from "@/assets/app/injections.png";
import stagesScreen from "@/assets/app/stages.png";
import scanSheetScreen from "@/assets/app/scan-sheet.png";
import verifyScanScreen from "@/assets/app/verify-scan.png";
import triggerScreen from "@/assets/app/trigger-takeover.png";

/* ---------- Life during IVF (situations, not testimonials) ---------- */

export function LifeDuringIVF() {
  const t = useT();
  const life = t.chapters.life;

  // Moments come from the dictionary; snippet values that are drug names / dose
  // numbers stay verbatim, while meaningful labels come from the dictionary.
  const snippets: ReactNode[] = [
    (
      <div className="font-mono-tnum text-sm">
        <span className="line-through text-muted">150 IU</span>
        <span className="mx-2 text-rose">→</span>
        <span className="rounded-md bg-sage-soft px-2 py-0.5 text-sage-deep">225 IU</span>
      </div>
    ),
    <div className="font-mono-tnum text-sm text-plum/80">Gonal-F · Menopur · Cetrotide</div>,
    <div className="font-mono-tnum text-sm text-seafoam-deep">{life.snippetMonitoring}</div>,
    <div className="font-mono-tnum text-sm text-rose">{life.snippetTrigger}</div>,
    <div className="font-mono-tnum text-sm text-plum/80">1. Menopur · 2. Gonal-F</div>,
    <div className="font-mono-tnum text-sm text-gold">{life.snippetPending}</div>,
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-plum sm:text-5xl">
          {life.heading}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-plum/75">{life.body}</p>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {life.situations.map((moment, i) => (
          <Reveal key={moment} delay={i * 60}>
            <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white/70 p-6 backdrop-blur-sm">
              <p className="font-display text-lg font-semibold leading-snug text-plum">{moment}</p>
              <div className="mt-6 border-t border-line/70 pt-4">{snippets[i]}</div>
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
  media: ReactNode;
  reverse?: boolean;
  id?: string;
}) {
  const t = useT();
  return (
    <section id={id} className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 py-24 sm:px-8">
      <div className={`grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <Reveal>
          <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-rose">
            {t.chapters.chapterLabel} {n} · {eyebrow}
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

export function ChapterMedication() {
  const c = useT().chapters.medication;
  return (
    <Chapter
      id="how-it-works"
      n="01"
      eyebrow={c.eyebrow}
      headline={c.headline}
      body={c.body}
      media={<img src={injectionsScreen} alt={c.alt} className="mx-auto w-full max-w-[300px]" width={763} height={1652} loading="lazy" decoding="async" />}
    />
  );
}

export function ChapterScanner() {
  const c = useT().chapters.scanner;
  return (
    <Chapter n="02" eyebrow={c.eyebrow} headline={c.headline} body={c.body} media={<IPhoneScreenshot src={scanSheetScreen} alt={c.alt} />} reverse />
  );
}

export function ChapterVerification() {
  const c = useT().chapters.verification;
  return (
    <Chapter n="03" eyebrow={c.eyebrow} headline={c.headline} body={c.body} media={<IPhoneScreenshot src={verifyScanScreen} alt={c.alt} />} />
  );
}

export function ChapterTrigger() {
  const c = useT().chapters.trigger;
  return (
    <Chapter n="04" eyebrow={c.eyebrow} headline={c.headline} body={c.body} media={<IPhoneScreenshot src={triggerScreen} alt={c.alt} />} reverse />
  );
}

export function ChapterTimeline() {
  const c = useT().chapters.timeline;
  return (
    <Chapter
      id="timeline"
      n="05"
      eyebrow={c.eyebrow}
      headline={c.headline}
      body={c.body}
      media={<img src={stagesScreen} alt={c.alt} className="mx-auto w-full max-w-[300px]" width={763} height={1652} loading="lazy" decoding="async" />}
    />
  );
}

/* ------------------- Without Cove / With Cove ------------------- */

export function WithoutWithCove() {
  const w = useT().chapters.withoutWith;
  const messyIcons = [Table, FileText, File, AppWindow, Calendar, AlarmClock, MessageCircle, Image, HelpCircle];
  const messy = w.messy.map((text, i) => ({ text, Icon: messyIcons[i] ?? HelpCircle }));

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush via-petal/60 to-blush py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{w.eyebrow}</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-plum sm:text-5xl md:text-6xl">
              {w.heading}
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="h-full rounded-[32px] border border-line bg-white/80 p-8 shadow-sm backdrop-blur-sm sm:p-10">
              <div className="font-mono-tnum text-[10px] uppercase tracking-widest text-muted">{w.withoutLabel}</div>
              <div className="mt-2 font-display text-3xl font-semibold text-plum/70 sm:text-4xl">{w.withoutTitle}</div>
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
                <ArrowRight className="h-7 w-7 text-rose rtl:-scale-x-100" />
              </div>
              <div className="font-mono-tnum text-[10px] uppercase tracking-widest text-sage-deep">{w.withLabel}</div>
              <div className="mt-2 font-display text-3xl font-semibold text-plum sm:text-4xl">{w.withTitle}</div>
              <ul className="mt-8 space-y-4">
                {w.calm.map((c) => (
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

export function CommunityReality() {
  const c = useT().chapters.community;
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
      <Reveal>
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{c.eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-plum sm:text-4xl">{c.heading}</h2>
      </Reveal>
      <div className="mt-12 space-y-6">
        {c.voices.map((v, i) => (
          <Reveal key={v} delay={i * 80}>
            <blockquote className="font-display text-xl leading-snug text-plum/85 sm:text-2xl">
              &ldquo;{v}&rdquo;
            </blockquote>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <p className="mt-14 font-display text-2xl leading-snug text-plum sm:text-3xl">{c.closing}</p>
        <p className="mt-3 text-sm text-muted">{c.note}</p>
      </Reveal>
    </section>
  );
}
