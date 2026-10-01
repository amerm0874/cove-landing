import { createFileRoute } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Cove IVF" },
      { name: "description", content: "How Cove IVF collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy — Cove IVF" },
      { property: "og:description", content: "Plain-language privacy policy for the Cove IVF app and website." },
    ],
    links: [{ rel: "canonical", href: "https://www.coveivf.life/privacy" }],
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
        <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 font-mono-tnum text-sm text-muted">Last updated: September 10, 2026</p>

        <H2>The short version</H2>
        <P>
          Cove helps you organize an IVF cycle. Your health information is yours. We do not sell it,
          we do not use it to target ads, and you can delete it — including uploaded lab PDFs —
          from Settings in the app. This policy explains what we collect, why, and the choices you have.
        </P>

        <H2>Who we are</H2>
        <P>
          Cove IVF ("Cove," "we," "us") provides an iOS app (and, where available, Android) and this
          website. Privacy questions:{" "}
          <a className="text-rose hover:underline" href={`mailto:${CONTACT}`}>
            {CONTACT}
          </a>
          .
        </P>

        <H2>What we collect</H2>
        <H3>Account information</H3>
        <P>
          You can create an account with Sign in with Apple, Google Sign-In, or email. Depending on
          the method, we receive an identifier and, if you choose to share it, a name and email
          address. Sign in with Apple lets you hide your email. Google Sign-In is provided by Google;
          Google's own privacy policy applies to Google's handling of that sign-in.
        </P>

        <H3>Health and cycle information you enter</H3>
        <P>
          Medication schedules, doses and times, appointments, journal check-ins, hydration, expenses,
          injection sites, monitoring values, and other records you choose to log. You provide this.
          We store it so the app can show it back to you and remind you.
        </P>

        <H3>Protocol photos, voice, and Blood Work PDFs</H3>
        <UL>
          <li>
            <strong>Photos of a clinic sheet:</strong> sent to our processing service (Anthropic) solely
            to draft medication or appointment cards. We ask you to check every value before anything
            is saved. We do not keep the image after processing, and we do not use your images to train
            a model.
          </li>
          <li>
            <strong>Voice:</strong> if you add a medication, appointment, or lab by speaking, the
            recording is sent to our processing service to draft cards for you to review. We do not
            keep the audio after processing. What we may keep is the structured draft you save
            (for example, a medication name and time).
          </li>
          <li>
            <strong>Blood Work PDFs:</strong> if you upload a lab report, we store that PDF in a
            private folder tied to your account so you can keep it with the extracted results. The
            file is processed (Anthropic) to draft test values for you to review. The PDF remains
            until you delete that report or delete your account. Account deletion removes the
            database rows and the stored PDF files.
          </li>
        </UL>

        <H3>Information collected automatically</H3>
        <UL>
          <li>
            <strong>PostHog (analytics):</strong> we use PostHog to understand whether screens load and
            whether onboarding was completed. It is configured not to collect medication names, doses,
            lab values, or your email. We identify you in analytics only with an opaque account id,
            not your name.
          </li>
          <li>
            <strong>AppsFlyer (install attribution):</strong> we use AppsFlyer to understand which
            link, ad, or partner brought you to the app — for example a creator code or an App Store
            campaign. This can include a device identifier used for attribution. We do not show ads
            inside Cove. We do not send your medication schedule, lab PDFs, or journal text to
            AppsFlyer. We do not sell health information to advertisers.
          </li>
          <li>
            <strong>Apple Search Ads / App Store attribution:</strong> on iOS we may collect Apple's
            attribution token so we can tell that an App Store campaign led to a download. This is
            not used to target ads inside Cove.
          </li>
          <li>
            <strong>Technical data:</strong> device type, app version, and crash or error messages
            needed to operate and secure the service. Push tokens are stored so we can send
            reminders and occasional product messages you already expect (for example a
            time-limited offer after a cancelled trial).
          </li>
        </UL>

        <H2>What we do NOT do</H2>
        <UL>
          <li>We do not sell your personal or health information.</li>
          <li>We do not share your health information with advertisers, data brokers, or social platforms for their advertising.</li>
          <li>We do not show third-party ads inside the app.</li>
          <li>We do not use your health information to target ads.</li>
        </UL>

        <H2>How we use your information</H2>
        <UL>
          <li>To provide the app: build your schedule, send reminders, store and display what you log.</li>
          <li>To run capture features (photo, voice, Blood Work PDF) and show you drafts to review.</li>
          <li>To process subscriptions through Apple (and Google Play where available) and RevenueCat.</li>
          <li>To operate, secure, and improve the service, including measuring which channels bring people to Cove (AppsFlyer).</li>
          <li>To contact you about the product (for example a product update, support reply, or a short-lived offer after a paywall or cancelled trial). You can opt out of non-essential emails in the app where that control exists.</li>
        </UL>

        <H2>How your information is stored and protected</H2>
        <P>
          Account and health data are stored with our cloud provider, Supabase, encrypted in transit
          and at rest. Blood Work PDFs sit in a private storage bucket that only your signed-in
          account can read. Access is restricted so that your data is available to your account, not
          to other users. No method of storage is perfectly secure, but we design the product to keep
          your information private and under your control.
        </P>

        <H2>Your choices and rights</H2>
        <UL>
          <li>
            <strong>Delete everything:</strong> Settings → Delete account. We permanently delete your
            account, cycle data, and stored Blood Work PDFs. Deletion is not reversible. Apple or
            Google may still keep a record of the subscription itself under their rules.
          </li>
          <li>
            <strong>Access and correction:</strong> you can view and edit your information in the app.
          </li>
          <li>
            <strong>Communications:</strong> you can opt out of non-essential emails.
          </li>
          <li>
            <strong>Lock-screen privacy:</strong> you can hide medication names on lock-screen
            reminders in Settings → Notifications.
          </li>
        </UL>
        <P>
          Depending on where you live, you may have additional rights (for example under California
          or European law) to access, delete, or restrict use of your information. Contact{" "}
          <a className="text-rose hover:underline" href={`mailto:${CONTACT}`}>
            {CONTACT}
          </a>
          .
        </P>

        <H2>Data retention</H2>
        <P>
          We keep your information for as long as your account is active. When you delete your
          account, we delete associated health data and Blood Work PDF files. Protocol-sheet photos
          and voice recordings are not retained after processing. Short structured logs of a capture
          session (for example that a photo produced three draft cards) may exist until account
          deletion. Subscription records held by Apple, Google, or RevenueCat follow their retention
          rules, not ours.
        </P>

        <H2>Sharing with service providers</H2>
        <P>
          We use a small number of companies to run Cove. They may process information only to
          provide their service to us:
        </P>
        <UL>
          <li>Supabase — hosting, database, authentication, and file storage</li>
          <li>Apple and, where available, Google — sign-in and app-store billing</li>
          <li>RevenueCat — subscription status</li>
          <li>Anthropic — reading protocol photos, voice drafts, and Blood Work PDFs into cards you review</li>
          <li>PostHog — product analytics (no health contents)</li>
          <li>AppsFlyer — install and campaign attribution</li>
          <li>Expo — delivering push notifications</li>
          <li>Resend — sending support email and, when enabled, transactional product email</li>
        </UL>
        <P>We do not sell or rent your information to anyone.</P>

        <H2>Children</H2>
        <P>
          Cove is intended for adults undergoing fertility treatment and is not directed to children
          under 16. We do not knowingly collect information from children.
        </P>

        <H2>Changes to this policy</H2>
        <P>If we change this policy, we will update the date above and, for material changes, notify you.</P>

        <H2>Contact</H2>
        <P>
          Questions about privacy:{" "}
          <a className="text-rose hover:underline" href={`mailto:${CONTACT}`}>
            {CONTACT}
          </a>
          .
        </P>
      </main>
      <Footer />
    </div>
  );
}
