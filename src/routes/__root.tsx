import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { LOCALE_HTML_LANG, localeDir, parseLocalePath } from "@/i18n/config";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import appCss from "../styles.css?url";
import { LOGO_URL, OG_IMAGE_ALT, OG_IMAGE_URL as SITE_OG_IMAGE_URL, SITE_URL } from "@/lib/seo";
import coveLogo from "../assets/cove-logo.png?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { capturePostHogException, initPostHog } from "../lib/posthog";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
    capturePostHogException(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

/** Site-wide preview image. Routes may override it with their own. */
const OG_IMAGE_URL: string | null = SITE_OG_IMAGE_URL;

/**
 * `@id` so other schema blocks (Article publisher, BreadcrumbList) can point at
 * this node instead of repeating it. `logo` must be the square-ish brand mark —
 * Google rejects a 1200x630 social card here.
 */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Cove IVF",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 636,
    height: 517,
  },
  ...(OG_IMAGE_URL ? { image: OG_IMAGE_URL } : {}),
  sameAs: [
    "https://www.instagram.com/cove_appp/",
    "https://www.tiktok.com/@cove_app",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Cove IVF",
  url: `${SITE_URL}/`,
  inLanguage: ["en", "ar", "de", "fr", "es"],
  publisher: { "@id": ORGANIZATION_ID },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "apple-itunes-app", content: "app-id=6788749556" },
      { title: "Cove IVF Tracker — Medication & Cycle App for iOS & Android" },
      {
        name: "description",
        content:
          "The calm IVF tracker for your whole cycle. Photograph your protocol for exact medication lineups, dose changes and discreet reminders. iPhone and Android.",
      },
      { property: "og:title", content: "Cove IVF Tracker — Medication & Cycle App for iOS & Android" },
      {
        property: "og:description",
        content:
          "The calm IVF tracker for your whole cycle. Photograph your protocol for exact medication lineups, dose changes and discreet reminders. iPhone and Android.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Cove IVF" },
      ...(OG_IMAGE_URL
        ? [
            { property: "og:image", content: OG_IMAGE_URL },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { property: "og:image:alt", content: OG_IMAGE_ALT },
          ]
        : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cove IVF Tracker — Medication & Cycle App for iOS & Android" },
      {
        name: "twitter:description",
        content:
          "The calm IVF tracker for your whole cycle. Photograph your protocol for exact medication lineups, dose changes and discreet reminders. iPhone and Android.",
      },
      ...(OG_IMAGE_URL ? [{ name: "twitter:image", content: OG_IMAGE_URL }] : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: coveLogo, type: "image/png" },
      { rel: "apple-touch-icon", href: coveLogo, type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&family=Nunito+Sans:wght@400;600;700&family=Noto+Kufi+Arabic:wght@400;600;700&family=Noto+Sans+Arabic:wght@400;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  // Derive the active locale from the URL's first segment so the document is
  // themed for RTL (Arabic) on the very first SSR paint, not after hydration.
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { locale } = parseLocalePath(pathname);
  return (
    <html lang={LOCALE_HTML_LANG[locale]} dir={localeDir(locale)}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
      />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  );
}
