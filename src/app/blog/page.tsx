import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Posts",
  description: "Browse all AI tool reviews, tutorials, and comparisons.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: 800,
            color: "#e2e8f0",
            marginBottom: "0.5rem",
          }}
        >
          All Posts
        </h1>
        <p style={{ color: "#64748b" }}>
          {posts.length} article{posts.length !== 1 ? "s" : ""} — AI tool reviews, tutorials & comparisons
        </p>
      </div>

      {/* Category filter */}
      {categories.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <Link
            href="/blog"
            style={{
              background: "rgba(168,85,247,0.15)",
              color: "#c084fc",
              padding: "0.3rem 0.9rem",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat.toLowerCase()}`}
              style={{
                background: "#12121a",
                border: "1px solid #2a2a3d",
                color: "#94a3b8",
                padding: "0.3rem 0.9rem",
                borderRadius: "20px",
                fontSize: "0.8rem",
                textDecoration: "none",
              }}
            >
              {cat}
            </Link>
          ))}
        </div>
      )}

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
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
          <h3 style={{ color: "#94a3b8", marginBottom: "0.5rem" }}>No posts yet</h3>
          <p>Create your first post in <code>content/posts/your-post.mdx</code></p>
        </div>
      )}
    </div>
  );
}
