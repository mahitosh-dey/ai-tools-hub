"use client";

import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/posts";
import CategoryBadge from "./CategoryBadge";

interface Props {
  post: PostMeta;
  featured?: boolean;
}

const categoryStyle: Record<string, { gradient: string; emoji: string }> = {
  reviews:     { gradient: "linear-gradient(135deg,#1e0f40,#2d1b69)", emoji: "⭐" },
  tutorials:   { gradient: "linear-gradient(135deg,#0a1628,#0f3460)", emoji: "📖" },
  comparisons: { gradient: "linear-gradient(135deg,#0d1f0d,#1a3d1a)", emoji: "⚖️" },
  tools:       { gradient: "linear-gradient(135deg,#1a0505,#3d1515)", emoji: "🛠️" },
  news:        { gradient: "linear-gradient(135deg,#1a1a0d,#2e2e10)", emoji: "📰" },
};
const defaultStyle = { gradient: "linear-gradient(135deg,#13131e,#1c1c2e)", emoji: "🤖" };

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  } catch { return dateStr; }
}

export default function BlogCard({ post, featured = false }: Props) {
  const hasRealImage = post.coverImage && !post.coverImage.includes("default-cover");
  const style = categoryStyle[post.category.toLowerCase()] ?? defaultStyle;
  const thumbH = featured ? 180 : 140;

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
        {/* Thumbnail */}
        <div style={{ height: `${thumbH}px`, position: "relative", flexShrink: 0, overflow: "hidden" }}>
          {hasRealImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          ) : (
            <div style={{
              width: "100%", height: "100%",
              background: style.gradient,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "2.5rem",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.06) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }} />
              <span style={{ position: "relative", zIndex: 1 }}>{style.emoji}</span>
            </div>
          )}
          {/* Category overlay badge */}
          <div style={{ position: "absolute", top: "0.6rem", left: "0.6rem" }}>
            <CategoryBadge category={post.category} asLink={false} />
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: featured ? "1.25rem" : "1rem", display: "flex", flexDirection: "column", flex: 1 }}>
          {/* Read time */}
          <div style={{ color: "#475569", fontSize: "0.75rem", marginBottom: "0.5rem" }}>
            {post.readTime}
          </div>

          {/* Title */}
          <h3 style={{
            color: "#f1f5f9", fontWeight: 700,
            fontSize: featured ? "1.05rem" : "0.95rem",
            lineHeight: 1.4, marginBottom: "0.5rem", letterSpacing: "-0.01em",
          }}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p style={{
            color: "#64748b", fontSize: "0.83rem", lineHeight: 1.65, flex: 1,
            display: "-webkit-box", WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical", overflow: "hidden", marginBottom: "0.85rem",
          }}>
            {post.excerpt}
          </p>

          {/* Footer */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            paddingTop: "0.65rem", borderTop: "1px solid #1c1c2e",
          }}>
            <time style={{ color: "#475569", fontSize: "0.75rem" }}>{formatDate(post.date)}</time>
            <span style={{ color: "#a855f7", fontSize: "0.8rem", fontWeight: 600 }}>Read →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
