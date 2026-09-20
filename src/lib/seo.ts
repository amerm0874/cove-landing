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

export const LOGO_URL = `${SITE_URL}/logo.png`;

/** The App Store listing itself, as opposed to the OneLink smart link. */
export const APP_STORE_LISTING_URL = `https://apps.apple.com/app/id${APPLE_APP_ID}`;

/**
 * Publisher identity, embedded by the JSON-LD blocks that need it. Rendered
 * standalone only on the homepage — a 404 shouldn't claim to be the org page.
 */
export const ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  name: "Cove IVF",
  url: `${SITE_URL}/`,
  logo: { "@type": "ImageObject", url: LOGO_URL },
  sameAs: [
    "https://www.instagram.com/cove_appp/",
    "https://www.tiktok.com/@cove_app",
    APP_STORE_LISTING_URL,
  ],
};
