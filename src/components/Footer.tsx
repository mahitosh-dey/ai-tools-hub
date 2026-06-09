"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #2a2a3d",
        background: "#0a0a0f",
        marginTop: "4rem",
        padding: "3rem 1.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        {/* Brand */}
        <div>
          <span
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              background: "linear-gradient(135deg, #a855f7, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            AI Vault
          </span>
          <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.6 }}>
            Honest reviews, tutorials, and comparisons of the best AI tools to
            help you work smarter.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4
            style={{
              color: "#e2e8f0",
              fontWeight: 600,
              marginBottom: "0.75rem",
              fontSize: "0.9rem",
            }}
          >
            Categories
          </h4>
          {["Reviews", "Tutorials", "Comparisons", "Tools", "News"].map(
            (cat) => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                style={{
                  display: "block",
                  color: "#64748b",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  marginBottom: "0.4rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#a855f7")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#64748b")
                }
              >
                {cat}
              </Link>
            )
          )}
        </div>

        {/* Links */}
        <div>
          <h4
            style={{
              color: "#e2e8f0",
              fontWeight: 600,
              marginBottom: "0.75rem",
              fontSize: "0.9rem",
            }}
          >
            Quick Links
          </h4>
          {[
            { label: "About", href: "/about" },
            { label: "Newsletter", href: "/newsletter" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Affiliate Disclosure", href: "/disclosure" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                color: "#64748b",
                textDecoration: "none",
                fontSize: "0.85rem",
                marginBottom: "0.4rem",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#a855f7")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#64748b")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div>
          <h4
            style={{
              color: "#e2e8f0",
              fontWeight: 600,
              marginBottom: "0.75rem",
              fontSize: "0.9rem",
            }}
          >
            Stay Updated
          </h4>
          <p style={{ color: "#64748b", fontSize: "0.8rem", marginBottom: "0.75rem" }}>
            Get the latest AI tool reviews in your inbox.
          </p>
          <Link
            href="/newsletter"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #a855f7, #22d3ee)",
              color: "#fff",
              padding: "0.5rem 1.25rem",
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            Subscribe Free →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #1a1a28",
          paddingTop: "1.5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <p style={{ color: "#475569", fontSize: "0.8rem" }}>
          © {year} AI Vault. All rights reserved.
        </p>
        <p style={{ color: "#475569", fontSize: "0.75rem" }}>
          This site contains affiliate links. We may earn a commission at no
          extra cost to you.
        </p>
      </div>
    </footer>
  );
}
