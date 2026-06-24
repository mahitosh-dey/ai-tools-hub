import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import Link from "next/link";

export const revalidate = 86400;

const POSTS_PER_PAGE = 6;

interface Props {
  params: Promise<{ tag: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `#${tag}`,
    description: `Browse every AI Vault post tagged #${tag}. Honest reviews, tutorials, and comparisons of the best AI tools — updated regularly.`,
    alternates: { canonical: `https://www.aivaultblog.com/tag/${tag}` },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "AI Vault",
      url: `https://www.aivaultblog.com/tag/${tag}`,
      title: `#${tag} | AI Vault`,
      description: `Browse every AI Vault post tagged #${tag}. Honest reviews, tutorials, and comparisons of the best AI tools — updated regularly.`,
      images: [{ url: "https://www.aivaultblog.com/og-default.png", width: 1200, height: 630, alt: "AI Vault" }],
    },
  };
}

export default async function TagPage({ params, searchParams }: Props) {
  const { tag } = await params;
  const { page = "1" } = await searchParams;
  const currentPage = Math.max(1, parseInt(page, 10) || 1);

  const allPosts = getPostsByTag(tag);
  if (allPosts.length === 0) notFound();

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const safePage = Math.min(currentPage, Math.max(totalPages, 1));
  const paginated = allPosts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );

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
            {allPosts.length} {allPosts.length === 1 ? "post" : "posts"}
            {totalPages > 1 && ` — page ${safePage} of ${totalPages}`}
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
        {paginated.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <Pagination
        currentPage={safePage}
        totalPages={totalPages}
        basePath={`/tag/${tag}`}
      />
    </div>
  );
}
