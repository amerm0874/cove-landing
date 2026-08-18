import { createFileRoute } from "@tanstack/react-router";
import { BackgroundBlobs, Footer, Header } from "@/components/site-chrome";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete Your Cove Account — Cove IVF" },
      {
        name: "description",
        content:
          "How to permanently delete your Cove IVF account and all associated data from the app or by emailing support.",
      },
      { property: "og:title", content: "Delete Your Cove Account — Cove IVF" },
      {
        property: "og:description",
        content:
          "Permanently delete your Cove IVF account and all associated data at any time.",
      },
    ],
  }),
  component: DeleteAccount,
});

const CONTACT = "coveivf@gmail.com";

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-plum/85">{children}</p>;
}

function OL({ children }: { children: React.ReactNode }) {
  return <ol className="mt-3 list-decimal space-y-2 pl-5 text-plum/85">{children}</ol>;
}

function DeleteAccount() {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <Header />
      <main className="relative z-10 mx-auto max-w-3xl px-5 pt-14 pb-24 sm:px-8 sm:pt-20">
        <p className="font-mono-tnum text-[11px] uppercase tracking-widest text-muted">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-plum sm:text-5xl">
          Delete Your Cove Account
        </h1>

        <P>You can permanently delete your Cove IVF account and all associated data at any time.</P>

        <P>To delete your account from the app:</P>
        <OL>
          <li>Open the Cove app.</li>
          <li>Go to Settings.</li>
          <li>Tap &apos;Delete account&apos; in the danger zone.</li>
          <li>Confirm by typing DELETE.</li>
        </OL>

        <P>
          <strong>What gets deleted:</strong> This permanently removes your account and all
          associated data — including your cycles, medications, doses, appointments, injection
          logs, and profile. This action cannot be undone. No personal data is retained after
          deletion.
        </P>

        <P>
          If you cannot access the app: Email us at{" "}
          <a className="text-rose hover:underline" href={`mailto:${CONTACT}`}>
            {CONTACT}
          </a>{" "}
          from the address associated with your account and we will delete your account and data on
          your behalf.
        </P>
      </main>
      <Footer />
    </div>
  );
}
