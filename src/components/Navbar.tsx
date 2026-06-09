"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/category/reviews" },
  { label: "Tutorials", href: "/category/tutorials" },
  { label: "Tools", href: "/category/tools" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        background: "rgba(10,10,15,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #2a2a3d",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              background: "linear-gradient(135deg, #a855f7, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI Vault
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#a855f7")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#94a3b8")
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            style={{
              background: "linear-gradient(135deg, #a855f7, #22d3ee)",
              color: "#fff",
              padding: "0.4rem 1.1rem",
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            Newsletter
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#e2e8f0",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid #2a2a3d",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ color: "#94a3b8", textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            onClick={() => setOpen(false)}
            style={{ color: "#a855f7", textDecoration: "none", fontWeight: 600 }}
          >
            Newsletter →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
