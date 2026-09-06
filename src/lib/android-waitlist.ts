import { createServerFn } from "@tanstack/react-start";
import { contentSupabase } from "@/lib/content-supabase";

export type AndroidWaitlistInput = { email: string };
export type AndroidWaitlistResult = { ok: true } | { ok: false; error: string };

function parseEmail(raw: unknown): { ok: true; email: string } | { ok: false; error: string } {
  const data = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const email = typeof data.email === "string" ? data.email.trim().slice(0, 320) : "";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email." };
  }
  return { ok: true, email };
}

export const joinAndroidWaitlist = createServerFn({ method: "POST" })
  .validator((data: AndroidWaitlistInput) => data)
  .handler(async ({ data }): Promise<AndroidWaitlistResult> => {
    const parsed = parseEmail(data);
    if (!parsed.ok) return { ok: false, error: parsed.error };

    const { error } = await contentSupabase
      .from("android_waitlist")
      .insert({ email: parsed.email.toLowerCase() });

    if (error) {
      if (error.code === "23505") {
        // Already on the list — same success state, no error surfaced.
        return { ok: true };
      }
      console.error("android-waitlist: insert failed", error);
      return { ok: false, error: "Something went wrong. Please try again." };
    }

    return { ok: true };
  });
