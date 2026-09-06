import { createFileRoute } from "@tanstack/react-router";
import { contentSupabase } from "@/lib/content-supabase";

const SITE_URL = "https://www.coveivf.life";

const STATIC_PATHS = ["/", "/affiliate", "/delete-account", "/faq", "/privacy", "/support", "/terms", "/blog"];

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function buildSitemapXml(): Promise<string> {
  const { data: posts, error } = await contentSupabase
    .from("posts")
    .select("slug, updated_at")
    .eq("status", "published");

  if (error) {
    console.error("sitemap: failed to load published posts", error);
  }

  const staticUrls = STATIC_PATHS.map(
    (path) => `  <url><loc>${escapeXml(`${SITE_URL}${path}`)}</loc></url>`,
  );

  const postUrls = (posts ?? []).map((post) => {
    const lastmod = new Date(post.updated_at).toISOString();
    return `  <url><loc>${escapeXml(`${SITE_URL}/blog/${post.slug}`)}</loc><lastmod>${lastmod}</lastmod></url>`;
  });

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
