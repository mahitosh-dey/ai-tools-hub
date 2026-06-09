"use client";

import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import CategoryBadge from "./CategoryBadge";

interface Props {
  post: PostMeta;
  featured?: boolean;
}

const categoryEmoji: Record<string, string> = {
  reviews: "⭐",
  tutorials: "📖",
  comparisons: "⚖️",
  tools: "🛠️",
  news: "📰",
};

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function BlogCard({ post, featured = false }: Props) {
  const emoji = categoryEmoji[post.category.toLowerCase()] ?? "🤖";

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <article
        style={{
          background: "#13131e",
          border: "1px solid #252538",
          borderRadius: "12px",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "border-color 0.2s ease, transform 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = "#a855f7";
          el.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = "#252538";
          el.style.transform = "translateY(0)";
        }}
      >
        {/* Cover — emoji-based visual */}
        <div
          style={{
            height: featured ? "180px" : "130px",
            background: "linear-gradient(135deg, #1c1c2e 0%, #13131e 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: featured ? "3.5rem" : "2.8rem",
            borderBottom: "1px solid #252538",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* decorative glow */}
          <div
            style={{
              position: "absolute",
              width: "120px",
              height: "120px",
              background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          {emoji}
        </div>

        {/* Content */}
        <div
          style={{
            padding: featured ? "1.4rem" : "1.15rem",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          {/* Category + read time */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.75rem",
              gap: "0.5rem",
            }}
          >
            <CategoryBadge category={post.category} asLink={false} />
            <span style={{ color: "#475569", fontSize: "0.75rem", whiteSpace: "nowrap" }}>
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              color: "#f1f5f9",
              fontWeight: 700,
              fontSize: featured ? "1.1rem" : "0.975rem",
              lineHeight: 1.4,
              marginBottom: "0.6rem",
              letterSpacing: "-0.01em",
            }}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            style={{
              color: "#64748b",
              fontSize: "0.85rem",
              lineHeight: 1.65,
              flex: 1,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              marginBottom: "1rem",
            }}
          >
            {post.excerpt}
          </p>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "0.75rem",
              borderTop: "1px solid #1c1c2e",
            }}
          >
            <time style={{ color: "#475569", fontSize: "0.78rem" }}>
              {formatDate(post.date)}
            </time>
            <span
              style={{
                color: "#a855f7",
                fontSize: "0.8rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.2rem",
              }}
            >
              Read →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
