import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About AI Vault — who we are and what we do.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          color: "#e2e8f0",
          marginBottom: "1.5rem",
        }}
      >
        About AI Vault
      </h1>

      <div
        style={{
          background: "#12121a",
          border: "1px solid #2a2a3d",
          borderRadius: "12px",
          padding: "2rem",
          marginBottom: "2rem",
        }}
      >
        <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "1rem" }}>
          <strong style={{ color: "#e2e8f0" }}>AI Vault</strong> is an
          independent blog dedicated to helping individuals, creators, and
          businesses navigate the fast-moving world of artificial intelligence.
        </p>
        <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "1rem" }}>
          We publish honest, hands-on reviews of AI writing tools, image
          generators, productivity apps, and more — so you can make informed
          decisions before spending your money.
        </p>
        <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>
          We use affiliate links to keep this blog running. When you purchase
          through our links, we earn a small commission at no extra cost to you.
          We only recommend tools we genuinely believe in.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {[
          { icon: "✅", text: "Independent & unsponsored reviews" },
          { icon: "🔍", text: "Tested tools with real use cases" },
          { icon: "💰", text: "Transparent affiliate disclosures" },
          { icon: "📬", text: "Weekly newsletter, no spam" },
        ].map((item) => (
          <div
            key={item.text}
            style={{
              background: "#12121a",
              border: "1px solid #2a2a3d",
              borderRadius: "8px",
              padding: "1rem",
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              color: "#94a3b8",
              fontSize: "0.9rem",
            }}
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

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
          }}
        >
          Read Our Reviews
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
            border: "1px solid #2a2a3d",
          }}
        >
          Subscribe to Newsletter
        </Link>
      </div>
    </div>
  );
}
