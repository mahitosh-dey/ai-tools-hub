import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/posts";
import PostsGrid from "@/components/PostsGrid";
import Link from "next/link";

interface Props {
  params: Promise<{ tag: string }>;
}

// Thin tag pages (<3 posts) get noindexed so Google does not treat them as
// low-quality content. They are still reachable but excluded from search.
const MIN_POSTS_FOR_INDEX = 3;

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  const shouldIndex = posts.length >= MIN_POSTS_FOR_INDEX;
  return {
    title: `#${tag}`,
    description: `Browse every AI Vault post tagged #${tag}. Honest reviews, tutorials, and comparisons of the best AI tools, updated regularly.`,
    alternates: { canonical: `https://www.aivaultblog.com/tag/${tag}` },
    robots: shouldIndex ? undefined : { index: false, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "AI Vault",
      url: `https://www.aivaultblog.com/tag/${tag}`,
      title: `#${tag} | AI Vault`,
      description: `Browse every AI Vault post tagged #${tag}. Honest reviews, tutorials, and comparisons of the best AI tools, updated regularly.`,
      images: [{ url: "https://www.aivaultblog.com/og-default.png", width: 1200, height: 630, alt: "AI Vault" }],
    },
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const allPosts = getPostsByTag(tag);
  if (allPosts.length === 0) notFound();

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <Link href="/blog" style={{ color: "#64748b", textDecoration: "none", fontSize: "0.85rem" }}>
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

      <PostsGrid posts={allPosts} basePath={`/tag/${tag}`} />
    </div>
  );
}
