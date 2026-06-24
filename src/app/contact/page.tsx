import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the AI Vault team for review requests, collaborations, or general questions about AI tools. We respond within 48 hours.",
  alternates: { canonical: "https://www.aivaultblog.com/contact" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Vault",
    url: "https://www.aivaultblog.com/contact",
    title: "Contact | AI Vault",
    description: "Get in touch with the AI Vault team for review requests, collaborations, or general questions about AI tools. We respond within 48 hours.",
    images: [{ url: "https://www.aivaultblog.com/og-default.png", width: 1200, height: 630, alt: "AI Vault" }],
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
