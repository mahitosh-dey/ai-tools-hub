import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Vault is written by Mahtosh Dey — an independent writer and AI tools researcher helping people cut through the hype and find tools that actually work.",
  alternates: { canonical: "https://www.aivaultblog.com/about" },
  openGraph: { url: "https://www.aivaultblog.com/about" },
};

export default function AboutPage() {
  return (
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
        {/* Avatar placeholder */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #a855f7, #22d3ee)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            flexShrink: 0,
          }}
        >
          M
        </div>

        <div style={{ flex: 1, minWidth: "220px" }}>
          <h2 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.25rem" }}>
            Mahtosh Dey
          </h2>
          <p style={{ color: "#a855f7", fontSize: "0.85rem", fontWeight: 500, marginBottom: "1rem" }}>
            Founder, AI Vault
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "1rem" }}>
            I started AI Vault because I got tired of reading AI tool reviews that were either pure hype
            or clearly written by someone who had never actually used the product. Every week I test
            tools, compare them against real tasks, and write honestly about what I find — including
            the parts that don&apos;t work.
          </p>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
            I&apos;ve been using AI tools in my own work since 2022. I&apos;m not a developer or an AI
            researcher — I&apos;m someone who needs these tools to actually be useful. That&apos;s the
            perspective I write from.
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
          Every post on this site is about one thing: helping you figure out which AI tools are
          worth your time and money, and how to use them well. That means honest reviews with real
          use cases, comparisons that don&apos;t sit on the fence, and tutorials that show the actual
          workflow rather than the marketing demo.
        </p>
        <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "0.95rem" }}>
          Categories covered: AI chatbots, writing tools, image generators, voice tools, video AI,
          productivity apps, and SEO tools.
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
          { icon: "🔍", title: "Hands-on tested", text: "Every tool reviewed is one I've actually used" },
          { icon: "💰", title: "Affiliate disclosure", text: "Some links earn a commission — always disclosed" },
          { icon: "📬", title: "Weekly newsletter", text: "New reviews and tutorials every week" },
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
        links. When you click a link and purchase a product, I earn a small commission at no extra
        cost to you. I only recommend tools I&apos;ve genuinely used and believe are worth it.
        Affiliate relationships never influence my ratings or conclusions — if something isn&apos;t
        worth buying, I say so.
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
          href="mailto:mahidey420@gmail.com"
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
