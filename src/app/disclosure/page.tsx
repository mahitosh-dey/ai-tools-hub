import type { Metadata } from "next";

const DESCRIPTION =
  "How AI Vault makes money: affiliate commissions and paid placements. What each one is, how we label it, and why neither one buys a good review.";

export const metadata: Metadata = {
  title: "Disclosure: Affiliate Links and Paid Placements",
  description: DESCRIPTION,
  alternates: { canonical: "https://www.aivaultblog.com/disclosure" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Vault",
    url: "https://www.aivaultblog.com/disclosure",
    title: "Disclosure: Affiliate Links and Paid Placements | AI Vault",
    description: DESCRIPTION,
    images: [{ url: "https://www.aivaultblog.com/og-default.png", width: 1200, height: 630, alt: "AI Vault" }],
  },
};

export default function DisclosurePage() {
  return (
    <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#e2e8f0", marginBottom: "0.5rem" }}>
        Disclosure
      </h1>
      <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "3rem" }}>
        Last updated: August 5, 2026
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
            <strong style={{ color: "#c084fc" }}>Short version:</strong> AI Vault makes money
            two ways. Some links are affiliate links, which pay us a commission if you buy,
            at no extra cost to you. A small number of posts are paid placements, where a
            company paid for the post to exist. Those are labelled at the top of the post and
            in every listing, and you can spot them by the amber Sponsored badge. Neither
            arrangement buys a good review. If a tool is bad, we say so and keep the fee.
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

        <Section title="Paid Placements and Sponsored Posts">
          <p>
            A paid placement is different from an affiliate link, and it is worth being
            precise about the difference. An affiliate link pays us only if you click it and
            buy something. A paid placement means a company paid a flat fee for the post to
            exist at all. That is a bigger conflict of interest, so it gets a bigger label.
          </p>
          <p style={{ marginTop: "1rem" }}>
            How you will always be able to tell:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>
              An amber <strong>Paid placement</strong> box sits at the top of the post, above
              the article, naming the company that paid.
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              An amber <strong>Sponsored</strong> badge appears on the post card everywhere it
              is listed, so you know before you click.
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              Every outbound link to the advertiser carries{" "}
              <code style={{ color: "#c084fc", fontSize: "0.85rem" }}>rel=&quot;sponsored&quot;</code>,
              which tells search engines the link was paid for and stops it passing ranking
              credit.
            </li>
          </ul>

          <p style={{ marginTop: "1.5rem" }}>
            <strong style={{ color: "#e2e8f0" }}>What the money buys.</strong> It buys the
            time to test the product properly and the space on this site to publish the
            result. That is all it buys.
          </p>
          <p style={{ marginTop: "1rem" }}>
            <strong style={{ color: "#e2e8f0" }}>What it does not buy.</strong> Advertisers do
            not get approval over the wording. They do not see the post before it is
            published. They cannot ask for a line to be removed after publication. And they
            do not get a positive verdict. That last one is agreed in writing before any money
            changes hands, because it is the only part of the arrangement that becomes awkward
            afterwards.
          </p>
          <p style={{ marginTop: "1rem" }}>
            If a product turns out to be poor, one of two things happens, agreed up front:
            the review says it is poor and we keep the fee, or the advertiser pays a partial
            fee for the testing work and nothing is published. There is no third option where
            we publish something we do not believe.
          </p>

          <p style={{ marginTop: "1.5rem" }}>
            <strong style={{ color: "#e2e8f0" }}>Two rules we hold ourselves to.</strong>
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li style={{ marginBottom: "0.4rem" }}>
              Paid placements are never inserted into an existing comparison post, roundup or
              best-of list. Those rankings are not for sale at any price, because a paid entry
              in a ranking makes the whole ranking worthless. A paid placement gets its own
              post. If the product then earns a spot in a roundup on its own merits, it goes
              in there separately and for free.
            </li>
            <li style={{ marginBottom: "0.4rem" }}>
              If an advertiser shuts down or their product stops working inside the placement
              period, the post gets a dated note saying so, the same as any other post on this
              site. Paying does not exempt a tool from that.
            </li>
          </ul>

          <p style={{ marginTop: "1.5rem" }}>
            If you are a company interested in a paid placement, the rules above are the
            terms, and they are not negotiable. Enquiries go to the address at the bottom of
            this page.
          </p>
        </Section>

        <Section title="FTC Compliance">
          <p>
            This disclosure is made in accordance with the United States Federal Trade
            Commission (FTC) guidelines on endorsements and testimonials (16 CFR, Part 255).
            These guidelines require that we disclose any material connection between ourselves
            and the companies whose products we recommend. That covers both kinds of payment
            described above: commissions from affiliate programmes, and flat fees for paid
            placements.
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
              <a href="mailto:hello@aivaultblog.com" style={{ color: "#a855f7" }}>
                hello@aivaultblog.com
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
