"use client";

import Link from "next/link";

export default function TagList({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <div
      style={{
        marginTop: "3rem",
        paddingTop: "1.5rem",
        borderTop: "1px solid #252538",
        display: "flex",
        gap: "0.5rem",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <span style={{ color: "#475569", fontSize: "0.82rem" }}>Tags:</span>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tag/${tag}`}
          style={{
            background: "#13131e",
            border: "1px solid #252538",
            color: "#64748b",
            padding: "0.2rem 0.65rem",
            borderRadius: "6px",
            fontSize: "0.78rem",
            textDecoration: "none",
            transition: "color 0.15s, border-color 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#a855f7";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(168,85,247,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#252538";
          }}
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}
