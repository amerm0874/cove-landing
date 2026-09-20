import { Link } from "@tanstack/react-router";

/**
 * The site's 404 page, used by every not-found boundary.
 *
 * It carries its own head tags rather than a route `head()`: when a loader
 * throws `notFound()` the router skips that route's `head()` entirely, so the
 * only way a not-found render can describe itself is from the component. React
 * hoists `<title>` and `<meta>` into the document head.
 */
export function NotFound() {
  return (
    <>
      <title>Page not found — Cove IVF</title>
      <meta name="robots" content="noindex" />
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
    </>
  );
}
