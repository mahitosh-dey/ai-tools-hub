import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "AI Vault's affiliate disclosure. We earn commissions on some links at no cost to you. This never affects how we rate or review AI tools.",
  alternates: { canonical: "https://www.aivaultblog.com/disclosure" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Vault",
    url: "https://www.aivaultblog.com/disclosure",
    title: "Affiliate Disclosure | AI Vault",
    description: "AI Vault's affiliate disclosure. We earn commissions on some links at no cost to you. This never affects how we rate or review AI tools.",
    images: [{ url: "https://www.aivaultblog.com/og-default.png", width: 1200, height: 630, alt: "AI Vault" }],
  },
};

export default function DisclosurePage() {
  return (
    <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#e2e8f0", marginBottom: "0.5rem" }}>
        Affiliate Disclosure
      </h1>
      <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "3rem" }}>
        Last updated: June 9, 2025
      </p>

      <div style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: "1rem" }}>

        <div
          style={{
            background: "rgba(168,85,247,0.08)",
            border: "1px solid rgba(168,85,247,0.25)",
            borderRadius: "10px",
            padding: "1.25rem 1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <p style={{ margin: 0, fontSize: "1rem" }}>
            <strong style={{ color: "#c084fc" }}>Short version:</strong> Some links on this
            website are affiliate links. If you click one and make a purchase or sign up, we
            may earn a commission — at no extra cost to you. This helps us keep the blog
            running. We only recommend tools we genuinely believe are worth it.
          </p>
        </div>

        <Section title="What Is Affiliate Marketing?">
          <p>
            Affiliate marketing is a way for content creators to earn income by recommending
            products and services. When a company has an affiliate programme, they give
            publishers (like us) a unique tracking link. If a reader clicks that link and then
            makes a purchase or signs up for a paid plan, the company pays us a small
            commission.
          </p>
          <p style={{ marginTop: "1rem" }}>
            The price you pay is never affected by affiliate links. You pay exactly the same
            amount whether you use our link or go directly to the company's website.
          </p>
        </Section>

        <Section title="Which Links Are Affiliate Links?">
          <p>
            On AI Vault, some links to AI tools, software products, and services may be
            affiliate links. When a post contains affiliate links, we note it clearly at the
            top of the article.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Types of links that may earn us a commission include:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>Links to AI writing tools (e.g. Jasper AI, Copy.ai)</li>
            <li style={{ marginBottom: "0.4rem" }}>Links to AI image generation tools (e.g. Midjourney)</li>
            <li style={{ marginBottom: "0.4rem" }}>Links to productivity and SEO software</li>
            <li style={{ marginBottom: "0.4rem" }}>Links to hosting, domain, and web services</li>
          </ul>
          <p style={{ marginTop: "1rem" }}>
            Links to free resources, official documentation, news sources, and research papers
            are never affiliate links.
          </p>
        </Section>

        <Section title="How This Affects Our Reviews">
          <p>
            We want to be completely honest with you about this: we do not let affiliate
            relationships influence our editorial opinions. Our reviews reflect our genuine
            assessment of each product based on actual use.
          </p>
          <p style={{ marginTop: "1rem" }}>
            To be specific:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>
              We do not give positive reviews to products simply because they have an
              affiliate programme.
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              We include affiliate links only for tools we would recommend regardless of any
              commission.
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              We will honestly state when a product is not worth the price, even if it has an
              affiliate programme.
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              Some tools we review have no affiliate programme. We review them anyway if they
              are relevant and useful.
            </li>
          </ul>
        </Section>

        <Section title="FTC Compliance">
          <p>
            This disclosure is made in accordance with the United States Federal Trade
            Commission (FTC) guidelines on endorsements and testimonials (16 CFR, Part 255).
            These guidelines require that we disclose any material connection between ourselves
            and the companies whose products we recommend — including receiving compensation
            through affiliate programmes.
          </p>
          <p style={{ marginTop: "1rem" }}>
            We are also committed to transparency in line with advertising standards in other
            jurisdictions, including the UK&apos;s ASA guidelines.
          </p>
        </Section>

        <Section title="Questions?">
          <p>
            If you have any questions about our affiliate relationships or whether a specific
            link on this site is an affiliate link, please contact us:
          </p>
          <div
            style={{
              background: "#1a1a28",
              border: "1px solid #2a2a3d",
              borderRadius: "8px",
              padding: "1rem 1.25rem",
              marginTop: "0.75rem",
            }}
          >
            <p style={{ margin: 0 }}>
              <strong style={{ color: "#e2e8f0" }}>AI Vault</strong><br />
              Email:{" "}
              <a href="mailto:mahidey420@gmail.com" style={{ color: "#a855f7" }}>
                mahidey420@gmail.com
              </a>
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "#e2e8f0",
          marginBottom: "0.75rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid #2a2a3d",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
