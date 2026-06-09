"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // TODO: Replace with your email provider (Mailchimp, ConvertKit, etc.)
    // For now, simulate success
    setStatus("success");
    setEmail("");
  };

  return (
    <section
      style={{
        background: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(34,211,238,0.1))",
        border: "1px solid rgba(168,85,247,0.3)",
        borderRadius: "16px",
        padding: "3rem 2rem",
        textAlign: "center",
        margin: "3rem auto",
        maxWidth: "600px",
      }}
    >
      <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📬</div>
      <h2
        style={{
          color: "#e2e8f0",
          fontSize: "1.6rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
        }}
      >
        Stay Ahead of AI
      </h2>
      <p style={{ color: "#94a3b8", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
        Get weekly reviews of the hottest AI tools, exclusive tutorials, and
        affiliate deals — straight to your inbox. No spam, unsubscribe anytime.
      </p>

      {status === "success" ? (
        <div
          style={{
            background: "rgba(52,211,153,0.15)",
            border: "1px solid rgba(52,211,153,0.3)",
            borderRadius: "8px",
            padding: "1rem",
            color: "#34d399",
            fontWeight: 600,
          }}
        >
          🎉 You&apos;re in! Check your inbox to confirm.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            style={{
              background: "#1a1a28",
              border: "1px solid #2a2a3d",
              borderRadius: "8px",
              padding: "0.7rem 1rem",
              color: "#e2e8f0",
              fontSize: "0.9rem",
              outline: "none",
              flex: "1",
              minWidth: "220px",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#a855f7")}
            onBlur={(e) => (e.target.style.borderColor = "#2a2a3d")}
          />
          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg, #a855f7, #22d3ee)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.7rem 1.5rem",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Subscribe Free
          </button>
        </form>
      )}
      <p style={{ color: "#475569", fontSize: "0.75rem", marginTop: "0.75rem" }}>
        Join 1,000+ readers. Free forever.
      </p>
    </section>
  );
}
