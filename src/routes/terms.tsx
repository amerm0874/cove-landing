import { createFileRoute } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Cove IVF" },
      { name: "description", content: "The terms that govern your use of the Cove IVF app and website." },
      { property: "og:title", content: "Terms of Service — Cove IVF" },
      { property: "og:description", content: "Cove IVF is an organizational tool, not a medical device. Read the terms." },
    ],
  }),
  component: Terms,
});

const CONTACT = "coveivf@gmail.com";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 font-display text-2xl font-semibold text-plum sm:text-3xl">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-plum/85">{children}</p>;
}
function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mt-3 list-disc space-y-2 pl-5 text-plum/85">{children}</ul>;
}

function Terms() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">Terms of Service</h1>
        <p className="mt-3 font-mono-tnum text-sm text-muted">Last updated: [DATE]</p>

        <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-5 text-sm text-plum/85">
          <strong>Draft.</strong> This is a plain-language draft. It is not legal advice and is being reviewed by an attorney before launch.
        </div>

        <H2>1. Agreement</H2>
        <P>These Terms govern your use of the Cove IVF app and website ("Cove," "we," "us"). By using Cove, you agree to these Terms. If you don't agree, don't use Cove.</P>

        <H2>2. What Cove is — and is not (please read this)</H2>
        <P><strong>Cove is an organizational tool, not a medical device.</strong> It does not provide medical advice, diagnosis, or treatment. Always follow your clinic's instructions.</P>
        <P>Cove helps you organize information you enter or that is read from your clinic's documents — medication schedules, reminders, appointments, and results you choose to log. Cove does not:</P>
        <UL>
          <li>recommend, prescribe, adjust, or verify any medication, dose, or timing;</li>
          <li>diagnose any condition or predict any outcome;</li>
          <li>replace your doctor, clinic, nurse, or pharmacist.</li>
        </UL>
        <P>Your clinic is always the source of truth. If anything in Cove differs from your clinic's instructions, follow your clinic and contact them. Do not rely on Cove for any medical decision. In an emergency, contact your clinic or emergency services.</P>

        <H2>3. The scan feature and accuracy</H2>
        <P>Cove can read a photo of your protocol sheet to help you build a schedule. This reading may contain errors. You are responsible for checking every value against your own clinic's sheet before relying on it, which is why Cove asks you to verify each value. Cove is not responsible for errors in reading, and confirming a value in Cove does not make it medically correct — only your clinic can do that.</P>

        <H2>4. Reminders</H2>
        <P>Cove can send reminders, including for time-sensitive medications. Reminders may fail for reasons outside our control (device settings, notification permissions, software issues, connectivity). Do not rely on Cove as your only reminder for any critical medication, including a trigger shot; we encourage you to set an independent backup (such as a phone alarm). Cove is not responsible for a missed or mistimed medication.</P>

        <H2>5. Your account</H2>
        <P>You're responsible for your account and for the accuracy of what you enter. Use Cove only for its intended personal purpose and in compliance with the law.</P>

        <H2>6. Purchases</H2>
        <P>Cove is sold as [a per-cycle pass / describe your model], processed through Apple's App Store (and RevenueCat). Prices, and what a purchase includes, are shown at the point of sale. Purchases are subject to Apple's terms; refunds are handled by Apple under their policies.</P>

        <H2>7. Your content</H2>
        <P>The information you enter is yours. You grant us only the limited permission needed to operate the service for you (store it, process it, show it back to you, send your reminders). We do not sell it or use it to advertise to you. See our Privacy Policy.</P>

        <H2>8. Acceptable use</H2>
        <P>Don't misuse Cove: no unlawful use, no attempts to break, overload, reverse-engineer, or gain unauthorized access to the service, and no use on behalf of someone else without their consent.</P>

        <H2>9. Availability</H2>
        <P>We aim to keep Cove working but don't guarantee it will always be available, uninterrupted, or error-free. We may change, suspend, or discontinue features.</P>

        <H2>10. Disclaimers</H2>
        <P>To the fullest extent permitted by law, Cove is provided "as is" and "as available," without warranties of any kind, express or implied, including fitness for a particular purpose. We do not warrant that Cove will be accurate, reliable, or error-free, or that reminders will always be delivered.</P>

        <H2>11. Limitation of liability</H2>
        <P>To the fullest extent permitted by law, Cove and its team will not be liable for any indirect, incidental, special, or consequential damages, or for any medical outcome, missed or mistimed medication, or decision made in reliance on Cove.</P>

        <H2>12. Changes to these Terms</H2>
        <P>We may update these Terms; we'll update the date above and, for material changes, provide notice. Continued use means you accept the updated Terms.</P>

        <H2>13. Governing law / disputes</H2>
        <P>These Terms are governed by the laws of [STATE/COUNTRY].</P>

        <H2>14. Contact</H2>
        <P>Questions about these Terms: <a className="text-rose hover:underline" href={`mailto:${CONTACT}`}>{CONTACT}</a>.</P>
      </main>
      <Footer />
    </div>
  );
}
