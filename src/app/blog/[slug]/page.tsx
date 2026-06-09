import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import CategoryBadge from "@/components/CategoryBadge";
import NewsletterSignup from "@/components/NewsletterSignup";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Article header — full width with subtle gradient */}
      <div
        style={{
          borderBottom: "1px solid #252538",
          background: "linear-gradient(180deg, rgba(168,85,247,0.04) 0%, transparent 100%)",
          padding: "3rem 1.5rem 2.5rem",
        }}
      >
        <div style={{ maxWidth: "740px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              gap: "0.4rem",
              alignItems: "center",
              fontSize: "0.82rem",
              color: "#475569",
              marginBottom: "1.5rem",
            }}
          >
            <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <Link href="/blog" style={{ color: "#475569", textDecoration: "none" }}>Blog</Link>
            <span>›</span>
            <span style={{ color: "#64748b" }}>{post.category}</span>
          </nav>

          {/* Category */}
          <div style={{ marginBottom: "1rem" }}>
            <CategoryBadge category={post.category} />
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "#f1f5f9",
              lineHeight: 1.2,
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p
            style={{
              fontSize: "1.1rem",
              color: "#94a3b8",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
              borderLeft: "3px solid #a855f7",
              paddingLeft: "1rem",
            }}
          >
            {post.excerpt}
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              alignItems: "center",
              flexWrap: "wrap",
              fontSize: "0.83rem",
              color: "#475569",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              <span>📅</span>
              <time>{formattedDate}</time>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <span>⏱</span>
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div style={{ maxWidth: "740px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
        <article className="prose-blog">
          <MDXRemote source={post.content} />
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid #252538",
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span style={{ color: "#475569", fontSize: "0.82rem" }}>Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#13131e",
                  border: "1px solid #252538",
                  color: "#64748b",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "6px",
                  fontSize: "0.78rem",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Back link */}
        <div style={{ marginTop: "2rem" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#a855f7",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
              padding: "0.5rem 0",
            }}
          >
            ← Back to all posts
          </Link>
        </div>

        {/* Newsletter */}
        <div style={{ marginTop: "3rem" }}>
          <NewsletterSignup />
        </div>
      </div>
    </div>
  );
}
