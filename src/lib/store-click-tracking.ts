import { parseLocalePath } from "@/i18n/config";
import { captureStoreClick, captureToolDownload } from "./posthog";
import { toolCampaign, toolDownloadUrl } from "./tool-attribution";
import { campaignTag, storePlatform } from "./store-click";

/** Delegation also covers CMS-rendered links and future client-side navigation. */
export function listenForStoreClicks(): () => void {
  const campaign = new URLSearchParams(window.location.search);
  const attribution = Object.fromEntries(
    ["utm_source", "utm_medium", "utm_campaign"].flatMap((key) => {
      const value = campaignTag(campaign.get(key));
      return value ? [[key, value]] : [];
    }),
  );
  function onClick(event: MouseEvent) {
    if (event.type === "auxclick" && event.button !== 1) return;
    const target = event.target instanceof Element ? event.target : null;
    const link = target?.closest<HTMLAnchorElement>("a[href]");
    if (!link || link.dataset.storePurpose === "review") return;
    const platform = storePlatform(link.href);
    if (!platform) return;
    // CMS articles cite the regional Australian listing as review evidence.
    if (link.closest("article") && new URL(link.href).pathname.startsWith("/au/")) return;
    if (toolCampaign(window.location.pathname)) {
      if (new URLSearchParams(window.location.search).get("utm_campaign") === "codex_verification") {
        link.href = toolDownloadUrl(window.location.pathname, true);
      }
      captureToolDownload(window.location.pathname);
      return;
    }
    const { locale, basePath } = parseLocalePath(window.location.pathname);
    // Public route paths only; never capture a URL query, hash or DOM text.
    const page = /^\/(?:[a-z0-9-]+\/)*[a-z0-9-]*$/.test(basePath) ? basePath : "/other";
    const placement = link.closest<HTMLElement>("[data-store-placement]")?.dataset.storePlacement || link.dataset.storePlacement ||
      (link.closest("article") ? "article_body" : link.closest("header") ? "header" :
        link.closest("footer") ? "footer" : link.closest("#download") ? "download" : "page");
    captureStoreClick({ platform, page, locale, placement, ...attribution });
  }
  document.addEventListener("click", onClick);
  document.addEventListener("auxclick", onClick);
  return () => {
    document.removeEventListener("click", onClick);
    document.removeEventListener("auxclick", onClick);
  };
}
