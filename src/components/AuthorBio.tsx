import Link from "next/link";

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
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6c63ff, #3ecfcf)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#fff",
            border: "2px solid rgba(108,99,255,0.3)",
            boxShadow: "0 0 16px rgba(108,99,255,0.2)",
          }}
        >
          M
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
          <span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "1rem" }}>Mahtosh Dey</span>
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
          I test AI tools so you don&apos;t waste time on the wrong ones. Every review on AI Vault
          is based on real hands-on use — no sponsored fluff, no guesswork. I&apos;ve been working
          with AI tools since 2022 and write honestly about what works and what doesn&apos;t.
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
            href="https://www.youtube.com/channel/UC57URqFRYQVJgrVUBa92Zsg"
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
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#ff4444")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#64748b")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
