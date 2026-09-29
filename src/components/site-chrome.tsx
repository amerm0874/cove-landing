import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import coveLogo from "@/assets/cove-logo.png";
import { CONTACT_EMAIL } from "@/lib/constants";
import { useLocale, useT } from "@/i18n";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { LanguageSwitcher } from "@/components/language-switcher";

/** Optional locale route param — undefined for English so the prefix is dropped. */
function useLocaleParams() {
  const locale = useLocale();
  return { locale: locale === DEFAULT_LOCALE ? undefined : locale } as { locale: string | undefined };
}

export function SocialIcons({ size = "sm", labeled = false }: { size?: "sm" | "lg"; labeled?: boolean }) {
  const t = useT();
  const dim = size === "lg" ? "h-12 w-12 text-xl" : "h-9 w-9 text-base";
  const items = [
    { href: "https://www.instagram.com/cove_appp/", label: t.social.instagram, Icon: FaInstagram, external: true },
    { href: "https://www.tiktok.com/@cove_app?is_from_webapp=1&sender_device=pc", label: t.social.tiktok, Icon: SiTiktok, external: true },
    { href: `mailto:${CONTACT_EMAIL}`, label: t.social.email, Icon: FaEnvelope, external: false },
  ];
  return (
    <div className={`flex items-center gap-3 ${labeled ? "flex-col sm:flex-row" : ""}`}>
      {labeled && <span className="font-mono-tnum text-xs uppercase tracking-widest text-muted">{t.common.followAlong}</span>}
      <div className="flex items-center gap-2">
        {items.map(({ href, label, Icon, external }) => (
          <a
            key={href}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
  const t = useT();
  const localeParams = useLocaleParams();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  const hashNav = [
    { hash: "how-it-works", label: t.nav.howItWorks },
    { hash: "timeline", label: t.nav.timeline },
    { hash: "privacy", label: t.nav.privacy },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-blush/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/{-$locale}" params={localeParams} className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={coveLogo} alt="" aria-hidden className="h-8 w-auto" />
          <span className="font-display text-2xl font-semibold text-plum">{t.common.brand}</span>
        </Link>

        <nav aria-label={t.nav.primary} className="hidden lg:flex items-center gap-7">
          <Link to="/{-$locale}/features" params={localeParams} className="text-sm text-plum/80 hover:text-rose transition-colors">
            {t.nav.features}
          </Link>
          {hashNav.map((n) => (
            <Link key={n.hash} to="/{-$locale}" params={localeParams} hash={n.hash} className="text-sm text-plum/80 hover:text-rose transition-colors">
              {n.label}
            </Link>
          ))}
          <Link to="/{-$locale}/blog" params={localeParams} className="text-sm text-plum/80 hover:text-rose transition-colors">
            {t.nav.blog}
          </Link>
          <Link to="/{-$locale}/faq" params={localeParams} className="text-sm text-plum/80 hover:text-rose transition-colors">
            {t.nav.faq}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <Link
            to="/{-$locale}"
            params={localeParams}
            hash="download"
            className="rounded-full bg-rose px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-rose-deep focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
          >
            {t.common.download}
          </Link>
          <button
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-petal/60 text-plum lg:hidden focus-visible:outline-2 focus-visible:outline-rose focus-visible:outline-offset-2"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line/70 bg-blush/95 backdrop-blur">
          <nav aria-label={t.nav.mobile} className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            <Link to="/{-$locale}/features" params={localeParams} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base text-plum hover:bg-petal/70">
              {t.nav.features}
            </Link>
            {hashNav.map((n) => (
              <Link key={n.hash} to="/{-$locale}" params={localeParams} hash={n.hash} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base text-plum hover:bg-petal/70">
                {n.label}
              </Link>
            ))}
            <Link to="/{-$locale}/blog" params={localeParams} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base text-plum hover:bg-petal/70">
              {t.nav.blog}
            </Link>
            <Link to="/{-$locale}/faq" params={localeParams} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base text-plum hover:bg-petal/70">
              {t.nav.faq}
            </Link>
            <div className="mt-3 px-3">
              <LanguageSwitcher align="start" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const t = useT();
  const localeParams = useLocaleParams();
  return (
    <footer className="relative z-10 mt-24 border-t border-line/70 bg-blush/60">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <img src={coveLogo} alt="" aria-hidden className="h-7 w-auto" />
              <span className="font-display text-xl font-semibold">{t.common.brand}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{t.footer.disclaimer}</p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/{-$locale}/features" params={localeParams} className="text-plum hover:text-rose">{t.nav.features}</Link>
              <Link to="/{-$locale}/blog" params={localeParams} className="text-plum hover:text-rose">{t.nav.blog}</Link>
              <Link to="/{-$locale}/faq" params={localeParams} className="text-plum hover:text-rose">{t.nav.faq}</Link>
              <Link to="/{-$locale}/support" params={localeParams} className="text-plum hover:text-rose">{t.nav.support}</Link>
              <Link to="/{-$locale}/privacy" params={localeParams} className="text-plum hover:text-rose">{t.nav.privacy}</Link>
              <Link to="/{-$locale}/terms" params={localeParams} className="text-plum hover:text-rose">{t.nav.terms}</Link>
              <Link to="/{-$locale}/delete-account" params={localeParams} className="text-plum hover:text-rose">{t.nav.deleteAccount}</Link>
              <Link to="/{-$locale}/affiliate" params={localeParams} className="text-plum hover:text-rose">{t.nav.affiliate}</Link>
              <a href="mailto:coveivf@gmail.com" className="text-plum hover:text-rose">{t.nav.contact}</a>
            </nav>
            <SocialIcons labeled />
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-line/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <LanguageSwitcher align="start" />
          <div className="flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:gap-6">
            <span>{t.footer.copyright}</span>
            <span className="font-mono-tnum">{t.footer.tagline}</span>
          </div>
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
