import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

const baseUrl = "https://www.aivaultblog.com";

export const metadata: Metadata = {
  title: "About Mahitosh Dey & AI Vault | Independent AI Tool Reviews",
  description:
    "AI Vault is written by Mahitosh Dey, a developer testing AI tools since 2022. Independent, hands-on reviews and tutorials. No hype, no paid placements.",
  alternates: { canonical: `${baseUrl}/about` },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Vault",
    url: `${baseUrl}/about`,
    title: "About Mahitosh Dey & AI Vault",
    description:
      "AI Vault is written by Mahitosh Dey, a developer testing AI tools since 2022. Independent, hands-on reviews and tutorials.",
    images: [
      { url: `${baseUrl}/og-default.png`, width: 1200, height: 630, alt: "AI Vault" },
    ],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${baseUrl}/about#mahitosh-dey`,
  name: "Mahitosh Dey",
  url: `${baseUrl}/about`,
  image: `${baseUrl}/images/mahitosh-dey.webp`,
  jobTitle: "Founder, AI Vault",
  description:
    "Developer and founder of AI Vault. Independent reviewer of AI tools since 2022.",
  email: "hello@aivaultblog.com",
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "AI writing tools",
    "AI image generation",
    "AI coding assistants",
    "Prompt engineering",
    "Software development",
  ],
  sameAs: [
    "https://www.linkedin.com/in/mahitosh-dey-b70575147/",
  ],
  worksFor: {
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    name: "AI Vault",
    url: baseUrl,
  },
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${baseUrl}/about`,
  url: `${baseUrl}/about`,
  name: "About AI Vault",
  description:
    "About AI Vault and Mahitosh Dey, the developer behind the reviews and tutorials.",
  isPartOf: { "@type": "WebSite", "@id": `${baseUrl}#website`, name: "AI Vault", url: baseUrl },
  mainEntity: { "@id": `${baseUrl}/about#mahitosh-dey` },
  publisher: {
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    name: "AI Vault",
    url: baseUrl,
    logo: { "@type": "ImageObject", url: `${baseUrl}/ailogo.png` },
  },
  dateModified: "2026-07-21",
};

