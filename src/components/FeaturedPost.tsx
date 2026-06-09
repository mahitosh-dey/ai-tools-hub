"use client";

import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

const emojiMap: Record<string, string> = {
  reviews: "⭐",
  tutorials: "📖",
  comparisons: "⚖️",
  tools: "🛠️",
};

export default function FeaturedPost({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          background: "#13131e",
          border: "1px solid #252538",
          borderRadius: "14px",
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "center",
          transition: "border-color 0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "#a855f7")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "#252538")}
        className="featured-inner"
      >
        <div>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.85rem", flexWrap: "wrap" }}>
            <span
              style={{
                background: "rgba(168,85,247,0.15)",
                color: "#c084fc",
                padding: "0.2rem 0.65rem",
                borderRadius: "20px",
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {post.category}
            </span>
            <span style={{ color: "#475569", fontSize: "0.78rem" }}>{post.readTime}</span>
            <span style={{ color: "#475569", fontSize: "0.78rem" }}>
              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </div>

          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#f1f5f9",
              lineHeight: 1.3,
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            {post.title}
          </h3>

          <p style={{ color: "#64748b", fontSize: "0.925rem", lineHeight: 1.7, marginBottom: "1.25rem", maxWidth: "600px" }}>
            {post.excerpt}
          </p>

          <span style={{ color: "#a855f7", fontWeight: 600, fontSize: "0.875rem" }}>
            Read full article →
          </span>
        </div>

        <div style={{ fontSize: "4.5rem", opacity: 0.6, flexShrink: 0 }} className="featured-emoji">
          {emojiMap[post.category.toLowerCase()] ?? "🤖"}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .featured-inner { grid-template-columns: 1fr !important; }
          .featured-emoji { display: none !important; }
        }
      `}</style>
    </Link>
  );
}
