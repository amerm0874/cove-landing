import { createServerFn } from "@tanstack/react-start";
import { CONTACT_EMAIL } from "@/lib/constants";

const RESEND_FROM = "onboarding@resend.dev";
const RESEND_API_URL = "https://api.resend.com/emails";

export type AffiliateFormInput = {
  name: string;
  email: string;
  handle: string;
  inCycle: "yes" | "no" | "";
  isCreator: "yes" | "no" | "";
  platform: string;
  viewTarget: string;
  notes: string;
};

export type AffiliateSubmitResult =
  | { ok: true }
  | { ok: false; error: string }
  | { ok: false; useMailto: true; error?: string };

function asTrimmed(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function parseInput(raw: unknown): { ok: true; value: AffiliateFormInput } | { ok: false; error: string } {
  const data = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const name = asTrimmed(data.name, 200);
  const email = asTrimmed(data.email, 320);
  const handle = asTrimmed(data.handle, 200);
  const inCycle = data.inCycle === "yes" || data.inCycle === "no" ? data.inCycle : "";
  const isCreator = data.isCreator === "yes" || data.isCreator === "no" ? data.isCreator : "";
  const platform = asTrimmed(data.platform, 200);
  const viewTarget = asTrimmed(data.viewTarget, 40);
  const notes = asTrimmed(data.notes, 2000);

  if (!name) return { ok: false, error: "Please enter your name." };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email." };
  }
  if (!handle) return { ok: false, error: "Please enter an Instagram or TikTok handle." };
  if (!inCycle) return { ok: false, error: "Please say whether you are in a current IVF cycle." };
  if (!isCreator) return { ok: false, error: "Please say whether you are a creator." };
  if (isCreator === "yes" && !platform) {
    return { ok: false, error: "Please say which platform you expect to post on." };
  }
  if (isCreator === "yes" && viewTarget !== "200k" && viewTarget !== "300k" && viewTarget !== "no") {
    return { ok: false, error: "Please say whether you can accept a 200k or 300k view target." };
  }

  return {
    ok: true,
    value: { name, email, handle, inCycle, isCreator, platform, viewTarget, notes },
  };
}

function buildEmailText(input: AffiliateFormInput): string {
  const viewTargetLabel =
    input.viewTarget === "200k"
      ? "200k"
      : input.viewTarget === "300k"
        ? "300k"
        : input.viewTarget === "no"
          ? "cannot accept 200k or 300k"
          : "n/a";

  return [
    "Cove affiliate application",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Instagram or TikTok: ${input.handle}`,
    `In a current IVF cycle: ${input.inCycle}`,
    `Creator: ${input.isCreator}`,
    `Expected platform: ${input.isCreator === "yes" ? input.platform : "n/a"}`,
    `View target: ${input.isCreator === "yes" ? viewTargetLabel : "n/a"}`,
    "",
    "Anything else:",
    input.notes || "(none)",
  ].join("\n");
}

async function emailInbox(input: AffiliateFormInput): Promise<boolean> {
  const apiKey =
    (typeof process !== "undefined" ? process.env.RESEND_API_KEY : undefined) ||
    (typeof import.meta.env.RESEND_API_KEY === "string" ? import.meta.env.RESEND_API_KEY : undefined);

  if (!apiKey) return false;

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [CONTACT_EMAIL],
      subject: `Cove affiliate — ${input.name}`,
      text: buildEmailText(input),
      reply_to: input.email,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("affiliate: Resend failed", response.status, detail.slice(0, 500));
    return false;
  }

  return true;
}

export const submitAffiliateApplication = createServerFn({ method: "POST" })
  .validator((data: AffiliateFormInput) => data)
  .handler(async ({ data }): Promise<AffiliateSubmitResult> => {
    const parsed = parseInput(data);
    if (!parsed.ok) return { ok: false, error: parsed.error };

    try {
      const sent = await emailInbox(parsed.value);
      if (sent) return { ok: true };
      return { ok: false, useMailto: true };
    } catch (error) {
      console.error("affiliate: submit failed", error);
      return { ok: false, useMailto: true };
    }
  });

