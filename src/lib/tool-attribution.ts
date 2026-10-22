/** Public campaign codes only. Never derive attribution from calculator inputs. */
export const TOOL_CAMPAIGNS: Record<string, string> = {
  "/days-past-embryo-transfer-calculator": "tool_01",
  "/ivf-medication-cost-calculator": "tool_02",
};

export function toolCampaign(pathname: string): string | undefined {
  return Object.hasOwn(TOOL_CAMPAIGNS, pathname) ? TOOL_CAMPAIGNS[pathname] : undefined;
}

export function toolDownloadUrl(pathname: string, isTest = false): string {
  const campaign = toolCampaign(pathname);
  if (!campaign) throw new Error("Unknown tool attribution route");
  // Long OneLink: short-link embedded campaign values cannot be overridden reliably.
  const url = new URL("https://cove.onelink.me/lzsv");
  url.searchParams.set("pid", "cove_tools");
  url.searchParams.set("c", isTest ? "codex_verification" : campaign);
  if (isTest) url.searchParams.set("af_adset", campaign);
  url.searchParams.set("af_channel", "website");
  return url.toString();
}

export function toolEventProperties(pathname: string, search: string = "") {
  const campaign = toolCampaign(pathname);
  if (!campaign) return null;
  // Only one reserved QA marker is accepted; no arbitrary UTM/query content.
  const isTest = new URLSearchParams(search).get("utm_campaign") === "codex_verification";
  return { tool_id: campaign, campaign, cove_source: "site", environment: "production", is_test: isTest, $geoip_disable: true };
}

const TOOL_PROPERTIES = new Set([
  "token", "distinct_id", "$lib", "$lib_version", "$insert_id", "$process_person_profile", "$ip",
  "tool_id", "campaign", "cove_source", "environment", "is_test", "$geoip_disable",
]);
export function filterToolProperties(properties: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(properties).filter(([key]) => TOOL_PROPERTIES.has(key)));
}
