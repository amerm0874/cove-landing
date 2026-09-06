// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Hard-pin the deploy target: the site is hosted on Vercel, so we don't rely
  // on the wrapper's zero-config auto-detection (which falls back to
  // cloudflare-module if detection ever fails — see the file-level comment
  // above). Documented override path per @lovable.dev/vite-tanstack-config's
  // own type definitions ("object: force-on, with these overrides").
  nitro: {
    preset: "vercel",
  },
});
