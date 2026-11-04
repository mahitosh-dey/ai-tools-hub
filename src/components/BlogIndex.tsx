"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import type { PostMeta } from "@/lib/posts";

/**
 * The /blog index, moved off the server.
 *
 * It used to read `searchParams` in a server component, which a statically
 * exported site cannot do. The search box and the pager now read the query
 * string in the browser instead.
 *
 * The Suspense fallback is not a spinner. It is the real page 1, unfiltered,
 * rendered without hooks, so `next build` bakes the six newest post cards into
 * blog.html. Crawlers get a full page; only ?q= and ?page= need hydration.
 * If you replace the fallback with null you silently strip /blog of its
 * content in the HTML, and nothing will fail loudly to tell you.
 */

const POSTS_PER_PAGE = 6;

function filterPosts(posts: PostMeta[], query: string) {
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

interface ViewProps {
  posts: PostMeta[];
  categories: string[];
  q: string;
  page: number;
}

function BlogIndexView({ posts, categories, q, page }: ViewProps) {
  const filtered = filterPosts(posts, q);
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const safePage = Math.min(Math.max(1, page), Math.max(totalPages, 1));
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
            : `${posts.length} article${posts.length !== 1 ? "s" : ""} reviews, tutorials & comparisons`}
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

function BlogIndexDynamic({ posts, categories }: { posts: PostMeta[]; categories: string[] }) {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10) || 1);
  return <BlogIndexView posts={posts} categories={categories} q={q} page={page} />;
}

export default function BlogIndex({ posts, categories }: { posts: PostMeta[]; categories: string[] }) {
  return (
    <Suspense fallback={<BlogIndexView posts={posts} categories={categories} q="" page={1} />}>
      <BlogIndexDynamic posts={posts} categories={categories} />
    </Suspense>
  );
}
