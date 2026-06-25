import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Vault is written by Mahitosh Dey, a developer who has been testing AI tools since 2022. Honest reviews and tutorials — no hype, no paid placements.",
  alternates: { canonical: "https://www.aivaultblog.com/about" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Vault",
    url: "https://www.aivaultblog.com/about",
    title: "About | AI Vault",
    description: "AI Vault is written by Mahitosh Dey, a developer who has been testing AI tools since 2022. Honest reviews and tutorials — no hype, no paid placements.",
    images: [{ url: "https://www.aivaultblog.com/og-default.png", width: 1200, height: 630, alt: "AI Vault" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mahitosh Dey",
  url: "https://www.aivaultblog.com/about",
  sameAs: ["https://www.linkedin.com/in/mahitosh-dey-b70575147/"],
  jobTitle: "Founder, AI Vault",
  description: "Developer and founder of AI Vault. Testing and reviewing AI tools since 2022.",
};

export default function AboutPage() {
  const postCount = getAllPosts().length;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

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
          src="/images/mahitosh-dey.jpeg"
          alt="Mahitosh Dey"
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
            Founder, AI Vault
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1rem" }}>
            I&apos;m a developer, been writing code professionally since 2019. I started using AI tools
            in my own projects in 2022, mostly to see what could actually speed up real work. Some did.
            A lot didn&apos;t. I built AI Vault to document what I found, not what the marketing pages say.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
            I&apos;ve published {postCount}+ reviews and tutorials here, covering tools I&apos;ve personally tested.
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
  );
}
