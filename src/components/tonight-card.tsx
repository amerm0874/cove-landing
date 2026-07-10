import { useEffect, useState } from "react";
import { Check, Bell, ShieldCheck } from "lucide-react";

type Med = { name: string; dose: string; time: string; note?: string; done?: boolean };

const DEFAULT_MEDS: Med[] = [
  { name: "Gonal-F", dose: "225 IU", time: "8:00 PM", done: true },
  { name: "Menopur", dose: "75 IU", time: "8:00 PM", note: "Reminder in 30 min" },
  { name: "Cetrotide", dose: "0.25 mg", time: "7:00 AM tomorrow" },
];

export function TonightCard({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [tickedFirst, setTickedFirst] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setTickedFirst(true), 1400);
    return () => clearTimeout(t);
  }, []);

  const isDark = variant === "dark";
  const surface = isDark ? "bg-plum-soft text-blush border-white/10" : "bg-white text-plum border-line";
  const mutedTxt = isDark ? "text-blush/60" : "text-muted";
  const ringIdle = isDark ? "border-blush/30" : "border-plum/25";

  return (
    <div className={`relative rounded-[28px] border ${surface} p-7 shadow-[0_30px_80px_-40px_rgba(43,30,40,0.35),0_2px_0_rgba(0,0,0,0.02)] sm:p-9`}>
      {/* Floating "clinic updated" chip */}
      <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full border border-sage/40 bg-sage-soft px-3 py-1.5 font-mono-tnum text-[10px] uppercase tracking-widest text-sage-deep shadow-sm">
        <ShieldCheck className="h-3 w-3" strokeWidth={2.5} aria-hidden />
        Clinic updated · Verified
      </div>

      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 font-mono-tnum text-[11px] uppercase tracking-widest text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Tonight · 8:00&nbsp;PM
        </span>
        <span className={`font-mono-tnum text-[11px] uppercase tracking-widest ${mutedTxt}`}>Day 6 of stims</span>
      </div>

      <div className="mt-5">
        <h3 className="font-display text-2xl font-semibold sm:text-3xl">Tonight's lineup</h3>
        <p className={`mt-1 text-sm ${mutedTxt}`}>3 medications · verified against your clinic sheet</p>
      </div>

      <ul className="mt-5 divide-y divide-line/60">
        {DEFAULT_MEDS.map((med, i) => {
          const done = i === 0 ? tickedFirst : med.done;
          return (
            <li
              key={med.name}
              className="row-in flex items-start gap-4 py-4"
              style={{ animationDelay: `${200 + i * 220}ms` }}
            >
              <span
                className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${done ? "border-sage bg-sage-soft ring-tick" : ringIdle}`}
              >
                {done && <Check aria-hidden className="h-4 w-4 text-sage-deep" strokeWidth={3} />}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-semibold text-base sm:text-lg">{med.name}</div>
                  <div className="shrink-0 font-mono-tnum text-sm text-gold">{med.time}</div>
                </div>
                <div className="mt-0.5 font-mono-tnum text-sm">{med.dose}</div>
                {med.note && (
                  <div className="mt-1 inline-flex items-center gap-1.5 font-mono-tnum text-[10px] uppercase tracking-widest text-rose">
                    <Bell className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                    {med.note}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>

      {/* Activity feed */}
      <div className="mt-5 space-y-2 rounded-2xl bg-blush/70 p-4">
        <ActivityRow color="sage" label="Dose changed after monitoring" detail="Gonal-F 150 → 225 IU · 2h ago" />
        <ActivityRow color="gold" label="Trigger shot scheduled" detail="Ovidrel · Thu 10:30 PM" />
      </div>

      <div className={`mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-line/60 pt-4 font-mono-tnum text-[11px] uppercase tracking-widest ${mutedTxt}`}>
        <span>Encrypted · synced securely</span>
        <span>Cove Fertility Clinic</span>
      </div>
    </div>
  );
}

function ActivityRow({ color, label, detail }: { color: "sage" | "gold"; label: string; detail: string }) {
  const dot = color === "sage" ? "bg-sage-deep" : "bg-gold";
  return (
    <div className="flex items-start gap-3">
      <span aria-hidden className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
      <div className="flex-1 text-sm">
        <span className="font-medium text-plum">{label}</span>
        <span className="mx-1.5 text-muted">·</span>
        <span className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">{detail}</span>
      </div>
    </div>
  );
}
