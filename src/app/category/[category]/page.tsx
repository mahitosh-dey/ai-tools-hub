import type { Metadata } from "next";
import { getPostsByCategory, getAllCategories } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ category: c.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const name = category.charAt(0).toUpperCase() + category.slice(1);
  return {
    title: `${name} — AI Tools`,
    description: `Browse all ${name} articles about AI tools.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const posts = getPostsByCategory(category);
  const name = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem" }}>
      <nav style={{ marginBottom: "1.5rem", fontSize: "0.85rem", color: "#64748b" }}>
        <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</Link>
        {" / "}
        <Link href="/blog" style={{ color: "#64748b", textDecoration: "none" }}>Blog</Link>
        {" / "}
        <span style={{ color: "#94a3b8" }}>{name}</span>
      </nav>

      <div style={{ marginBottom: "2.5rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#e2e8f0", marginBottom: "0.5rem" }}>
          {name}
        </h1>
        <p style={{ color: "#64748b" }}>
          {posts.length} post{posts.length !== 1 ? "s" : ""} in this category
        </p>
      </div>

      {posts.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div
          style={{
            background: "#12121a",
            border: "1px dashed #2a2a3d",
            borderRadius: "12px",
            padding: "4rem",
            textAlign: "center",
            color: "#475569",
          }}
        >
          <p>No posts in &ldquo;{name}&rdquo; yet.</p>
          <Link href="/blog" style={{ color: "#a855f7", textDecoration: "none" }}>
            ← Browse all posts
          </Link>
        </div>
      )}
    </div>
  );
}
