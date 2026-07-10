import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { BackgroundBlobs, Footer, Header, SocialIcons } from "@/components/site-chrome";
import { FaqList } from "./index";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — Cove IVF" },
      { name: "description", content: "Get help with Cove IVF. Contact support, FAQs, and account controls." },
      { property: "og:title", content: "Support — Cove IVF" },
      { property: "og:description", content: "Questions, feedback, or trouble with the app? We read every message." },
    ],
  }),
  component: Support,
});

const SUPPORT_EMAIL = "coveivf@gmail.com";

const FAQ = [
  { q: "Is this medical advice?", a: "No. Cove is an organizer. It never suggests, adjusts, or interprets doses, and never predicts outcomes. Your clinic decides everything medical." },
  { q: "What happens to my scan?", a: "It's processed to read your schedule, then discarded. Your schedule is stored encrypted, in transit and at rest." },
  { q: "Is it iPhone only?", a: "Yes, at launch." },
  { q: "How do I delete my data?", a: "Open Settings in the app and tap Delete everything. It's immediate and permanent." },
  { q: "The scanner misread my sheet — what do I do?", a: "You can edit any value by hand, or retake the photo. Always confirm against your clinic's sheet." },
  { q: "How do I restore my purchase?", a: "On a new device, open the app and tap Restore purchase in Settings." },
];

function Support() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-4xl px-5 pt-14 pb-20 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">Help &amp; contact</p>
        <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Cove IVF Support</h1>
        <p className="mt-5 max-w-2xl text-lg text-plum/80">
          Questions, feedback, or trouble with the app? We read every message.
        </p>

        <ContactCard />
        <ContactForm />

        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold">Frequently asked</h2>
          <div className="mt-6"><FaqList items={FAQ} /></div>
        </section>

        <section className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-line bg-petal/50 p-6">
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-plum hover:text-rose">Privacy Policy</a>
            <a href="/terms" className="text-plum hover:text-rose">Terms</a>
          </div>
          <SocialIcons labeled />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ContactCard() {
  return (
    <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-line bg-petal p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <div className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">Email</div>
        <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-2 block font-display text-2xl font-semibold text-plum hover:text-rose">
          {SUPPORT_EMAIL}
        </a>
      </div>
      <a
        href={`mailto:${SUPPORT_EMAIL}`}
        className="inline-flex items-center gap-2 self-start rounded-full bg-rose px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-deep sm:self-auto"
      >
        <Mail className="h-4 w-4" aria-hidden />
        Email us
      </a>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Cove support — ${name || "message"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-2xl border border-line bg-blush/70 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-plum">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-plum">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm">
        <span className="font-semibold text-plum">Message</span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="rounded-lg border border-line bg-white px-4 py-2.5 focus:border-rose focus:outline-none"
        />
      </label>
      <div>
        {/* TODO: wire this to a real form backend (Resend, Formspree, etc.). */}
        <button
          type="submit"
          className="rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-deep"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
