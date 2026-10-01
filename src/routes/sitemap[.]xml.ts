import { createFileRoute } from "@tanstack/react-router";

import { contentSupabase } from "@/lib/content-supabase";
import { SITE_URL } from "@/lib/constants";
import { FEATURES } from "@/lib/features";
import { COMPARISONS } from "@/lib/comparisons";

/**
 * Priority is a hint, not a ranking lever — it only tells a crawler which of
 * our own URLs matter most relative to each other. Marketing pages sit above
 * legal boilerplate so a limited crawl budget lands on the right ones.
 */
const STATIC_ENTRIES: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/features", priority: "0.9", changefreq: "monthly" },
  ...FEATURES.map((f) => ({
    path: `/features/${f.slug}`,
    priority: "0.8",
    changefreq: "monthly",
  })),
  ...COMPARISONS.map((c) => ({
    path: `/compare/${c.slug}`,
    priority: "0.8",
    changefreq: "monthly",
  })),
  { path: "/faq", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/support", priority: "0.5", changefreq: "monthly" },
  { path: "/affiliate", priority: "0.4", changefreq: "monthly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
  { path: "/delete-account", priority: "0.3", changefreq: "yearly" },
];

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function urlEntry(loc: string, priority: string, changefreq: string, lastmod?: string): string {
  return [
    "  <url>",
    `    <loc>${escapeXml(loc)}</loc>`,
    ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

async function buildSitemapXml(): Promise<string> {
  const { data: posts, error } = await contentSupabase
    .from("posts")
    .select("slug, updated_at")
    .eq("status", "published");

  if (error) {
    console.error("sitemap: failed to load published posts", error);
  }

  const staticUrls = STATIC_ENTRIES.map((entry) =>
    urlEntry(`${SITE_URL}${entry.path}`, entry.priority, entry.changefreq),
  );

  const postUrls = (posts ?? []).map((post) =>
    urlEntry(
      `${SITE_URL}/blog/${post.slug}`,
      "0.6",
      "monthly",
      new Date(post.updated_at).toISOString(),
    ),
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticUrls,
    ...postUrls,
    "</urlset>",
  ].join("\n");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = await buildSitemapXml();
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=UTF-8",
            "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
          },
        });
      },
    },
  },
});
