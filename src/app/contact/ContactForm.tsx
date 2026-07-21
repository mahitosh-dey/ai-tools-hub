"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:hello@aivaultblog.com?subject=${encodeURIComponent(form.subject || "Contact from AI Vault")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setStatus("success");
  };

  const inputStyle = {
    width: "100%",
    background: "#12121a",
    border: "1px solid #2a2a3d",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    color: "#e2e8f0",
    fontSize: "0.95rem",
    outline: "none",
    boxSizing: "border-box" as const,
  };

  return (
    <div style={{ maxWidth: "680px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#e2e8f0", marginBottom: "0.5rem" }}>
        Contact Mahitosh
      </h1>
      <p style={{ color: "#94a3b8", marginBottom: "1.5rem", lineHeight: 1.7 }}>
        I&apos;m Mahitosh Dey, the founder and sole author of AI Vault. Every message here comes to me
        directly. Whether it&apos;s a review request, a correction, or a collaboration idea, I read all of
        them. You can also reach me directly at{" "}
        <a href="mailto:hello@aivaultblog.com" style={{ color: "#a855f7" }}>
          hello@aivaultblog.com
        </a>.
      </p>
      <p style={{ color: "#64748b", marginBottom: "2.5rem", lineHeight: 1.7, fontSize: "0.9rem" }}>
        Typical response time: within 24 to 48 hours on business days. If you flagged a factual error
        in a post, I aim to update within 48 hours.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.75rem",
          marginBottom: "2rem",
        }}
      >
        {[
          { icon: "✍️", label: "Review request", desc: "Suggest an AI tool for us to review" },
          { icon: "🤝", label: "Collaboration", desc: "Partnerships and guest posts" },
          { icon: "🐛", label: "Report an error", desc: "Found incorrect info in a post?" },
          { icon: "💬", label: "General question", desc: "Anything else on your mind" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              background: "#12121a",
              border: "1px solid #2a2a3d",
              borderRadius: "8px",
              padding: "0.85rem 1rem",
            }}
          >
            <div style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>{item.icon}</div>
            <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "0.85rem" }}>{item.label}</div>
            <div style={{ color: "#64748b", fontSize: "0.75rem" }}>{item.desc}</div>
          </div>
        ))}
      </div>

      {status === "success" ? (
        <div
          style={{
            background: "rgba(52,211,153,0.1)",
            border: "1px solid rgba(52,211,153,0.3)",
            borderRadius: "10px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>📬</div>
          <h3 style={{ color: "#34d399", marginBottom: "0.5rem" }}>Your mail app should have opened</h3>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
            If it didn&apos;t, email me directly at{" "}
            <a href="mailto:hello@aivaultblog.com" style={{ color: "#a855f7" }}>
              hello@aivaultblog.com
            </a>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", color: "#94a3b8", fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="John Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#a855f7")}
                onBlur={(e) => (e.target.style.borderColor = "#2a2a3d")}
              />
            </div>
            <div>
              <label style={{ display: "block", color: "#94a3b8", fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#a855f7")}
                onBlur={(e) => (e.target.style.borderColor = "#2a2a3d")}
              />
            </div>
          </div>

          <div>
            <label style={{ display: "block", color: "#94a3b8", fontSize: "0.85rem", marginBottom: "0.4rem" }}>
              Subject
            </label>
            <input
              type="text"
              required
              placeholder="What's this about?"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#a855f7")}
              onBlur={(e) => (e.target.style.borderColor = "#2a2a3d")}
            />
          </div>

          <div>
            <label style={{ display: "block", color: "#94a3b8", fontSize: "0.85rem", marginBottom: "0.4rem" }}>
              Message
            </label>
            <textarea
              required
              rows={6}
              placeholder="Tell us more..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.target.style.borderColor = "#a855f7")}
              onBlur={(e) => (e.target.style.borderColor = "#2a2a3d")}
            />
          </div>

          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg, #a855f7, #22d3ee)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.85rem",
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Send Message →
          </button>
          <p style={{ color: "#475569", fontSize: "0.75rem", textAlign: "center" }}>
            I typically respond within 24 to 48 hours. Your details are used only to reply and
            are never shared or added to a mailing list.
          </p>
        </form>
      )}
    </div>
  );
}
