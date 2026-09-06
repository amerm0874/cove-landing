import { createServerFn } from "@tanstack/react-start";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

import { contentSupabase } from "./content-supabase";

export type PostSummary = {
  slug: string;
  title: string;
  description: string;
  published_at: string;
};

export type PostDetail = PostSummary & {
  bodyHtml: string;
  og_image_url: string | null;
  updated_at: string;
};

/** Strict allow-list — never a deny-list. Content is markdown authored by an automated pipeline. */
function renderMarkdown(markdown: string): string {
  const rawHtml = marked.parse(markdown, { async: false }) as string;
  return sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["h1", "h2", "img"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title"],
    },
  });
}

export const getPublishedPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<PostSummary[]> => {
    const { data, error } = await contentSupabase
      .from("posts")
      .select("slug, title, description, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("blog: failed to list published posts", error);
      return [];
    }

    return data ?? [];
  },
);

export const getPublishedPostBySlug = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }): Promise<PostDetail | null> => {
    const { data, error } = await contentSupabase
      .from("posts")
      .select("slug, title, description, body, og_image_url, published_at, updated_at")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    // A missing row and a draft row both resolve to null here — never leak
    // that a draft slug exists.
    if (error || !data) {
      return null;
    }

    return {
      slug: data.slug,
      title: data.title,
      description: data.description,
      published_at: data.published_at,
      updated_at: data.updated_at,
      og_image_url: data.og_image_url,
      bodyHtml: renderMarkdown(data.body),
    };
  });
