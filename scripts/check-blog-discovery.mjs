import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const module = { exports: {} };
vm.runInNewContext(
  ts.transpileModule(fs.readFileSync("src/lib/blog-discovery.ts", "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText,
  { module, exports: module.exports },
);
const { relatedPosts, articleTool, blogDiscoveryCopy } = module.exports;
const slugs = [
  "ivf-injection-schedule-how-to-keep-track",
  "ivf-medication-list-what-each-one-does",
  "ivf-medication-inventory-not-running-out-mid-stim",
  "ivf-trigger-shot-why-timing-is-tight-and-how-people-remember-it",
];
const published = slugs.map((slug) => ({
  slug,
  title: slug,
  description: "",
  published_at: "2026-10-01",
}));
for (const slug of slugs) {
  const links = relatedPosts(slug, published);
  assert.equal(links.length, 3);
  assert(!links.some((post) => post.slug === slug));
  assert.equal(new Set(links.map((post) => post.slug)).size, links.length);
  assert(
    links.every((post) => published.includes(post)),
    "Never link to an unpublished or deleted post",
  );
}
assert.equal(relatedPosts(slugs[0], []).length, 0);
assert.equal(relatedPosts("new-unclassified-post", published).length, 0);
assert.equal(
  articleTool("ivf-cost-categories-people-forget-to-track").href,
  "/ivf-medication-cost-calculator",
);
assert.equal(
  articleTool("beta-hcg-wait-dates-not-predictions").href,
  "/days-past-embryo-transfer-calculator",
);
assert.equal(articleTool("ivf-medication-list-what-each-one-does"), null);
assert.equal(Object.keys(blogDiscoveryCopy).length, 5);
console.log(
  "PASS published-only related links, rotation, no self-links, contextual tools and locale notices",
);
