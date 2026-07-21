import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

const baseUrl = "https://www.aivaultblog.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for AI Vault. Rules and conditions for using the website, including acceptable use, disclaimers, and limitations of liability.",
  alternates: { canonical: `${baseUrl}/terms` },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Vault",
    url: `${baseUrl}/terms`,
    title: "Terms of Service | AI Vault",
    description:
      "Terms of Service for AI Vault. Rules for using the website, disclaimers, and limitations of liability.",
    images: [{ url: `${baseUrl}/og-default.png`, width: 1200, height: 630, alt: "AI Vault" }],
  },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          color: "#f1f5f9",
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function TermsPage() {
  return (
    <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#e2e8f0", marginBottom: "0.5rem" }}>
        Terms of Service
      </h1>
      <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "3rem" }}>
        Last updated: July 21, 2026
      </p>

      <div style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "1rem" }}>
        <p style={{ marginBottom: "2rem" }}>
          By accessing or using AI Vault at www.aivaultblog.com (the &quot;Site&quot;), you agree to
          these Terms of Service. If you do not agree, please do not use the Site.
        </p>

        <Section title="1. Who runs this site">
          <p>
            AI Vault is an independent publication operated by Mahitosh Dey. Contact:{" "}
            <a href="mailto:hello@aivaultblog.com" style={{ color: "#a855f7" }}>
              hello@aivaultblog.com
            </a>. For details about the site, see the{" "}
            <Link href="/about" style={{ color: "#a855f7" }}>About page</Link>.
          </p>
        </Section>

        <Section title="2. What the Site provides">
          <p>
            The Site publishes reviews, tutorials, and comparisons of AI tools. Content is
            informational only and reflects the author&apos;s independent opinions at the time of
            writing. AI tools change often, so specific features and prices may be out of date.
          </p>
        </Section>

        <Section title="3. Acceptable use">
          <p style={{ marginBottom: "0.75rem" }}>You agree not to:</p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "0.75rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>Copy, republish, or resell content without written permission.</li>
            <li style={{ marginBottom: "0.4rem" }}>Use automated systems to scrape, index, or collect content from the Site.</li>
            <li style={{ marginBottom: "0.4rem" }}>Attempt to bypass security features, rate limits, or access controls.</li>
            <li style={{ marginBottom: "0.4rem" }}>Use the Site for any illegal, harmful, or fraudulent purpose.</li>
            <li>Impersonate the author, the Site, or any other person or entity.</li>
          </ul>
          <p>
            Reasonable, personal, non-commercial reading and sharing of individual articles is
            welcome and encouraged.
          </p>
        </Section>

        <Section title="4. Intellectual property">
          <p style={{ marginBottom: "0.75rem" }}>
            All original text, layouts, graphics, and code on the Site are the property of AI
            Vault and are protected by copyright and other intellectual property laws.
          </p>
          <p>
            Product names, brand names, and logos referenced in articles remain the property of
            their respective owners. Their use on the Site does not imply endorsement or
            affiliation.
          </p>
        </Section>

        <Section title="5. Affiliate and advertising disclosure">
          <p style={{ marginBottom: "0.75rem" }}>
            AI Vault uses affiliate links. When you click a link and make a purchase, we may earn
            a small commission at no additional cost to you. Full details are in the{" "}
            <Link href="/disclosure" style={{ color: "#a855f7" }}>Affiliate Disclosure</Link>.
          </p>
          <p>
            The Site may display advertising provided by third-party ad networks including
            Google AdSense. Ads and affiliate relationships never influence the content of
            reviews or the ratings we assign.
          </p>
        </Section>

        <Section title="6. No professional advice">
          <p>
            Content is for general information only. Nothing on the Site is intended to be
            financial, legal, medical, or other professional advice. Before making decisions
            based on our content, consult a qualified professional for your specific situation.
          </p>
        </Section>

        <Section title="7. Third-party services and links">
          <p>
            The Site links to third-party websites and services. We do not control those sites
            and are not responsible for their content, policies, pricing, or practices. Your use
            of any linked site is governed by that site&apos;s own terms and privacy policy.
          </p>
        </Section>

        <Section title="8. Disclaimer of warranties">
          <p>
            The Site is provided &quot;as is&quot; and &quot;as available&quot; without
            warranties of any kind, express or implied. We do not guarantee that the Site will
            be accurate, complete, current, uninterrupted, or free of errors. Any reliance you
            place on the content is at your own risk.
          </p>
        </Section>

        <Section title="9. Limitation of liability">
          <p>
            To the maximum extent permitted by law, AI Vault, Mahitosh Dey, and any affiliates
            are not liable for any indirect, incidental, special, consequential, or punitive
            damages arising from your use of the Site or reliance on its content. This includes,
            without limitation, loss of profits, data, goodwill, or other intangible losses.
          </p>
        </Section>

        <Section title="10. Content changes and updates">
          <p>
            We update articles regularly. The published and last-updated dates on each post
            indicate when content was current. We reserve the right to change, update, or remove
            content at any time without notice.
          </p>
        </Section>

        <Section title="11. Privacy">
          <p>
            Your use of the Site is also governed by our{" "}
            <Link href="/privacy" style={{ color: "#a855f7" }}>Privacy Policy</Link>, which
            explains what data we collect and how it is used.
          </p>
        </Section>

        <Section title="12. Changes to these Terms">
          <p>
            We may update these Terms from time to time. The &quot;Last updated&quot; date above
            reflects the most recent change. Continued use of the Site after changes take effect
            constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="13. Governing law">
          <p>
            These Terms are governed by the laws of India, without regard to conflict-of-law
            principles. Any dispute arising from these Terms or your use of the Site will be
            subject to the exclusive jurisdiction of the courts located in India.
          </p>
        </Section>

        <Section title="14. Contact">
          <p>
            Questions about these Terms? Email{" "}
            <a href="mailto:hello@aivaultblog.com" style={{ color: "#a855f7" }}>
              hello@aivaultblog.com
            </a>{" "}
            or use the{" "}
            <Link href="/contact" style={{ color: "#a855f7" }}>contact page</Link>.
          </p>
        </Section>
      </div>
    </div>
  );
}
