export const SITE_URL = "https://www.coveivf.life";

/** App Store numeric id — used by the Smart App Banner and by structured data. */
export const APPLE_APP_ID = "6788749556";

export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "630";
export const OG_IMAGE_ALT = "COVE — IVF meds, shots & reminders";

type PageHeadOptions = {
  title: string;
  description: string;
  /** Absolute URL of this page. Used for both the canonical link and og:url. */
  url: string;
  type?: "website" | "article";
  /** Overrides the site-wide preview image (a blog post with its own artwork). */
  image?: string | null;
  imageAlt?: string;
};

/**
 * Per-page head for a content route: title, description, the Open Graph and
 * Twitter pairs that mirror them, and the canonical link. Every route owns its
 * own og:url, so nothing about the page's identity is inherited from the root.
 */
export function pageHead({
  title,
  description,
  url,
  type = "website",
  image,
  imageAlt,
}: PageHeadOptions) {
  const ogImage = image || OG_IMAGE_URL;
  const isDefaultImage = ogImage === OG_IMAGE_URL;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      // Only declared for the asset we ship — we can't know a post image's size.
      ...(isDefaultImage
        ? [
            { property: "og:image:width", content: OG_IMAGE_WIDTH },
            { property: "og:image:height", content: OG_IMAGE_HEIGHT },
          ]
        : []),
      { property: "og:image:alt", content: imageAlt || OG_IMAGE_ALT },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
