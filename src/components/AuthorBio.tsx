import Image from "next/image";
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
        <Image
          src="/aivault.jpeg"
          alt="Mahtosh Dey"
          width={64}
          height={64}
          style={{ borderRadius: "50%", border: "2px solid #252538", display: "block" }}
        />
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
      </div>
    </div>
  );
}
