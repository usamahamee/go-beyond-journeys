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

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { FloatingButtons } from "../components/site/FloatingButtons";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-hero text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 page-title text-2xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn btn--primary">Go home</Link>
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
        <h1 className="page-title text-2xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn btn--primary"
          >
            Try again
          </button>
          <a href="/" className="btn btn--outline">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Guzel Travels — Flights, Visa, Umrah & Car Rental in Lahore" },
      { name: "description", content: "Guzel Travels offers cheap flights, visa consultancy, Umrah packages, and car rentals in Lahore, Pakistan. Restart your travels with confidence." },
      { name: "author", content: "Guzel Travels" },
      { property: "og:title", content: "Guzel Travels — Flights, Visa, Umrah & Car Rental in Lahore" },
      { property: "og:description", content: "Guzel Travels offers cheap flights, visa consultancy, Umrah packages, and car rentals in Lahore, Pakistan. Restart your travels with confidence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Guzel Travels — Flights, Visa, Umrah & Car Rental in Lahore" },
      { name: "twitter:description", content: "Guzel Travels offers cheap flights, visa consultancy, Umrah packages, and car rentals in Lahore, Pakistan. Restart your travels with confidence." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4438aba3-8ac0-4ff9-a2ed-a57142d95f85/id-preview-db7dd9ac--6ab1008b-3e59-49f1-b7f7-6aab0be3edf6.lovable.app-1781114211824.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4438aba3-8ac0-4ff9-a2ed-a57142d95f85/id-preview-db7dd9ac--6ab1008b-3e59-49f1-b7f7-6aab0be3edf6.lovable.app-1781114211824.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:wght@400;600;700;800&family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500;700&display=swap",
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
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster position="top-center" />
      </div>
    </QueryClientProvider>
  );
}
