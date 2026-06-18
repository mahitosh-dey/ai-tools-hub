import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const orbitron = Orbitron({ variable: "--font-orbitron", subsets: ["latin"], weight: ["700", "800", "900"] });

const baseUrl = "https://www.aivaultblog.com";

export const metadata: Metadata = {
  title: {
    default: "AI Vault — Reviews, Tutorials & Comparisons",
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
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "AI Vault" }],
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
  name: "AI Vault",
  url: baseUrl,
  description: "Honest reviews, tutorials, and comparisons of the best AI tools.",
  publisher: { "@type": "Organization", name: "AI Vault", url: baseUrl },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${baseUrl}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

const GA_ID = "G-BTWT37158Z";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable}`}>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 64px)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
