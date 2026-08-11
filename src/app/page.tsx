import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import FeaturedPost from "@/components/FeaturedPost";
import CategoryLinks from "@/components/CategoryLinks";
import HeroIllustration from "@/components/HeroIllustration";

const baseUrl = "https://www.aivaultblog.com";

export const metadata: Metadata = {
  alternates: { canonical: baseUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI Vault",
    url: baseUrl,
    title: "AI Vault: Reviews, Tutorials & Comparisons",
    description: "Honest reviews, tutorials, and comparisons of the best AI tools. Stay ahead with weekly insights on ChatGPT, Midjourney, Jasper, and more.",
    images: [{ url: `${baseUrl}/og-default.png`, width: 1200, height: 630, alt: "AI Vault" }],
  },
};

export default function HomePage() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts[0] ?? null;
  const recentPosts = allPosts.filter((p) => p.slug !== featuredPost?.slug).slice(0, 6);

  const categoryCounts = ["reviews", "tutorials", "comparisons", "tools"].reduce<Record<string, number>>(
    (acc, cat) => {
      acc[cat] = allPosts.filter((p) => p.category.toLowerCase() === cat).length;
      return acc;
    },
    {}
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>

      {/* Hero */}
      <section style={{ padding: "4rem 0 3rem", borderBottom: "1px solid #252538" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.25)",
              borderRadius: "20px",
              padding: "0.3rem 0.9rem",
              fontSize: "0.78rem",
              color: "#c084fc",
              fontWeight: 500,
              marginBottom: "1.25rem",
              letterSpacing: "0.02em",
            }}
          >
            <span>🤖</span> AI Tool Reviews & Tutorials
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
              color: "#f1f5f9",
            }}
          >
            The honest guide to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI tools
            </span>{" "}
            that actually work
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#64748b",
              lineHeight: 1.75,
              marginBottom: "1.75rem",
              maxWidth: "560px",
            }}
          >
            We test and review AI tools so you don&apos;t waste money on the wrong ones.
            No hype, no bought verdicts, just real hands-on assessments.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              href="/blog"
              style={{
                background: "linear-gradient(135deg, #a855f7, #22d3ee)",
                color: "#fff",
                padding: "0.65rem 1.5rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.925rem",
              }}
            >
              Browse All Reviews →
            </Link>
            <Link
              href="/newsletter"
              style={{
                background: "transparent",
                color: "#94a3b8",
                padding: "0.65rem 1.5rem",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.925rem",
                border: "1px solid #252538",
              }}
            >
              Free Newsletter
            </Link>
          </div>
        </div>

        {/* Right column: illustration — hidden on small screens */}
        <div className="hidden lg:flex" style={{ justifyContent: "center", alignItems: "center" }}>
          <HeroIllustration />
        </div>

        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section style={{ padding: "3rem 0 2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Latest Post
            </h2>
          </div>

          <FeaturedPost post={featuredPost} />
        </section>
      )}

      {/* Recent Posts Grid */}
      {recentPosts.length > 0 && (
        <section style={{ paddingBottom: "3rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              More Posts
            </h2>
            <Link href="/blog" style={{ color: "#a855f7", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}>
              View all →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {allPosts.length === 0 && (
        <section style={{ padding: "5rem 0", textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✍️</div>
          <p style={{ color: "#475569" }}>No posts yet. Add MDX files to <code>content/posts/</code></p>
        </section>
      )}

      {/* Categories */}
      <section
        style={{
          paddingBottom: "3rem",
          borderTop: "1px solid #252538",
          paddingTop: "2.5rem",
        }}
      >
        <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
          Browse by Category
        </h2>
        <CategoryLinks counts={categoryCounts} />
      </section>

      {/* Newsletter */}
      <section style={{ paddingBottom: "2rem" }}>
        <NewsletterSignup />
      </section>

    </div>
  );
}
