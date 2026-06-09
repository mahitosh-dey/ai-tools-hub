import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import CategoryBadge from "@/components/CategoryBadge";
import NewsletterSignup from "@/components/NewsletterSignup";
import Link from "next/link";

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
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr min(65ch, 100%) 1fr",
        }}
      >
        <div style={{ gridColumn: "2" }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: "1.5rem", fontSize: "0.85rem", color: "#64748b" }}>
            <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</Link>
            {" / "}
            <Link href="/blog" style={{ color: "#64748b", textDecoration: "none" }}>Blog</Link>
            {" / "}
            <span style={{ color: "#94a3b8" }}>{post.title}</span>
          </nav>

          {/* Category + meta */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              marginBottom: "1rem",
              flexWrap: "wrap",
            }}
          >
            <CategoryBadge category={post.category} />
            <span style={{ color: "#475569", fontSize: "0.8rem" }}>{post.readTime}</span>
            <time style={{ color: "#475569", fontSize: "0.8rem" }}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              color: "#e2e8f0",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p
            style={{
              color: "#94a3b8",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              marginBottom: "2rem",
              borderLeft: "3px solid #a855f7",
              paddingLeft: "1rem",
            }}
          >
            {post.excerpt}
          </p>

          {/* MDX Content */}
          <article className="prose" style={{ maxWidth: "none" }}>
            <MDXRemote source={post.content} />
          </article>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div
              style={{
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid #2a2a3d",
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#64748b", fontSize: "0.85rem" }}>Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#1a1a28",
                    border: "1px solid #2a2a3d",
                    color: "#94a3b8",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Newsletter */}
          <NewsletterSignup />

          {/* Back link */}
          <Link
            href="/blog"
            style={{
              color: "#a855f7",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
