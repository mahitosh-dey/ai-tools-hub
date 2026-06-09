import type { Metadata } from "next";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Subscribe to AI Vault newsletter for weekly AI tool reviews and tutorials.",
};

export default function NewsletterPage() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "#e2e8f0",
            marginBottom: "1rem",
          }}
        >
          The AI Vault Newsletter
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.7 }}>
          Every week, get the best AI tool discoveries, honest reviews, and
          exclusive affiliate deals — curated for makers, marketers, and
          developers.
        </p>
      </div>

      {/* What you get */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        {[
          { icon: "⭐", title: "Weekly Reviews", desc: "Deep-dives on the hottest new AI tools" },
          { icon: "💡", title: "Tutorials", desc: "Step-by-step guides to get more from AI" },
          { icon: "💰", title: "Deals & Discounts", desc: "Exclusive affiliate deals for subscribers" },
          { icon: "🚀", title: "What's New", desc: "Early access to trending AI tool launches" },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#12121a",
              border: "1px solid #2a2a3d",
              borderRadius: "12px",
              padding: "1.25rem",
            }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
            <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.3rem" }}>
              {item.title}
            </div>
            <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{item.desc}</div>
          </div>
        ))}
      </div>

      <NewsletterSignup />
    </div>
  );
}
