import { Camera, Check, Bell, Syringe, CalendarClock, RefreshCw, Stethoscope, FlaskConical, CalendarDays } from "lucide-react";

/* --------------------------- 01 · Scan ---------------------------- */
export function ScanMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-plum p-5 text-blush">
      <div className="flex items-center justify-between font-mono-tnum text-[10px] uppercase tracking-widest text-blush/60">
        <span className="inline-flex items-center gap-1.5"><Camera className="h-3 w-3" strokeWidth={2.5} aria-hidden /> Scan protocol</span>
        <span>Cover your name</span>
      </div>
      <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-xl bg-blush text-plum">
        {/* Corner brackets */}
        <span className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-rose" />
        <span className="absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-rose" />
        <span className="absolute left-2 bottom-2 h-4 w-4 border-l-2 border-b-2 border-rose" />
        <span className="absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 border-rose" />
        <div className="p-4">
          <div className="font-mono-tnum text-[9px] uppercase tracking-widest text-muted">Cove Fertility Clinic</div>
          <div className="mt-1 font-display text-sm font-semibold">IVF Stimulation Protocol</div>
          <div className="mt-3 space-y-1.5 font-mono-tnum text-[10px] leading-relaxed text-plum/80">
            <div>D1–D5 · Gonal-F 225 IU · PM</div>
            <div>D1–D5 · Menopur 75 IU · PM</div>
            <div>D5+   · Cetrotide 0.25 mg · AM</div>
            <div>Trigger · Ovidrel · per monitoring</div>
          </div>
        </div>
        {/* scan line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-sage/70 shadow-[0_0_12px_var(--sage)] animate-[scan_2.8s_ease-in-out_infinite]" />
      </div>
      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-sage-soft px-2.5 py-1 font-mono-tnum text-[10px] uppercase tracking-widest text-sage-deep">
        <Check className="h-3 w-3" strokeWidth={3} aria-hidden /> 4 meds detected
      </div>
    </div>
  );
}

/* --------------------------- 02 · Verify -------------------------- */
export function VerifyMock() {
  const rows = [
    { name: "Gonal-F", sheet: "225 IU", cove: "225 IU", ok: true },
    { name: "Menopur", sheet: "75 IU", cove: "75 IU", ok: true },
    { name: "Cetrotide", sheet: "0.25 mg", cove: "0.25 mg", ok: true },
  ];
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <div className="flex items-center justify-between font-mono-tnum text-[10px] uppercase tracking-widest text-muted">
        <span>Clinic sheet</span>
        <span>Cove</span>
      </div>
      <ul className="mt-3 divide-y divide-line/60">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center gap-3 py-3 text-sm">
            <span className="w-24 truncate font-semibold text-plum">{r.name}</span>
            <span className="font-mono-tnum text-plum/70">{r.sheet}</span>
            <span aria-hidden className="mx-auto text-muted">→</span>
            <span className="font-mono-tnum text-plum">{r.cove}</span>
            <span className="ml-2 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-sage bg-sage-soft">
              <Check className="h-3 w-3 text-sage-deep" strokeWidth={3} aria-hidden />
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-between font-mono-tnum text-[10px] uppercase tracking-widest">
        <span className="text-muted">You confirm every value</span>
        <span className="text-sage-deep">All match</span>
      </div>
    </div>
  );
}

