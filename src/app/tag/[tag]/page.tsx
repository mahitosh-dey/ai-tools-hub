import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `#${tag}`,
    description: `All posts tagged with #${tag} on AI Vault.`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  if (posts.length === 0) notFound();

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}>

      {/* Header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <Link
          href="/blog"
          style={{ color: "#64748b", textDecoration: "none", fontSize: "0.85rem" }}
        >
          ← Blog
        </Link>
        <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            style={{
              background: "rgba(168,85,247,0.12)",
              border: "1px solid rgba(168,85,247,0.25)",
              color: "#c084fc",
              padding: "0.3rem 0.9rem",
              borderRadius: "20px",
              fontSize: "0.85rem",
              fontWeight: 600,
            }}
          >
            #{tag}
          </span>
          <span style={{ color: "#475569", fontSize: "0.85rem" }}>
            {posts.length} {posts.length === 1 ? "post" : "posts"}
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: 800,
            color: "#f1f5f9",
            marginTop: "0.75rem",
            letterSpacing: "-0.02em",
          }}
        >
          Posts tagged &ldquo;{tag}&rdquo;
        </h1>
      </div>

      {/* Posts grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
