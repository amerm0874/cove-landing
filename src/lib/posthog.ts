import posthog from "posthog-js";
import type { CaptureResult } from "posthog-js";
import { filterStoreProperties } from "./store-click";
import { filterToolProperties, toolEventProperties } from "./tool-attribution";

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
    if (event?.event === "site_tool_viewed" || event?.event === "site_tool_download_clicked") {
      event.properties = filterToolProperties(event.properties);
      return event;
    }
    if (event?.event === "store_link_clicked") {
      event.properties = filterStoreProperties(event.properties);
      return event;
    }
    if (!event || event.event !== "$exception") return null;
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
 * public marketing site. Explicit tool views and download clicks only: no replay,
 * form autocapture, persistent identifiers or automatic pageviews.
 */
export function initPostHog(): void {
  if (initialized || !POSTHOG_API_KEY || typeof window === "undefined") return;
  if (!["coveivf.life", "www.coveivf.life"].includes(window.location.hostname)) return;
  initialized = true;

  posthog.init(POSTHOG_API_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "never",
    persistence: "memory",
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: false,
    capture_exceptions: false,
    capture_performance: false,
    enable_heatmaps: false,
    capture_dead_clicks: false,
    disable_session_recording: true,
    disable_surveys: true,
    advanced_disable_feature_flags: true,
    ip: false,
    before_send: beforeSend,
  });
  posthog.register({ cove_source: "site", environment: "production" });
}

export function captureStoreClick(properties: Record<string, string>): void {
  if (!initialized) return;
  try {
    posthog.capture("store_link_clicked", properties, { transport: "sendBeacon", send_instantly: true });
  } catch {
    // Analytics must never prevent navigation to the store.
  }
}

export function capturePostHogException(error: unknown): void {
  if (!initialized) return;
  posthog.captureException(error);
}

let lastToolPath = "";
export function captureToolView(pathname: string): void {
  if (!initialized || lastToolPath === pathname) return;
  lastToolPath = pathname;
  const properties = toolEventProperties(pathname, window.location.search);
  if (properties) posthog.capture("site_tool_viewed", properties);
}

export function captureToolDownload(pathname: string): void {
  if (!initialized) return;
  const properties = toolEventProperties(pathname, window.location.search);
  if (properties) posthog.capture("site_tool_download_clicked", properties, { transport: "sendBeacon", send_instantly: true });
}