/* -------------------- 03 · Tonight (mini card) -------------------- */
export function TonightMiniMock() {
  const meds = [
    { name: "Gonal-F", dose: "225 IU", done: true },
    { name: "Menopur", dose: "75 IU", done: false },
    { name: "Cetrotide", dose: "0.25 mg", done: false },
  ];
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-2.5 py-1 font-mono-tnum text-[10px] uppercase tracking-widest text-gold">
          <span className="h-1 w-1 rounded-full bg-gold" /> Tonight · 8:00 PM
        </span>
        <span className="font-mono-tnum text-[10px] uppercase tracking-widest text-muted">Day 6</span>
      </div>
      <ul className="mt-4 space-y-3">
        {meds.map((m) => (
          <li key={m.name} className="flex items-center gap-3 text-sm">
            <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full border-2 ${m.done ? "border-sage bg-sage-soft" : "border-plum/25"}`}>
              {m.done && <Check className="h-3 w-3 text-sage-deep" strokeWidth={3} aria-hidden />}
            </span>
            <span className="flex-1 font-semibold text-plum">{m.name}</span>
            <span className="font-mono-tnum text-plum/80">{m.dose}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------- Lock-screen notification banner -------------------- */
export function NotificationMock() {
  return (
    <div className="rounded-2xl bg-white/12 backdrop-blur-md p-4 text-blush shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-3">
        <span aria-hidden className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose/90">
          <span className="h-2 w-2 rounded-full bg-blush" />
        </span>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold">Cove</span>
            <span className="font-mono-tnum text-[10px] text-blush/60">now</span>
          </div>
          <div className="mt-0.5 text-sm">
            <span className="font-semibold">Reminder in 30 minutes.</span>
            <span className="ml-1 text-blush/80">Tap to open Cove.</span>
          </div>
        </div>
      </div>
      <div className="mt-3 inline-flex items-center gap-1.5 font-mono-tnum text-[10px] uppercase tracking-widest text-blush/60">
        <Bell className="h-3 w-3" strokeWidth={2.5} aria-hidden />
        Never names your meds
      </div>
    </div>
  );
}

/* --------------------- Trigger shot confirmation ------------------- */
export function TriggerMock() {
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-soft px-2.5 py-1 font-mono-tnum text-[10px] uppercase tracking-widest text-sage-deep">
          <Check className="h-3 w-3" strokeWidth={3} aria-hidden /> Trigger shot · Confirmed
        </span>
        <span className="font-mono-tnum text-[10px] uppercase tracking-widest text-muted">Thu 10:30 PM</span>
      </div>
      <div className="mt-4 flex items-start gap-3">
        <span aria-hidden className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-rose/40 bg-rose/10">
          <Syringe className="h-4 w-4 text-rose" strokeWidth={2} aria-hidden />
        </span>
        <div>
          <div className="font-display text-lg font-semibold text-plum">Ovidrel · 250 mcg</div>
          <div className="mt-0.5 text-sm text-plum/70">Set 36 hours before retrieval. Cove will remind you 30 min before.</div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 border-t border-line/60 pt-3 font-mono-tnum text-[10px] uppercase tracking-widest text-muted">
        <CalendarClock className="h-3 w-3" aria-hidden />
        Retrieval · Sat 8:30 AM
      </div>
    </div>
  );
}

/* --------------------- Clinic changed today's dose ------------------ */
export function DoseUpdateMock() {
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-rose/10 px-2.5 py-1 font-mono-tnum text-[10px] uppercase tracking-widest text-rose">
          <RefreshCw className="h-3 w-3" strokeWidth={2.5} aria-hidden /> Clinic update · Today
        </span>
        <span className="font-mono-tnum text-[10px] uppercase tracking-widest text-muted">2h ago</span>
      </div>
      <div className="mt-4 rounded-xl border border-line/70 p-4">
        <div className="font-semibold text-plum">Gonal-F</div>
        <div className="mt-2 flex items-center gap-3 font-mono-tnum text-sm">
          <span className="line-through text-muted">150 IU</span>
          <span aria-hidden className="text-rose">→</span>
          <span className="rounded-md bg-sage-soft px-2 py-0.5 text-sage-deep slide-in-soft">225 IU</span>
        </div>
        <div className="mt-3 text-xs text-plum/70">Tonight's card, tomorrow's reminder, and the log have all been updated.</div>
      </div>
    </div>
  );
}

/* --------------------- Monitoring visit --------------------- */
export function MonitoringMock() {
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-seafoam/20 px-2.5 py-1 font-mono-tnum text-[10px] uppercase tracking-widest text-seafoam-deep">
          <Stethoscope className="h-3 w-3" strokeWidth={2.5} aria-hidden /> Monitoring · Tomorrow
        </span>
        <span className="font-mono-tnum text-[10px] uppercase tracking-widest text-muted">7:15 AM</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-plum/85">
        <li className="flex items-center gap-2"><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-seafoam-deep" /> Bloodwork · estradiol, LH</li>
        <li className="flex items-center gap-2"><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-seafoam-deep" /> Transvaginal ultrasound</li>
        <li className="flex items-center gap-2"><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-seafoam-deep" /> Nurse call · afternoon</li>
      </ul>
      <div className="mt-3 border-t border-line/60 pt-3 font-mono-tnum text-[10px] uppercase tracking-widest text-muted">
        Bring: last night's log · water
      </div>
    </div>
  );
}

/* --------------------- Fertilization report --------------------- */
export function ResultsMock() {
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-2.5 py-1 font-mono-tnum text-[10px] uppercase tracking-widest text-gold">
          <FlaskConical className="h-3 w-3" strokeWidth={2.5} aria-hidden /> Day 1 report
        </span>
        <span className="font-mono-tnum text-[10px] uppercase tracking-widest text-muted">Sat 11:20 AM</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        {[
          { k: "Retrieved", v: "14" },
          { k: "Mature", v: "11" },
          { k: "Fertilized", v: "9" },
        ].map((c) => (
          <div key={c.k} className="rounded-xl bg-petal/50 p-3">
            <div className="font-display text-2xl font-semibold text-plum">{c.v}</div>
            <div className="mt-1 font-mono-tnum text-[10px] uppercase tracking-widest text-muted">{c.k}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-plum/70">Kept alongside your protocol notes. Nothing interpreted.</div>
    </div>
  );
}

/* --------------------- Timeline / where you are --------------------- */
export function TimelineMock() {
  const phases = [
    { k: "Stims", done: true },
    { k: "Trigger", done: true },
    { k: "Retrieval", done: false, current: true },
    { k: "Fert.", done: false },
    { k: "Transfer", done: false },
  ];
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-plum/8 px-2.5 py-1 font-mono-tnum text-[10px] uppercase tracking-widest text-plum">
          <CalendarDays className="h-3 w-3" strokeWidth={2.5} aria-hidden /> Cycle · Day 11
        </span>
        <span className="font-mono-tnum text-[10px] uppercase tracking-widest text-muted">Retrieval in 2 days</span>
      </div>
      <div className="mt-5 flex items-center gap-2">
        {phases.map((p, i) => (
          <div key={p.k} className="flex-1">
            <div className={`h-1.5 rounded-full ${p.done ? "bg-sage" : p.current ? "bg-rose pulse-soft" : "bg-line"}`} />
            <div className={`mt-2 font-mono-tnum text-[10px] uppercase tracking-widest ${p.current ? "text-rose" : "text-muted"}`}>
              {String(i + 1).padStart(2, "0")} · {p.k}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
