import { createFileRoute } from "@tanstack/react-router";
import { contentSupabase } from "@/lib/content-supabase";
import { DEFAULT_LOCALE, LOCALES, LOCALE_HTML_LANG, localizedPath } from "@/i18n/config";

const SITE_URL = "https://www.coveivf.life";

/** Marketing pages that exist in every locale. */
const STATIC_PATHS = ["/", "/features", "/faq", "/support", "/delete-account", "/privacy", "/terms", "/affiliate", "/blog"];

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function absolute(path: string): string {
  return escapeXml(`${SITE_URL}${path === "/" ? "/" : path}`);
}

/** One <url> per locale, each carrying hreflang alternates for all locales + x-default. */
function localizedUrlEntries(basePath: string): string[] {
  const alternates = [
    ...LOCALES.map(
      (loc) => `    <xhtml:link rel="alternate" hreflang="${LOCALE_HTML_LANG[loc]}" href="${absolute(localizedPath(basePath, loc))}"/>`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(localizedPath(basePath, DEFAULT_LOCALE))}"/>`,
  ].join("\n");

  return LOCALES.map(
    (loc) => `  <url>\n    <loc>${absolute(localizedPath(basePath, loc))}</loc>\n${alternates}\n  </url>`,
  );
}

async function buildSitemapXml(): Promise<string> {
  const { data: posts, error } = await contentSupabase
    .from("posts")
    .select("slug, updated_at")
    .eq("status", "published");

  if (error) {
    console.error("sitemap: failed to load published posts", error);
  }

  const staticUrls = STATIC_PATHS.flatMap((path) => localizedUrlEntries(path));

  // Blog post bodies are not translated — English URL only.
  const postUrls = (posts ?? []).map((post) => {
    const lastmod = new Date(post.updated_at).toISOString();
    return `  <url><loc>${absolute(`/blog/${post.slug}`)}</loc><lastmod>${lastmod}</lastmod></url>`;
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
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
