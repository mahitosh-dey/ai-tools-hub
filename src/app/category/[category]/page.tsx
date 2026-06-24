import type { Metadata } from "next";
import { getPostsByCategory, getAllCategories } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import Link from "next/link";

export const revalidate = 86400;

const POSTS_PER_PAGE = 6;

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
  return getAllCategories().map((c) => ({ category: c.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const name = category.charAt(0).toUpperCase() + category.slice(1);
  return {
    title: `${name} — AI Tools`,
    description: `Browse all ${name} articles on AI Vault. Honest reviews, tutorials, and tool comparisons to help you find what actually works.`,
    alternates: { canonical: `https://www.aivaultblog.com/category/${category}` },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "AI Vault",
      url: `https://www.aivaultblog.com/category/${category}`,
      title: `${name} — AI Tools | AI Vault`,
      description: `Browse all ${name} articles on AI Vault. Honest reviews, tutorials, and tool comparisons to help you find what actually works.`,
      images: [{ url: "https://www.aivaultblog.com/og-default.png", width: 1200, height: 630, alt: "AI Vault" }],
    },
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  const { page = "1" } = await searchParams;
  const currentPage = Math.max(1, parseInt(page, 10) || 1);

  const allPosts = getPostsByCategory(category);
  const name = category.charAt(0).toUpperCase() + category.slice(1);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const safePage = Math.min(currentPage, Math.max(totalPages, 1));
  const paginated = allPosts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );

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
          {allPosts.length} post{allPosts.length !== 1 ? "s" : ""} in this category
          {totalPages > 1 && ` — page ${safePage} of ${totalPages}`}
        </p>
      </div>

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
            color: "#475569",
          }}
        >
          <p>No posts in &ldquo;{name}&rdquo; yet.</p>
          <Link href="/blog" style={{ color: "#a855f7", textDecoration: "none" }}>
            ← Browse all posts
          </Link>
        </div>
      )}

      <Pagination
        currentPage={safePage}
        totalPages={totalPages}
        basePath={`/category/${category}`}
      />
    </div>
  );
}
