import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { extractToc } from "@/lib/toc";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Link from "next/link";
import CategoryBadge from "@/components/CategoryBadge";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import TagList from "@/components/TagList";
import TableOfContents from "@/components/TableOfContents";
import PostCoverImage from "@/components/PostCoverImage";
import StarRating from "@/components/StarRating";
import ProsConsList from "@/components/ProsConsList";
import AuthorBio from "@/components/AuthorBio";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

const baseUrl = "https://www.aivaultblog.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${baseUrl}/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url,
      siteName: "AI Vault",
      images: [{ url: `${baseUrl}/og-default.png`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${baseUrl}/og-default.png`],
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

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const toc = extractToc(post.content);

  const postUrl = `${baseUrl}/blog/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: {
      "@type": "Person",
      name: "Mahtosh Dey",
      url: `${baseUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "AI Vault",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    image: post.coverImage?.startsWith("/") ? `${baseUrl}${post.coverImage}` : `${baseUrl}/og-default.png`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
    ],
  };

  const faqJsonLd = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  } : null;

  const reviewJsonLd = post.rating ? {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: post.title.replace(/review.*$/i, "").trim(),
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: post.rating,
      bestRating: 5,
    },
    author: { "@type": "Person", name: "Mahtosh Dey" },
    publisher: { "@type": "Organization", name: "AI Vault", url: baseUrl },
  } : null;

  return (
    <div style={{ minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {reviewJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {/* Article header — full width with subtle gradient */}
      <div
        style={{
          borderBottom: "1px solid #252538",
          background: "linear-gradient(180deg, rgba(168,85,247,0.04) 0%, transparent 100%)",
          padding: "3rem 1.5rem 2.5rem",
        }}
      >
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
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

          {/* Star rating for review posts */}
          {post.rating && (
            <div style={{ marginBottom: "1.25rem" }}>
              <StarRating rating={post.rating} />
            </div>
          )}

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
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6c63ff, #3ecfcf)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#fff",
                  flexShrink: 0,
                  letterSpacing: 0,
                }}
              >
                {post.author.charAt(0).toUpperCase()}
              </span>
              <span style={{ color: "#94a3b8", fontWeight: 500 }}>{post.author}</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <span>📅</span>
              <time dateTime={post.date}>{formattedDate}</time>
            </span>
            {post.updatedAt && (
              <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <span>🔄</span>
                <span>Updated {new Date(post.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
              </span>
            )}
            <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <span>⏱</span>
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Cover image */}
      <PostCoverImage
        coverImage={post.coverImage}
        category={post.category}
        title={post.title}
      />

      {/* Article body */}
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
        <TableOfContents items={toc} />

        <article className="prose-blog">
          <MDXRemote
            source={post.content}
            components={{ StarRating, ProsConsList }}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug],
              },
            }}
          />
        </article>

        {/* Tags */}
        <TagList tags={post.tags} />

        {/* FAQ section */}
        {post.faqs && post.faqs.length > 0 && (
          <section style={{ marginTop: "3rem", marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#f1f5f9",
                marginBottom: "1.25rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid #252538",
              }}
            >
              Frequently Asked Questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {post.faqs.map((faq, i) => (
                <details
                  key={i}
                  style={{
                    borderBottom: "1px solid #1e1e2e",
                    padding: "0",
                  }}
                >
                  <summary
                    style={{
                      padding: "1rem 0",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#e2e8f0",
                      cursor: "pointer",
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span>{faq.q}</span>
                    <span
                      style={{
                        color: "#a855f7",
                        fontSize: "1.2rem",
                        flexShrink: 0,
                        fontWeight: 400,
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    style={{
                      margin: "0 0 1rem 0",
                      fontSize: "0.95rem",
                      color: "#94a3b8",
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Author bio */}
        <AuthorBio />

        {/* Related posts */}
        <RelatedPosts posts={relatedPosts} />

        {/* Newsletter */}
        <div style={{ marginTop: "3rem" }}>
          <NewsletterSignup />
        </div>

        {/* Back link */}
        <div style={{ marginTop: "1.5rem" }}>
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
      </div>
    </div>
  );
}
