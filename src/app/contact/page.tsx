import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with AI Vault — review requests, collaborations, or general questions.",
  alternates: { canonical: "https://www.aivaultblog.com/contact" },
  openGraph: { url: "https://www.aivaultblog.com/contact" },
};

export default function ContactPage() {
  return <ContactForm />;
}
