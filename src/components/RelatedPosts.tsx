"use client";

import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import CategoryBadge from "./CategoryBadge";
import SponsoredBadge from "./SponsoredBadge";

interface Props {
  posts: PostMeta[];
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

export default function RelatedPosts({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <div
      style={{
        marginTop: "3.5rem",
        paddingTop: "2rem",
        borderTop: "1px solid #252538",
      }}
    >
      <h2
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "#64748b",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "1.25rem",
        }}
      >
        Keep Reading
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "#13131e",
                border: "1px solid #252538",
                borderRadius: "10px",
                padding: "1rem 1.25rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
                transition: "border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#a855f7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#252538";
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* This is the third place a post gets listed, so it needs the
                    label too. Missing it here would put an unlabelled paid post
                    at the foot of every post in the same category. */}
                <div style={{ marginBottom: "0.35rem", display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                  <CategoryBadge category={post.category} asLink={false} />
                  {post.sponsored && <SponsoredBadge />}
                </div>
                <p
                  style={{
                    color: "#e2e8f0",
                    fontWeight: 600,
                    fontSize: "0.925rem",
                    lineHeight: 1.4,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {post.title}
                </p>
                <p style={{ color: "#475569", fontSize: "0.78rem", marginTop: "0.2rem" }}>
                  {formatDate(post.date)} · {post.readTime}
                </p>
              </div>
              <span
                style={{
                  color: "#a855f7",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  flexShrink: 0,
                }}
              >
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
