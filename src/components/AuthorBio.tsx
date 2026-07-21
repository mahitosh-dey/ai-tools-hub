"use client";

import Link from "next/link";
import Image from "next/image";

export default function AuthorBio() {
  return (
    <div
      style={{
        background: "#12121a",
        border: "1px solid #252538",
        borderRadius: "14px",
        padding: "1.75rem",
        display: "flex",
        gap: "1.25rem",
        alignItems: "flex-start",
        margin: "2.5rem 0",
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <Image
          src="/images/mahitosh-dey.webp"
          alt="Mahitosh Dey"
          width={64}
          height={64}
          style={{
            borderRadius: "50%",
            border: "2px solid rgba(108,99,255,0.3)",
            boxShadow: "0 0 16px rgba(108,99,255,0.2)",
            objectFit: "cover",
          }}
        />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
          <span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem" }}>Mahitosh Dey</span>
          <span
            style={{
              background: "rgba(168,85,247,0.12)",
              color: "#a855f7",
              border: "1px solid rgba(168,85,247,0.25)",
              borderRadius: "20px",
              padding: "0.15rem 0.6rem",
              fontSize: "0.72rem",
              fontWeight: 600,
            }}
          >
            Founder, AI Vault
          </span>
        </div>

        <p
          style={{
            color: "#64748b",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            margin: "0 0 0.85rem",
          }}
        >
          Mahitosh Dey is a developer, working since 2019, and the founder of AI Vault. He started
          using AI tools in his own projects in 2022 and has published 24+ hands-on reviews and
          tutorials here since. He writes mainly for content creators, freelancers, students, and
          IT beginners. He pays for Claude Code himself and uses free trials for the rest.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link
            href="/about"
            style={{
              color: "#a855f7",
              fontSize: "0.82rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            More about me →
          </Link>
          <a
            href="https://www.linkedin.com/in/mahitosh-dey-b70575147/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#64748b",
              fontSize: "0.82rem",
              fontWeight: 500,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#0a66c2")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#64748b")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
