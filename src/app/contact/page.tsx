import type { Metadata } from "next";
import ContactForm from "./ContactForm";

const baseUrl = "https://www.aivaultblog.com";

export const metadata: Metadata = {
  title: "Contact Mahitosh Dey | AI Vault",
  description:
    "Get in touch about review requests, corrections, or general questions on AI tools. I respond within 24 to 48 hours. Direct email: hello@aivaultblog.com.",
  alternates: { canonical: `${baseUrl}/contact` },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Vault",
    url: `${baseUrl}/contact`,
    title: "Contact Mahitosh Dey | AI Vault",
    description:
      "Get in touch about review requests, corrections, or general questions on AI tools. I respond within 24 to 48 hours.",
    images: [
      { url: `${baseUrl}/og-default.png`, width: 1200, height: 630, alt: "AI Vault" },
    ],
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${baseUrl}/contact`,
  url: `${baseUrl}/contact`,
  name: "Contact AI Vault",
  description:
    "Contact page for AI Vault. Reach Mahitosh Dey for review requests, corrections, collaborations, or general questions.",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    name: "AI Vault",
    url: baseUrl,
  },
  publisher: {
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    name: "AI Vault",
    url: baseUrl,
    logo: { "@type": "ImageObject", url: `${baseUrl}/ailogo.png` },
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
  },
  mainEntity: {
    "@type": "Person",
    "@id": `${baseUrl}/about#mahitosh-dey`,
    name: "Mahitosh Dey",
    url: `${baseUrl}/about`,
    email: "hello@aivaultblog.com",
  },
  dateModified: "2026-07-21",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <ContactForm />
    </>
  );
}
