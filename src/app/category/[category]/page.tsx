import type { Metadata } from "next";
import { getPostsByCategory, getAllCategories } from "@/lib/posts";
import PostsGrid from "@/components/PostsGrid";
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

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const allPosts = getPostsByCategory(category);
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
          {allPosts.length} post{allPosts.length !== 1 ? "s" : ""} in this category
        </p>
      </div>

      <PostsGrid
        posts={allPosts}
        basePath={`/category/${category}`}
        emptyLabel={`No posts in "${name}" yet.`}
        emptyHref="/blog"
      />
    </div>
  );
}
