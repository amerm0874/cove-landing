import { createFileRoute } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Cove IVF" },
      { name: "description", content: "How Cove IVF collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy — Cove IVF" },
      { property: "og:description", content: "Plain-language privacy policy for the Cove IVF app and website." },
    ],
  }),
  component: Privacy,
});

const CONTACT = "coveivf@gmail.com";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 font-display text-2xl font-semibold text-plum sm:text-3xl">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-6 font-display text-lg font-semibold text-plum">{children}</h3>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-plum/85">{children}</p>;
}
function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mt-3 list-disc space-y-2 pl-5 text-plum/85">{children}</ul>;
}

function Privacy() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 font-mono-tnum text-sm text-muted">Last updated: [DATE]</p>

        <div className="mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-5 text-sm text-plum/85">
          <strong>Draft.</strong> This is a plain-language draft that reflects how Cove is being built. It is not legal advice and is being reviewed by a privacy attorney before launch.
        </div>

        <H2>The short version</H2>
        <P>
          Cove helps you organize an IVF cycle. Your health information is yours. We do not sell it, we do not share it with advertisers, and we give you a way to delete it permanently at any time. This policy explains what we collect, why, and the choices you have.
        </P>

        <H2>Who we are</H2>
        <P>
          Cove IVF ("Cove," "we," "us") provides an iOS app and this website. If you have any privacy question, contact us at <a className="text-rose hover:underline" href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </P>

        <H2>What we collect</H2>
        <H3>Information you give us</H3>
        <UL>
          <li><strong>Account information:</strong> when you create an account, we use Sign in with Apple or an email address. If you use Sign in with Apple, you can choose to hide your email.</li>
          <li><strong>Waitlist information:</strong> if you join our waitlist, we collect your email address and, optionally, a social media handle you choose to provide.</li>
          <li><strong>Health and cycle information you enter:</strong> medication schedules, doses and times, appointments, and the monitoring or lab results you choose to log. You provide this; we store it so the app can show it back to you and remind you.</li>
        </UL>

        <H3>Information from your protocol-sheet photo (the scan feature)</H3>
        <P>
          When you photograph a protocol sheet, the image is sent to our secure processing service solely to read the medication schedule from it, and is not retained by us after processing. Before the image is sent, you are prompted to obscure identifying details. We do not use your images to train any model.
        </P>

        <H3>Information collected automatically</H3>
        <UL>
          <li><strong>App analytics:</strong> we use a privacy-focused analytics tool to understand how the app is used (for example, whether onboarding was completed). It is configured not to collect your health data and not to identify you personally.</li>
          <li><strong>Basic technical/website data:</strong> standard server and device information needed to operate and secure the service.</li>
        </UL>

        <H2>What we do NOT do</H2>
        <UL>
          <li>We do not sell your personal or health information.</li>
          <li>We do not share your health information with advertisers, data brokers, or social platforms.</li>
          <li>We do not put third-party advertising trackers inside the app.</li>
          <li>We do not use your health information to target ads.</li>
        </UL>

        <H2>How we use your information</H2>
        <UL>
          <li>To provide the app: build your schedule, send your reminders, store and display what you log.</li>
          <li>To operate, secure, and improve the service.</li>
          <li>To contact you about the product (for example, a waitlist launch email). You can opt out of non-essential messages.</li>
        </UL>
        <P>We do not use your information for any purpose incompatible with these.</P>

        <H2>How your information is stored and protected</H2>
        <P>
          Your data is stored with our cloud provider (Supabase) and is encrypted in transit and at rest. Access is restricted so that your data is available only to your account. No method of storage is perfectly secure, but we design the product to keep your information private and under your control.
        </P>

        <H2>Your choices and rights</H2>
        <UL>
          <li><strong>Delete everything:</strong> you can permanently delete your account and associated health data from within the app at any time. Deletion is immediate and permanent.</li>
          <li><strong>Access and correction:</strong> you can view and edit your information in the app.</li>
          <li><strong>Communications:</strong> you can opt out of non-essential emails.</li>
        </UL>
        <P>
          Depending on where you live, you may have additional rights (for example, under California or Washington law) to access, delete, or restrict use of your information. To exercise these, contact <a className="text-rose hover:underline" href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </P>

        <H2>Data retention</H2>
        <P>
          We keep your information for as long as your account is active. When you delete your account, we permanently delete your associated health data. Protocol-sheet images are not retained after processing.
        </P>

        <H2>Sharing with service providers</H2>
        <P>
          We use a small number of service providers to run Cove — for example, cloud hosting (Supabase), app-purchase processing (Apple / RevenueCat), and privacy-focused analytics. They may process information only to provide their service to us, under contract, and not for their own purposes. We do not sell or rent your information to anyone.
        </P>

        <H2>Children</H2>
        <P>Cove is intended for adults undergoing fertility treatment and is not directed to children under 16. We do not knowingly collect information from children.</P>

        <H2>Changes to this policy</H2>
        <P>If we change this policy, we will update the date above and, for material changes, notify you.</P>

        <H2>Contact</H2>
        <P>Questions about privacy: <a className="text-rose hover:underline" href={`mailto:${CONTACT}`}>{CONTACT}</a>.</P>
      </main>
      <Footer />
    </div>
  );
}
