"use client";

import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import CategoryBadge from "./CategoryBadge";

interface Props {
  post: PostMeta;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <article
        style={{
          background: "#12121a",
          border: "1px solid #2a2a3d",
          borderRadius: "12px",
          overflow: "hidden",
          transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
          height: "100%",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = "translateY(-4px)";
          el.style.boxShadow = "0 8px 30px rgba(168,85,247,0.2)";
          el.style.borderColor = "#a855f7";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
          el.style.borderColor = "#2a2a3d";
        }}
      >
        {/* Cover image placeholder */}
        <div
          style={{
            height: featured ? "220px" : "160px",
            background: "linear-gradient(135deg, #1a1a28, #2a1a3d)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: featured ? "3rem" : "2rem",
          }}
        >
          {getCategoryEmoji(post.category)}
        </div>

        {/* Content */}
        <div style={{ padding: featured ? "1.5rem" : "1.25rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.75rem",
            }}
          >
            <CategoryBadge category={post.category} asLink={false} />
            <span style={{ color: "#475569", fontSize: "0.75rem" }}>
              {post.readTime}
            </span>
          </div>

          <h3
            style={{
              color: "#e2e8f0",
              fontWeight: 700,
              fontSize: featured ? "1.2rem" : "1rem",
              marginBottom: "0.5rem",
              lineHeight: 1.4,
            }}
          >
            {post.title}
          </h3>

          <p
            style={{
              color: "#64748b",
              fontSize: "0.85rem",
              lineHeight: 1.6,
              marginBottom: "1rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.excerpt}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <time style={{ color: "#475569", fontSize: "0.75rem" }}>
              {formatDate(post.date)}
            </time>
            <span
              style={{
                color: "#a855f7",
                fontSize: "0.8rem",
                fontWeight: 600,
              }}
            >
              Read More →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function getCategoryEmoji(category: string): string {
  const map: Record<string, string> = {
    reviews: "⭐",
    tutorials: "📚",
    comparisons: "⚖️",
    tools: "🛠️",
    news: "📰",
  };
  return map[category.toLowerCase()] ?? "🤖";
}

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
