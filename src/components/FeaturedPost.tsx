"use client";

import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/posts";
import CategoryBadge from "./CategoryBadge";

const categoryStyle: Record<string, { gradient: string; emoji: string }> = {
  reviews:     { gradient: "linear-gradient(135deg,#1e0f40,#2d1b69)", emoji: "⭐" },
  tutorials:   { gradient: "linear-gradient(135deg,#0a1628,#0f3460)", emoji: "📖" },
  comparisons: { gradient: "linear-gradient(135deg,#0d1f0d,#1a3d1a)", emoji: "⚖️" },
  tools:       { gradient: "linear-gradient(135deg,#1a0505,#3d1515)", emoji: "🛠️" },
  news:        { gradient: "linear-gradient(135deg,#1a1a0d,#2e2e10)", emoji: "📰" },
};
const defaultStyle = { gradient: "linear-gradient(135deg,#13131e,#1c1c2e)", emoji: "🤖" };

export default function FeaturedPost({ post }: { post: PostMeta }) {
  const hasRealImage = post.coverImage && !post.coverImage.includes("default-cover");
  const style = categoryStyle[post.category.toLowerCase()] ?? defaultStyle;

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          background: "#13131e",
          border: "1px solid #252538",
          borderRadius: "14px",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 280px",
          transition: "border-color 0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "#a855f7")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "#252538")}
        className="featured-inner"
      >
        {/* Text content */}
        <div style={{ padding: "2rem" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.85rem", flexWrap: "wrap" }}>
            <CategoryBadge category={post.category} asLink={false} />
            <span style={{ color: "#475569", fontSize: "0.78rem" }}>{post.readTime}</span>
            <span style={{ color: "#475569", fontSize: "0.78rem" }}>
              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <Image
                src="/images/mahitosh-dey.jpeg"
                alt="Mahitosh Dey"
                width={18}
                height={18}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <span style={{ color: "#475569", fontSize: "0.78rem" }}>{post.author}</span>
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

          <p style={{ color: "#64748b", fontSize: "0.925rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            {post.excerpt}
          </p>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              color: "#a855f7",
              fontWeight: 600,
              fontSize: "0.875rem",
            }}
          >
            Read full article →
          </span>
        </div>

        {/* Cover image */}
        <div style={{ position: "relative", minHeight: "220px" }} className="featured-image">
          {hasRealImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="280px"
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: style.gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "linear-gradient(rgba(168,85,247,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.07) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <span style={{ position: "relative", zIndex: 1, opacity: 0.8 }}>{style.emoji}</span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .featured-inner { grid-template-columns: 1fr !important; }
          .featured-image { min-height: 180px !important; }
        }
      `}</style>
    </Link>
  );
}
