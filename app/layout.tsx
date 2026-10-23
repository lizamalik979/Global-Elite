import type { Metadata } from "next";
import { Suspense } from "react";
import { Plus_Jakarta_Sans, Inter, Playfair_Display } from "next/font/google";
import { SITE_URL } from "./lib/sitemap-utils";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopProgressBar from "./components/TopProgressBar";

// Google Tag Manager container (ads / analytics tags are managed in GTM).
// Standard GTM snippet: loader as early as possible in <head>, <noscript>
// iframe first thing in <body> — rendered server-side so it is in the
// initial HTML on every page.
const GTM_ID = "GTM-PZL58NM2";
const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Serif display face used by the About page editorial headings.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const SITE_TITLE =
  "Connecting Global Opportunities with AI-Powered Innovation";
export const SITE_DESCRIPTION =
  "Empowering businesses with AI automation, SaaS, digital marketing, consulting, travel services, and apostille assistance to connect with global opportunities.";

export const metadata: Metadata = {
  // Makes every relative OG/canonical URL absolute
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  // Index everything and allow full-size image/snippet previews — required for
  // the article and FAQ rich results to show thumbnails.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Shared link preview (WhatsApp, LinkedIn, X, Slack, Facebook)
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Global Elite",
    type: "website",
    url: "/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${playfair.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }} />
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Suspense: useSearchParams inside the bar must not block prerendering */}
        <Suspense fallback={null}>
          <TopProgressBar />
        </Suspense>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
