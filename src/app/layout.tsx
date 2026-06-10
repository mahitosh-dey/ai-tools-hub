import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const baseUrl = "https://www.aivaultblog.com";

export const metadata: Metadata = {
  title: {
    default: "AI Vault — Reviews, Tutorials & Comparisons",
    template: "%s | AI Vault",
  },
  description:
    "Honest reviews, tutorials, and comparisons of the best AI tools. Stay ahead with weekly insights on ChatGPT, Midjourney, Jasper, and more.",
  metadataBase: new URL(baseUrl),
  alternates: { canonical: baseUrl },
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="impact-site-verification" value="df6f5b88-794d-40ae-baf4-4c79a9864a56" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 64px)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
