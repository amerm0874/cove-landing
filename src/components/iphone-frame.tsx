import type { ReactNode } from "react";

/**
 * Modern iPhone device frame — vector/CSS only, no images.
 * Thin uniform bezel, Dynamic Island, and a soft realistic drop shadow.
 * Scales responsively; scales down cleanly on small screens.
 */
export function IPhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-[340px] ${className}`}>
      {/* Side buttons (subtle) */}
      <span aria-hidden className="absolute -left-[2px] top-[22%] h-10 w-[2px] rounded-l-sm bg-plum/70" />
      <span aria-hidden className="absolute -left-[2px] top-[32%] h-16 w-[2px] rounded-l-sm bg-plum/70" />
      <span aria-hidden className="absolute -right-[2px] top-[26%] h-20 w-[2px] rounded-r-sm bg-plum/70" />

      {/* Outer bezel — thin, uniform, matte dark */}
      <div
        className="relative rounded-[44px] p-[6px]
        bg-gradient-to-b from-[#1c1319] via-[#241820] to-[#1c1319]
        shadow-[0_2px_0_rgba(255,255,255,0.04)_inset,0_30px_60px_-25px_rgba(43,30,40,0.35),0_10px_25px_-15px_rgba(43,30,40,0.25)]"
        style={{ aspectRatio: "9 / 19.5" }}
      >
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-blush">
          {/* Status bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-2.5 font-mono-tnum text-[10px] text-plum/70">
            <span>9:41</span>
            <span aria-hidden className="flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-plum/50" />
              <span className="inline-block h-2 w-3 rounded-[2px] border border-plum/40" />
            </span>
          </div>
          {/* Dynamic Island (pill) */}
          <div className="pointer-events-none absolute left-1/2 top-2 z-30 -translate-x-1/2">
            <div className="h-[26px] w-[100px] rounded-full bg-black" />
          </div>
          {/* Content */}
          <div className="relative z-10 h-full overflow-hidden px-4 pb-4 pt-10">{children}</div>
        </div>
      </div>
    </div>
  );
}

/** iPhone lock-screen frame — used for discreet notification demo. */
export function IPhoneLockScreen({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <span aria-hidden className="absolute -left-[2px] top-[22%] h-10 w-[2px] rounded-l-sm bg-plum/70" />
      <span aria-hidden className="absolute -left-[2px] top-[32%] h-16 w-[2px] rounded-l-sm bg-plum/70" />
      <span aria-hidden className="absolute -right-[2px] top-[26%] h-20 w-[2px] rounded-r-sm bg-plum/70" />
      <div
        className="relative rounded-[44px] p-[6px]
        bg-gradient-to-b from-[#1c1319] via-[#241820] to-[#1c1319]
        shadow-[0_2px_0_rgba(255,255,255,0.04)_inset,0_30px_60px_-25px_rgba(43,30,40,0.4),0_10px_25px_-15px_rgba(43,30,40,0.3)]"
        style={{ aspectRatio: "9 / 19.5" }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-gradient-to-b from-plum via-plum-soft to-[#4a2f3d]">
          <div className="pointer-events-none absolute left-1/2 top-2 z-30 -translate-x-1/2">
            <div className="h-[26px] w-[100px] rounded-full bg-black" />
          </div>
          {/* Status bar */}
          <div className="relative z-10 flex items-center justify-between px-6 pt-3 font-mono-tnum text-[10px] text-blush/70">
            <span>9:47</span>
            <span>•••</span>
          </div>
          {/* Time */}
          <div className="relative z-10 pt-4 text-center text-blush">
            <div className="font-mono-tnum text-xs opacity-70">Thursday, October 24</div>
            <div className="font-display text-6xl font-semibold tracking-tight">9:47</div>
          </div>
          {/* Notification slot */}
          <div className="relative z-10 px-4 pb-8 pt-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- PLACEHOLDER in-phone screens ----------
 * Kept intentionally simple and swap-ready. Each screen is a small,
 * self-contained component; replace with a real screenshot <img /> later.
 */

function ScreenChrome({ title, day }: { title: string; day: string }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="font-mono-tnum text-[9px] uppercase tracking-widest text-muted">{day}</div>
        <div className="font-display text-lg font-semibold text-plum">{title}</div>
      </div>
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-line bg-petal/70 font-mono-tnum text-[10px] text-plum">C</span>
    </div>
  );
}

// PLACEHOLDER app screen — replace with real screenshot after app build.
export function PlaceholderScanScreen() {
  return (
    <div className="flex h-full flex-col">
      <ScreenChrome day="Step 02 · Scan" title="Protocol scan" />
      <div className="mt-3 rounded-2xl border border-line bg-white/90 p-3">
        <div className="rounded-xl border border-dashed border-rose/40 bg-petal/40 p-3">
          <div className="font-mono-tnum text-[9px] uppercase tracking-widest text-rose">Clinic sheet · captured</div>
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded bg-plum/15" />
            <div className="h-1.5 w-2/3 rounded bg-plum/15" />
            <div className="h-1.5 w-1/2 rounded bg-plum/15" />
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {[
          ["Gonal-F", "225 IU"],
          ["Menopur", "75 IU"],
          ["Cetrotide", "0.25 mg"],
        ].map(([n, d]) => (
          <div key={n} className="flex items-center justify-between rounded-xl border border-line bg-white px-3 py-2">
            <span className="text-sm font-semibold text-plum">{n}</span>
            <span className="font-mono-tnum text-xs text-plum/80">{d}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between rounded-xl bg-sage-soft px-3 py-2 font-mono-tnum text-[10px] uppercase tracking-widest text-sage-deep">
        <span>Plan verified</span>
        <span>3 meds</span>
      </div>
    </div>
  );
}

// PLACEHOLDER app screen — replace with real screenshot after app build.
export function PlaceholderVerifyScreen() {
  return (
    <div className="flex h-full flex-col">
      <ScreenChrome day="Day 6 · Stims" title="Dose updated" />
      <div className="mt-3 rounded-2xl border border-sage/40 bg-sage-soft/60 p-3">
        <div className="font-mono-tnum text-[9px] uppercase tracking-widest text-sage-deep">Clinic update · verified</div>
        <div className="mt-2 flex items-baseline gap-3">
          <span className="font-mono-tnum text-sm text-muted line-through">150 IU</span>
          <span className="font-mono-tnum text-lg font-semibold text-plum">225 IU</span>
        </div>
        <div className="mt-1 text-xs text-plum/70">Gonal-F · tonight, 8:00 PM</div>
      </div>
      <div className="mt-3 space-y-2">
        <div className="rounded-xl border border-line bg-white px-3 py-2 text-xs text-plum/75">
          Updated on tonight's card
        </div>
        <div className="rounded-xl border border-line bg-white px-3 py-2 text-xs text-plum/75">
          Updated on tomorrow's reminder
        </div>
        <div className="rounded-xl border border-line bg-white px-3 py-2 text-xs text-plum/75">
          Logged in your cycle history
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between font-mono-tnum text-[10px] uppercase tracking-widest text-muted">
        <span>Encrypted</span>
        <span>Cove Fertility Clinic</span>
      </div>
    </div>
  );
}

