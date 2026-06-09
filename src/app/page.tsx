import Link from "next/link";
import { getFeaturedPosts, getAllCategories } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import ToolGrid from "@/components/ToolGrid";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(6);
  const categories = getAllCategories();

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "5rem 1rem 4rem",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "20%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "15%",
            width: "250px",
            height: "250px",
            background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(168,85,247,0.1)",
            border: "1px solid rgba(168,85,247,0.3)",
            borderRadius: "20px",
            padding: "0.35rem 1rem",
            fontSize: "0.8rem",
            color: "#c084fc",
            marginBottom: "1.5rem",
          }}
        >
          <span>🤖</span>
          <span>Your #1 Vault for AI Tool Reviews</span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            color: "#e2e8f0",
          }}
        >
          Discover the Best{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a855f7, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI Tools
          </span>{" "}
          for 2025
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "1.15rem",
            maxWidth: "600px",
            margin: "0 auto 2rem",
            lineHeight: 1.7,
          }}
        >
          Honest reviews, step-by-step tutorials, and real comparisons — so you
          can pick the right AI tool without wasting money.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/blog"
            style={{
              background: "linear-gradient(135deg, #a855f7, #22d3ee)",
              color: "#fff",
              padding: "0.8rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            Read Reviews →
          </Link>
          <Link
            href="/newsletter"
            style={{
              background: "transparent",
              color: "#e2e8f0",
              padding: "0.8rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "1rem",
              border: "1px solid #2a2a3d",
            }}
          >
            Join Newsletter
          </Link>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            justifyContent: "center",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Tools Reviewed", value: "50+" },
            { label: "Monthly Readers", value: "10K+" },
            { label: "Newsletter Subs", value: "1K+" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #a855f7, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "#64748b", fontSize: "0.8rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            color: "#e2e8f0",
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
          }}
        >
          🔥 Trending AI Tools
        </h2>
        <ToolGrid />
      </section>

      {/* Latest Posts */}
      <section style={{ marginBottom: "4rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <h2 style={{ color: "#e2e8f0", fontSize: "1.5rem", fontWeight: 700 }}>
            📝 Latest Posts
          </h2>
          <Link
            href="/blog"
            style={{ color: "#a855f7", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600 }}
          >
            View All →
          </Link>
        </div>

        {featuredPosts.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
          </div>
        ) : (
          <div
            style={{
              background: "#12121a",
              border: "1px dashed #2a2a3d",
              borderRadius: "12px",
              padding: "3rem",
              textAlign: "center",
              color: "#475569",
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
            <p>No posts yet. Add your first post in <code>content/posts/</code></p>
          </div>
        )}
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              color: "#e2e8f0",
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            📂 Browse by Category
          </h2>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase()}`}
                style={{
                  background: "#12121a",
                  border: "1px solid #2a2a3d",
                  borderRadius: "8px",
                  padding: "0.5rem 1.25rem",
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
              >
                {cat}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter */}
      <NewsletterSignup />
    </div>
  );
}
