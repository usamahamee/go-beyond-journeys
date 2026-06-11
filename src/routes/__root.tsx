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
      { name: "theme-color", content: "#000000" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { title: "Guzel Travels — Flights, Visa, Umrah & Car Rental in Lahore" },
      { name: "description", content: "Guzel Travels offers cheap flights, visa consultancy, Umrah packages, and car rentals in Lahore, Pakistan. Your trusted travel partner for all your journey needs." },
      { name: "keywords", content: "flights booking, visa consultancy, Umrah packages, car rental, Lahore, Pakistan, travel agency" },
      { name: "author", content: "Guzel Travels" },
      { name: "image", content: "/favicon.ico" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: "Guzel Travels — Your Trusted Travel Partner" },
      { property: "og:description", content: "Complete travel solutions: flights, visa consultancy, Umrah packages, and car rentals in Lahore, Pakistan." },
      { property: "og:url", content: "https://guzel-travels.com" },
      { property: "og:site_name", content: "Guzel Travels" },
      { property: "og:image", content: "/logo.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Guzel Travels — Your Trusted Travel Partner" },
      { name: "twitter:description", content: "Complete travel solutions: flights, visa consultancy, Umrah packages, and car rentals in Lahore, Pakistan." },
      { name: "twitter:image", content: "/logo.png" },
      { name: "twitter:creator", content: "@GuzelTravels" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Guzel Travels",
            "image": "https://guzel-travels.com/gts-logo.svg",
            "description": "Complete travel solutions: flights booking, visa consultancy, Umrah packages, and car rentals in Lahore, Pakistan",
            "url": "https://guzel-travels.com",
            "telephone": "+923021400045",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lahore",
              "addressRegion": "Punjab",
              "addressCountry": "PK"
            },
            "sameAs": [
              "https://www.facebook.com/guzel-travels",
              "https://www.instagram.com/guzel-travels",
              "https://www.twitter.com/GuzelTravels"
            ],
            "service": [
              {
                "@type": "Service",
                "name": "Flight Booking",
                "description": "Book flights worldwide at competitive prices"
              },
              {
                "@type": "Service",
                "name": "Visa Consultancy",
                "description": "Professional visa application assistance"
              },
              {
                "@type": "Service",
                "name": "Umrah Packages",
                "description": "Complete Umrah packages with accommodation and transport"
              },
              {
                "@type": "Service",
                "name": "Car Rental",
                "description": "Affordable car rental services in Lahore"
              }
            ]
          })}
        </script>
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
