import posthog from "posthog-js";
import type { CaptureResult } from "posthog-js";

/** From VITE_POSTHOG_KEY — never hardcode. Missing key = analytics no-op. */
const POSTHOG_API_KEY = import.meta.env.VITE_POSTHOG_KEY?.trim() ?? "";
const POSTHOG_HOST =
  import.meta.env.VITE_POSTHOG_HOST?.trim() || "https://us.i.posthog.com";

let initialized = false;

const EMAIL_RE = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;
const BEARER_RE = /Bearer\s+\S+/gi;
const JWT_RE = /eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g;
const PHONE_RE = /\+?\d[\d\s().-]{8,}\d/g;

function redact(value: string): string {
  return value
    .replace(EMAIL_RE, "[redacted-email]")
    .replace(BEARER_RE, "Bearer [redacted]")
    .replace(JWT_RE, "[redacted-token]")
    .replace(PHONE_RE, "[redacted-phone]");
}

/** The affiliate/support pages collect an email address — never let it reach an exception. */
function beforeSend(event: CaptureResult | null): CaptureResult | null {
  try {
    if (!event || event.event !== "$exception") return event;
    const list = event.properties?.$exception_list;
    if (Array.isArray(list)) {
      event.properties.$exception_list = list.map((entry: unknown) => {
        if (!entry || typeof entry !== "object") return entry;
        const row = entry as Record<string, unknown>;
        return typeof row.value === "string" ? { ...row, value: redact(row.value) } : row;
      });
    }
    return event;
  } catch {
    return null;
  }
}

/**
 * Client-only init (guarded by the window check in the call site). This is a
 * public marketing site — no protocol/med/health content is ever rendered
 * here — but replay masking is still left at PostHog's default (all input
 * fields masked) as a baseline, since the contact/newsletter forms collect
 * an email address.
 */
export function initPostHog(): void {
  if (initialized || !POSTHOG_API_KEY) return;
  initialized = true;

  posthog.init(POSTHOG_API_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_exceptions: true,
    disable_session_recording: false,
    session_recording: {
      maskAllInputs: true,
    },
    before_send: beforeSend,
  });
  posthog.register({ cove_source: "site" });
}

export function capturePostHogException(error: unknown): void {
  if (!initialized) return;
  posthog.captureException(error);
}
