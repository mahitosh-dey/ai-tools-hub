import Link from "next/link";
import type { Metadata } from "next";

// No robots meta set here on purpose, but not because the page should be
// indexable. Next.js injects <meta name="robots" content="noindex"> for any
// page returning 404, so declaring it again was redundant. The old declaration
// also set follow:false, which pointlessly told crawlers to ignore the links
// out of this page. Search Console files these URLs under "Excluded by
// 'noindex' tag" as a result, which is expected framework behaviour and not a
// defect to chase.
export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist on AI Vault. It may have been moved or removed.",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        background: "#0d0d14",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            background: "rgba(168,85,247,0.1)",
            border: "1px solid rgba(168,85,247,0.25)",
            borderRadius: "20px",
            padding: "0.3rem 0.9rem",
            fontSize: "0.78rem",
            color: "#c084fc",
            fontWeight: 500,
            marginBottom: "1.5rem",
            letterSpacing: "0.03em",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#a855f7",
              display: "inline-block",
            }}
          />
          Page not found
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #e2e8f0 0%, #c084fc 50%, #22d3ee 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Page not found
        </h1>

        {/* Divider */}
        <div
          style={{
            width: "48px",
            height: "2px",
            background: "linear-gradient(90deg, #a855f7, #22d3ee)",
            borderRadius: "2px",
            margin: "0 auto 1.5rem",
          }}
        />

        {/* Description */}
        <p
          style={{
            fontSize: "1.05rem",
            color: "#94a3b8",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          This page does not exist. It may have been moved or removed. The links below
          will get you back to something real.
        </p>

        {/* CTA. Two routes out, because most 404s here come from retired tag
            URLs where the visitor wanted to browse rather than land on home. */}
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.95rem",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Browse all posts
          </Link>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "transparent",
              border: "1px solid #2a2a3d",
              color: "#94a3b8",
              fontWeight: 600,
              fontSize: "0.95rem",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
