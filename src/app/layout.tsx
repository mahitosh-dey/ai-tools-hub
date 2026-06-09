import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AI Vault — Reviews, Tutorials & Comparisons",
    template: "%s | AI Vault",
  },
  description:
    "Honest reviews, tutorials, and comparisons of the best AI tools. Stay ahead with weekly insights on ChatGPT, Midjourney, Jasper, and more.",
  keywords: ["AI tools", "AI reviews", "ChatGPT", "Midjourney", "AI tutorials"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Vault",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 64px)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
