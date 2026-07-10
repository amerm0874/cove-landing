import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
// import { FaApple, FaGoogle } from "react-icons/fa";
import { supabase } from "@/lib/supabase";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeInstagram(value: string) {
  const trimmed = value.trim().replace(/^@+/, "");
  return trimmed || null;
}

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail) {
      setError("Please enter your email.");
      return;
    }
    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const { error: insertError } = await supabase.from("waitlist").insert({
      email: trimmedEmail,
      instagram: normalizeInstagram(handle),
    });

    setLoading(false);

    if (insertError) {
      if (insertError.code === "23505") {
        setError("This email is already on the waitlist.");
        return;
      }
      setError("Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  }

  // TODO: wire to Supabase Auth (Apple / Google OAuth) — waitlist join only.
  // function joinWith(_provider: "apple" | "google") {
  //   setSubmitted(true);
  // }

  if (submitted) {
    return (
      <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-sage bg-sage-soft px-5 py-3 text-sage-deep">
        <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
        You're on the list. Quiet until launch.
      </p>
    );
  }

  return (
    <div className="mx-auto mt-8 max-w-md text-left">
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <label htmlFor="waitlist-email" className="sr-only">Email</label>
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={loading}
          className="w-full rounded-full border border-line bg-white px-5 py-3 text-plum placeholder:text-muted focus:border-rose focus:outline-none disabled:opacity-60"
        />

        {/* Optional Instagram handle — wrapped in the animated Instagram-gradient border */}
        <div className="insta-border rounded-full">
          <div className="insta-inner flex items-center rounded-full pl-4">
            <span aria-hidden className="font-mono-tnum text-plum/60">@</span>
            <label htmlFor="waitlist-ig" className="sr-only">Instagram username (optional)</label>
            <input
              id="waitlist-ig"
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="Instagram username (optional)"
              disabled={loading}
              className="w-full flex-1 bg-transparent px-2 py-3 text-sm text-plum placeholder:text-muted focus:outline-none disabled:opacity-60"
            />
          </div>
        </div>

        {error ? (
          <p className="px-2 text-sm text-rose-deep" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-rose-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Joining..." : "Join the waitlist"}
        </button>
      </form>

      {/* Social sign-in temporarily hidden — re-enable when app login is ready */}
      {/*
      <div className="mt-5 flex items-center gap-3 text-xs font-mono-tnum uppercase tracking-widest text-muted">
        <span className="h-px flex-1 bg-line" />
        or
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="mt-5 grid gap-3">
        <button
          type="button"
          onClick={() => joinWith("apple")}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-plum px-5 py-3 text-sm font-semibold text-blush transition-colors hover:bg-plum-soft"
        >
          <FaApple className="h-4 w-4" aria-hidden />
          Continue with Apple
        </button>
        <button
          type="button"
          onClick={() => joinWith("google")}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-5 py-3 text-sm font-semibold text-plum transition-colors hover:bg-petal/70"
        >
          <FaGoogle className="h-4 w-4 text-rose" aria-hidden />
          Continue with Google
        </button>
      </div>
      */}
    </div>
  );
}
