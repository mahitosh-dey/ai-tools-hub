"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/category/reviews" },
  { label: "Tutorials", href: "/category/tutorials" },
  { label: "Comparisons", href: "/category/comparisons" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(13,13,20,0.92)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid #252538",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center" }}>
          <Image
            src="/aivault-logo.svg"
            alt="AI Vault"
            width={148}
            height={46}
            style={{ display: "block" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.4rem 0.75rem",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  fontWeight: active ? 600 : 400,
                  color: active ? "#e2e8f0" : "#64748b",
                  textDecoration: "none",
                  background: active ? "#1c1c2e" : "transparent",
                  transition: "color 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#e2e8f0";
                    (e.currentTarget as HTMLAnchorElement).style.background = "#13131e";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <div style={{ width: "1px", height: "20px", background: "#252538", margin: "0 0.4rem" }} />

          <Link
            href="/newsletter"
            style={{
              background: "linear-gradient(135deg, #a855f7, #22d3ee)",
              color: "#fff",
              padding: "0.4rem 1rem",
              borderRadius: "6px",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Newsletter
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#94a3b8",
            fontSize: "1.35rem",
            cursor: "pointer",
            padding: "0.25rem",
            lineHeight: 1,
          }}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid #252538",
            background: "#0d0d14",
            padding: "1rem 1.5rem 1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "0.6rem 0",
                color: "#94a3b8",
                textDecoration: "none",
                fontSize: "0.95rem",
                borderBottom: "1px solid #1c1c2e",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            onClick={() => setOpen(false)}
            style={{
              display: "inline-block",
              marginTop: "0.75rem",
              background: "linear-gradient(135deg, #a855f7, #22d3ee)",
              color: "#fff",
              padding: "0.5rem 1.25rem",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Newsletter →
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 760px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
