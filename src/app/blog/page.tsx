import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import Link from "next/link";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "All Posts",
  description: "Browse all AI tool reviews, tutorials, and comparisons on AI Vault. Honest picks for ChatGPT, Midjourney, Grammarly, and more — updated weekly.",
  alternates: { canonical: "https://www.aivaultblog.com/blog" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Vault",
    url: "https://www.aivaultblog.com/blog",
    title: "All Posts | AI Vault",
    description: "Browse all AI tool reviews, tutorials, and comparisons on AI Vault. Honest picks for ChatGPT, Midjourney, Grammarly, and more — updated weekly.",
    images: [{ url: "https://www.aivaultblog.com/og-default.png", width: 1200, height: 630, alt: "AI Vault" }],
  },
};

const POSTS_PER_PAGE = 6;

interface Props {
  searchParams: Promise<{ q?: string; page?: string }>;
}

function filterPosts(posts: ReturnType<typeof getAllPosts>, query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return posts;
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export default async function BlogPage({ searchParams }: Props) {
  const { q = "", page = "1" } = await searchParams;
  const currentPage = Math.max(1, parseInt(page, 10) || 1);

  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const filtered = filterPosts(allPosts, q);
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const safePage = Math.min(currentPage, Math.max(totalPages, 1));
  const paginated = filtered.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem" }}>

      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "2.2rem",
            fontWeight: 800,
            color: "#e2e8f0",
            marginBottom: "0.4rem",
          }}
        >
          {q ? `Search results` : "All Posts"}
        </h1>
        <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
          {q
            ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${q}"`
            : `${allPosts.length} article${allPosts.length !== 1 ? "s" : ""} — reviews, tutorials & comparisons`}
        </p>
        {q && (
          <Link
            href="/blog"
            style={{ color: "#a855f7", fontSize: "0.85rem", textDecoration: "none", display: "inline-block", marginTop: "0.4rem" }}
          >
            ← Clear search
          </Link>
        )}
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
              background: !q ? "rgba(168,85,247,0.15)" : "#12121a",
              color: !q ? "#c084fc" : "#94a3b8",
              border: `1px solid ${!q ? "rgba(168,85,247,0.4)" : "#2a2a3d"}`,
              padding: "0.3rem 0.9rem",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: !q ? 600 : 400,
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

      {/* Grid */}
      {paginated.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {paginated.map((post) => (
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
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔍</div>
          <h3 style={{ color: "#94a3b8", marginBottom: "0.5rem" }}>
            No posts found{q ? ` for "${q}"` : ""}
          </h3>
          {q && (
            <Link
              href="/blog"
              style={{ color: "#a855f7", textDecoration: "none", fontSize: "0.9rem" }}
            >
              ← Clear search and show all posts
            </Link>
          )}
        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={safePage}
        totalPages={totalPages}
        basePath="/blog"
        query={q || undefined}
      />

      {/* Page info */}
      {totalPages > 1 && (
        <p
          style={{
            textAlign: "center",
            color: "#475569",
            fontSize: "0.8rem",
            marginTop: "1rem",
          }}
        >
          Page {safePage} of {totalPages}
        </p>
      )}
    </div>
  );
}