export default function AboutPage() {
  const postCount = getAllPosts().length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem" }}>

      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: 800,
          color: "#f1f5f9",
          marginBottom: "0.5rem",
          letterSpacing: "-0.02em",
        }}
      >
        About AI Vault
      </h1>
      <p style={{ color: "#64748b", fontSize: "1rem", marginBottom: "3rem" }}>
        The person behind the posts
      </p>

      {/* Author card */}
      <div
        style={{
          background: "#12121a",
          border: "1px solid #2a2a3d",
          borderRadius: "16px",
          padding: "2rem",
          marginBottom: "2.5rem",
          display: "flex",
          gap: "1.75rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <Image
          src="/images/mahitosh-dey.webp"
          alt="Mahitosh Dey, founder of AI Vault"
          width={80}
          height={80}
          style={{
            borderRadius: "50%",
            flexShrink: 0,
            border: "2px solid rgba(168,85,247,0.3)",
            objectFit: "cover",
          }}
        />

        <div style={{ flex: 1, minWidth: "220px" }}>
          <h2 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.25rem" }}>
            Mahitosh Dey
          </h2>
          <p style={{ color: "#a855f7", fontSize: "0.85rem", fontWeight: 500, marginBottom: "1rem" }}>
            Founder & sole author, AI Vault
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1rem" }}>
            I&apos;m a developer, been writing code professionally since 2019. I started using AI tools
            in my own projects in 2022, mostly to see what could actually speed up real work. Some did.
            A lot didn&apos;t. I built AI Vault to document what I found, not what the marketing pages say.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
            I&apos;ve published {postCount} reviews and tutorials here, covering tools I&apos;ve personally tested.
            I pay for Claude Code myself. For other tools I use free trials where available. Nothing on
            this site is written from a press release or a vendor briefing.
          </p>
        </div>
      </div>

      {/* What this site is */}
      <div
        style={{
          background: "#12121a",
          border: "1px solid #2a2a3d",
          borderRadius: "12px",
          padding: "1.75rem 2rem",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1.05rem", marginBottom: "1rem" }}>
          What AI Vault covers
        </h3>
        <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
          Each post is about one question: is this tool actually worth using? That means testing it
          against real tasks, not demo prompts. Reviews include what works, what breaks, and whether
          the price makes sense. Tutorials show the actual workflow, step by step.
        </p>
        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
          Topics covered: AI chatbots, coding tools, writing assistants, image generators,
          productivity apps, and tool comparisons.
        </p>
      </div>

      {/* How I test: editorial methodology */}
      <div
        style={{
          background: "#12121a",
          border: "1px solid #2a2a3d",
          borderRadius: "12px",
          padding: "1.75rem 2rem",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1.05rem", marginBottom: "1rem" }}>
          How I test and review AI tools
        </h3>
        <ol style={{ color: "#94a3b8", lineHeight: 1.9, fontSize: "0.95rem", paddingLeft: "1.25rem", margin: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong style={{ color: "#e2e8f0" }}>Real usage first.</strong> I use the tool on my own projects for at least two weeks before writing a review.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong style={{ color: "#e2e8f0" }}>Same prompts across tools.</strong> For comparisons, I run identical inputs through every option so results are directly comparable.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong style={{ color: "#e2e8f0" }}>Pricing verified at source.</strong> Every price is checked against the vendor&apos;s pricing page on the day of publication.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong style={{ color: "#e2e8f0" }}>Honest scoring.</strong> Ratings reflect what I actually observed, not what would please a vendor. Weak features get called out even in favourite tools.
          </li>
          <li>
            <strong style={{ color: "#e2e8f0" }}>Updated regularly.</strong> Popular posts are refreshed every 3 to 6 months so the pricing, features, and verdicts stay current.
          </li>
        </ol>
      </div>

      {/* Editorial standards & corrections */}
      <div
        style={{
          background: "#12121a",
          border: "1px solid #2a2a3d",
          borderRadius: "12px",
          padding: "1.75rem 2rem",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1.05rem", marginBottom: "1rem" }}>
          Editorial standards and corrections
        </h3>
        <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
          Every post lists its published date and the last-updated date at the top. If a tool changes
          significantly, the post is updated and the change is reflected in the dates.
        </p>
        <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
          Found an error, an outdated price, or a factual mistake? Email{" "}
          <a href="mailto:hello@aivaultblog.com" style={{ color: "#a855f7" }}>
            hello@aivaultblog.com
          </a>{" "}
          or use the <Link href="/contact" style={{ color: "#a855f7" }}>contact page</Link>. Corrections are made within 48 hours.
        </p>
        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
          AI Vault does not accept paid content, sponsored posts, or vendor-approved reviews. Affiliate
          commissions never influence the verdict. See the{" "}
          <Link href="/disclosure" style={{ color: "#a855f7" }}>full affiliate disclosure</Link> for details.
        </p>
      </div>

      {/* Trust signals */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}
      >
        {[
          { icon: "✅", title: "Independent", text: "No brand sponsorships or paid placements" },
          { icon: "🔍", title: "Hands-on tested", text: "Every tool reviewed is one I have personally used" },
          { icon: "💰", title: "Affiliate disclosure", text: "Some links earn a commission, always disclosed upfront" },
          { icon: "📬", title: "Newsletter", text: "Subscribe to get notified when new reviews go out" },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#12121a",
              border: "1px solid #2a2a3d",
              borderRadius: "10px",
              padding: "1.1rem 1.25rem",
              color: "#94a3b8",
              fontSize: "0.875rem",
            }}
          >
            <div style={{ fontSize: "1.25rem", marginBottom: "0.4rem" }}>{item.icon}</div>
            <div style={{ color: "#e2e8f0", fontWeight: 600, marginBottom: "0.25rem" }}>{item.title}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>

      {/* Affiliate note */}
      <div
        style={{
          background: "rgba(168,85,247,0.06)",
          border: "1px solid rgba(168,85,247,0.2)",
          borderRadius: "10px",
          padding: "1.25rem 1.5rem",
          marginBottom: "2.5rem",
          fontSize: "0.875rem",
          color: "#94a3b8",
          lineHeight: 1.7,
        }}
      >
        <strong style={{ color: "#c084fc" }}>Affiliate transparency:</strong> AI Vault uses affiliate
        links. When you click a link and make a purchase, I earn a small commission at no extra cost
        to you. I only recommend tools I have personally used. If a tool is not worth the price, I
        say so in the review. The commission does not change that.
      </div>

      {/* Ownership & contact */}
      <div
        style={{
          background: "#12121a",
          border: "1px solid #2a2a3d",
          borderRadius: "12px",
          padding: "1.5rem 2rem",
          marginBottom: "2.5rem",
          fontSize: "0.875rem",
          color: "#94a3b8",
          lineHeight: 1.7,
        }}
      >
        <h3 style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.75rem" }}>
          Ownership and contact
        </h3>
        <p style={{ marginBottom: "0.5rem" }}>
          <strong style={{ color: "#e2e8f0" }}>Owner:</strong> Mahitosh Dey (independent operator).
        </p>
        <p style={{ marginBottom: "0.5rem" }}>
          <strong style={{ color: "#e2e8f0" }}>Email:</strong>{" "}
          <a href="mailto:hello@aivaultblog.com" style={{ color: "#a855f7" }}>
            hello@aivaultblog.com
          </a>
        </p>
        <p>
          <strong style={{ color: "#e2e8f0" }}>Response time:</strong> within 48 hours on business days.
        </p>
      </div>

      {/* CTA */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link
          href="/blog"
          style={{
            background: "linear-gradient(135deg, #a855f7, #22d3ee)",
            color: "#fff",
            padding: "0.7rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.9rem",
          }}
        >
          Read the latest posts
        </Link>
        <Link
          href="/newsletter"
          style={{
            background: "transparent",
            color: "#e2e8f0",
            padding: "0.7rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
            border: "1px solid #2a2a3d",
          }}
        >
          Subscribe free
        </Link>
        <a
          href="https://www.linkedin.com/in/mahitosh-dey-b70575147/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "transparent",
            color: "#64748b",
            padding: "0.7rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "0.9rem",
            border: "1px solid #2a2a3d",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
        <a
          href="mailto:hello@aivaultblog.com"
          style={{
            background: "transparent",
            color: "#64748b",
            padding: "0.7rem 1.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "0.9rem",
            border: "1px solid #2a2a3d",
          }}
        >
          Get in touch
        </a>
      </div>
    </div>
    </>
  );
}
