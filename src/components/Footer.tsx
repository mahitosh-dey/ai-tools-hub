"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid #252538",
        background: "#0d0d14",
        marginTop: "5rem",
        padding: "3.5rem 1.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "2.5rem",
          marginBottom: "2.5rem",
        }}
        className="footer-grid"
      >
        {/* Brand column */}
        <div>
          <div style={{ marginBottom: "0.75rem" }}>
            <Image
              src="/logo.png"
              alt="AI Vault"
              width={56}
              height={56}
              style={{ display: "block", borderRadius: "8px" }}
            />
          </div>
          <p
            style={{
              color: "#475569",
              fontSize: "0.85rem",
              lineHeight: 1.7,
              maxWidth: "260px",
              marginBottom: "1.25rem",
            }}
          >
            Honest, in-depth reviews and tutorials for AI tools. No hype — just
            real assessments to help you work smarter.
          </p>
          <a
            href="mailto:hello@aivaultblog.com"
            style={{
              color: "#64748b",
              fontSize: "0.82rem",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              marginBottom: "0.6rem",
            }}
          >
            <span>✉️</span> hello@aivaultblog.com
          </a>
          <a
            href="https://www.youtube.com/channel/UC57URqFRYQVJgrVUBa92Zsg"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#64748b",
              fontSize: "0.82rem",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#ff4444")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#64748b")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube
          </a>
        </div>

        {/* Categories */}
        <div>
          <h4
            style={{
              color: "#94a3b8",
              fontWeight: 600,
              marginBottom: "1rem",
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Categories
          </h4>
          {[
            { label: "Reviews", href: "/category/reviews" },
            { label: "Tutorials", href: "/category/tutorials" },
            { label: "Comparisons", href: "/category/comparisons" },
            { label: "Tools", href: "/category/tools" },
          ].map((item) => (
            <FooterLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>

        {/* Pages */}
        <div>
          <h4
            style={{
              color: "#94a3b8",
              fontWeight: 600,
              marginBottom: "1rem",
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Pages
          </h4>
          {[
            { label: "Blog", href: "/blog" },
            { label: "About", href: "/about" },
            { label: "Newsletter", href: "/newsletter" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <FooterLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>

        {/* Legal */}
        <div>
          <h4
            style={{
              color: "#94a3b8",
              fontWeight: 600,
              marginBottom: "1rem",
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Legal
          </h4>
          {[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Affiliate Disclosure", href: "/disclosure" },
          ].map((item) => (
            <FooterLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid #1c1c2e",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <p style={{ color: "#334155", fontSize: "0.8rem" }}>
          © {year} AI Vault. All rights reserved.
        </p>
        <p style={{ color: "#334155", fontSize: "0.78rem" }}>
          Some links are affiliate links.{" "}
          <Link href="/disclosure" style={{ color: "#475569", textDecoration: "underline" }}>
            Learn more
          </Link>
        </p>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        color: "#475569",
        textDecoration: "none",
        fontSize: "0.85rem",
        marginBottom: "0.5rem",
        transition: "color 0.15s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#475569")}
    >
      {label}
    </Link>
  );
}
