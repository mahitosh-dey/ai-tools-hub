import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const baseUrl = "https://www.aivaultblog.com";

export const metadata: Metadata = {
  title: {
    default: "AI Vault: Reviews, Tutorials & Comparisons",
    template: "%s | AI Vault",
  },
  description:
    "Honest reviews, tutorials, and comparisons of the best AI tools. Stay ahead with weekly insights on ChatGPT, Midjourney, Jasper, and more.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Vault",
    url: baseUrl,
    images: [
      { url: "/og-default.png", width: 1200, height: 630, alt: "AI Vault" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
  other: {
    "impact-site-verification": "df6f5b88-794d-40ae-baf4-4c79a9864a56",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}#website`,
  name: "AI Vault",
  url: baseUrl,
  description:
    "Honest reviews, tutorials, and comparisons of the best AI tools.",
  inLanguage: "en",
  publisher: { "@id": `${baseUrl}#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}#organization`,
  name: "AI Vault",
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/ailogo.png`,
    width: 500,
    height: 500,
  },
  description:
    "Independent publication covering AI tool reviews, tutorials, and comparisons.",
  founder: {
    "@type": "Person",
    "@id": `${baseUrl}/about#mahitosh-dey`,
    name: "Mahitosh Dey",
    url: `${baseUrl}/about`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@aivaultblog.com",
    url: `${baseUrl}/contact`,
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com/in/mahitosh-dey-b70575147/",
  ],
};

const GA_ID = "G-BTWT37158Z";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Script id="ga-consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});`}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 64px)" }}>{children}</main>
        <Footer />
        <CookieConsent />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="2Nu3zKYM1IwXV0F1WUQ2ww"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
