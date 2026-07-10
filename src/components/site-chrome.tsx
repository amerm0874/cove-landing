import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import coveLogo from "@/assets/cove-logo.png";

const NAV = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#faq", label: "FAQ" },
];

export function SocialIcons({ size = "sm", labeled = false }: { size?: "sm" | "lg"; labeled?: boolean }) {
  const dim = size === "lg" ? "h-12 w-12 text-xl" : "h-9 w-9 text-base";
  const items = [
    { href: "https://www.instagram.com/cove_appp/", label: "Cove on Instagram", Icon: FaInstagram },
    { href: "https://www.tiktok.com/@cove_app?is_from_webapp=1&sender_device=pc", label: "Cove on TikTok", Icon: SiTiktok },
  ];
  return (
    <div className={`flex items-center gap-3 ${labeled ? "flex-col sm:flex-row" : ""}`}>
      {labeled && <span className="font-mono-tnum text-xs uppercase tracking-widest text-muted">Follow along</span>}
      <div className="flex items-center gap-2">
        {items.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${dim} inline-flex items-center justify-center rounded-full border border-line bg-petal/60 text-plum transition-colors hover:bg-rose hover:text-white hover:border-rose focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2`}
          >
            <Icon aria-hidden />
          </a>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-blush/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={coveLogo} alt="" aria-hidden className="h-8 w-auto" />
          <span className="font-display text-2xl font-semibold text-plum">Cove</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-plum/80 hover:text-rose transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#waitlist"
            className="rounded-full bg-rose px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-rose-deep focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
          >
            Join the waitlist
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-petal/60 text-plum md:hidden focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line/70 bg-blush/95 backdrop-blur">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-plum hover:bg-petal/70"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-line/70 bg-blush/60">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <img src={coveLogo} alt="" aria-hidden className="h-7 w-auto" />
              <span className="font-display text-xl font-semibold">Cove</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Cove IVF is an organizational tool, not a medical device. It does not provide medical advice, diagnosis, or treatment. Always follow your clinic's instructions.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/support" className="text-plum hover:text-rose">Support</Link>
              <Link to="/privacy" className="text-plum hover:text-rose">Privacy</Link>
              <Link to="/terms" className="text-plum hover:text-rose">Terms</Link>
              <a href="mailto:coveivf@gmail.com" className="text-plum hover:text-rose">Contact</a>
            </nav>
            <SocialIcons labeled />
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-line/70 pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <span>© 2026 Cove IVF</span>
          <span className="font-mono-tnum">A calm harbor for your cycle.</span>
        </div>
      </div>
    </footer>
  );
}

export function BackgroundBlobs() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="blob blob-a" style={{ background: "var(--rose)", opacity: 0.28, width: 560, height: 560, top: -140, left: -100 }} />
        <div className="blob blob-b" style={{ background: "var(--petal)", opacity: 0.85, width: 640, height: 640, top: -80, right: -160 }} />
        <div className="blob blob-c" style={{ background: "var(--seafoam)", opacity: 0.22, width: 500, height: 500, top: 380, left: "35%" }} />
        <div className="blob blob-d" style={{ background: "var(--gold)", opacity: 0.18, width: 420, height: 420, top: 720, right: "8%" }} />
        <div className="blob blob-a" style={{ background: "var(--rose)", opacity: 0.12, width: 400, height: 400, top: 1300, left: -60 }} />
        <div className="blob blob-c" style={{ background: "var(--seafoam)", opacity: 0.14, width: 460, height: 460, top: 2100, right: "20%" }} />
      </div>
      <div aria-hidden className="grain-overlay" />
    </>
  );
}
