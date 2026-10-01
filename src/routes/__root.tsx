import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import appCss from "../styles.css?url";
import coveLogo from "../assets/cove-logo.png?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE_URL } from "../lib/constants";

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
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
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

/** 1200x630 social preview. Referenced by og:image and twitter:image, and as
 * Organization.image — Organization.logo stays the square mark below. */
const OG_IMAGE_URL: string | null = `${SITE_URL}/og-image.jpg`;

/** Square brand mark at a stable public path. Distinct from the 1200x630 OG
 * image above: this one feeds Organization.logo, which wants a square. */
const LOGO_URL = `${SITE_URL}/logo.png`;

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cove IVF",
  url: `${SITE_URL}/`,
  logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
  ...(OG_IMAGE_URL ? { image: OG_IMAGE_URL } : {}),
  sameAs: [
    "https://www.instagram.com/cove_appp/",
    "https://www.tiktok.com/@cove_app",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cove IVF",
  url: `${SITE_URL}/`,
  publisher: { "@type": "Organization", name: "Cove IVF", url: `${SITE_URL}/` },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IVF Tracker & Medication Reminders for iPhone | Cove" },
      {
        name: "description",
        content:
          "The calm IVF tracker for your full cycle. Photograph your protocol, get exact medication lineups, dose changes, and discreet reminders. Private, encrypted, built for real IVF patients. Available now on iPhone.",
      },
      { property: "og:title", content: "IVF Tracker & Medication Reminders for iPhone | Cove" },
      {
        property: "og:description",
        content:
          "The calm IVF tracker for your full cycle. Photograph your protocol, get exact medication lineups, dose changes, and discreet reminders. Private, encrypted, built for real IVF patients. Available now on iPhone.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.coveivf.life/" },
      { property: "og:site_name", content: "Cove IVF" },
      ...(OG_IMAGE_URL
        ? [
            { property: "og:image", content: OG_IMAGE_URL },
            { property: "og:image:type", content: "image/jpeg" },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            {
              property: "og:image:alt",
              content: "Cove — the calm IVF tracker for your whole cycle, shown on iPhone",
            },
          ]
        : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IVF Tracker & Medication Reminders for iPhone | Cove" },
      {
        name: "twitter:description",
        content:
          "The calm IVF tracker for your full cycle. Photograph your protocol, get exact medication lineups, dose changes, and discreet reminders. Available now on iPhone.",
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
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&family=Nunito+Sans:wght@400;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
