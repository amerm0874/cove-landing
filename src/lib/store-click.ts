/** Only COVE's own download destinations qualify as conversions. */
export function storePlatform(href: string): "ios" | "android" | null {
  try {
    const url = new URL(href);
    if (url.protocol !== "https:") return null;
    if (url.hostname === "apps.apple.com" && /(?:^|\/)id6788749556(?:\/|$)/.test(url.pathname)) return "ios";
    if (url.hostname === "cove.onelink.me" && url.pathname === "/lzsv/web") return "ios";
    if (url.hostname === "play.google.com" && url.pathname === "/store/apps/details" && url.searchParams.get("id") === "com.mohamedamer.cove") return "android";
    return null;
  } catch {
    return null;
  }
}

export function campaignTag(value: string | null): string | undefined {
  // No free text, emails, query strings or arbitrary URL values.
  return value && /^[a-zA-Z][a-zA-Z0-9_-]{0,63}$/.test(value) ? value : undefined;
}

const STORE_PROPERTIES = new Set([
  "token", "distinct_id", "$lib", "$lib_version", "$insert_id",
  "$process_person_profile", "$ip", "cove_source", "environment", "platform",
  "page", "locale", "placement", "utm_source", "utm_medium", "utm_campaign",
]);

export function filterStoreProperties(properties: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(Object.entries(properties).filter(([key]) => STORE_PROPERTIES.has(key)));
}
