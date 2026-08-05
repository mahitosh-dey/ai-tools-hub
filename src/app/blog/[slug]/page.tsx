import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { extractToc } from "@/lib/toc";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Link from "next/link";
import Image from "next/image";
import CategoryBadge from "@/components/CategoryBadge";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedPosts from "@/components/RelatedPosts";
import TagList from "@/components/TagList";
import TableOfContents from "@/components/TableOfContents";
import PostCoverImage from "@/components/PostCoverImage";
import StarRating from "@/components/StarRating";
import ProsConsList from "@/components/ProsConsList";
import AuthorBio from "@/components/AuthorBio";
import SponsoredNotice from "@/components/SponsoredNotice";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { isAffiliateLink } from "@/lib/affiliate";

interface Props {
  params: Promise<{ slug: string }>;
}

const baseUrl = "https://www.aivaultblog.com";

/**
 * Anchor override for MDX links. Two separate cases get rel="sponsored nofollow":
 *
 * 1. Any external link on a paid post, because on a paid placement any outbound
 *    link could be the thing being paid for.
 * 2. Known affiliate URLs on any post, matched from the registry in lib/affiliate
 *    rather than by treating all external links as paid. Most outbound links here
 *    are citations, and marking those would misrepresent them.
 *
 * Internal links are never marked or the post would stop passing signal to the
 * rest of the site.
 */
function makeAnchor(postIsSponsored: boolean) {
  return function Anchor({
    href,
    children,
    ...rest
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    const isExternal =
      !!href && /^https?:\/\//i.test(href) && !href.startsWith(baseUrl);

    const paid = isExternal && (postIsSponsored || isAffiliateLink(href));

    if (!paid) {
      return <a href={href} {...rest}>{children}</a>;
    }

    return (
      <a href={href} rel="sponsored nofollow" {...rest}>
        {children}
      </a>
    );
  };
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${baseUrl}/blog/${slug}`;
  const metaTitle = post.seoTitle ?? post.title;
  return {
    title: metaTitle,
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

  const postImage = post.coverImage?.startsWith("/")
    ? `${baseUrl}${post.coverImage}`
    : `${baseUrl}/og-default.png`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    url: postUrl,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    inLanguage: "en",
    author: {
      "@type": "Person",
      "@id": `${baseUrl}/about#mahitosh-dey`,
      name: "Mahitosh Dey",
      url: `${baseUrl}/about`,
    },
    publisher: { "@id": `${baseUrl}#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    image: {
      "@type": "ImageObject",
      url: postImage,
      width: 1200,
      height: 630,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
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

  const reviewedName = post.title.replace(/review.*$/i, "").replace(/:\s*.*$/, "").trim();
  const reviewJsonLd = post.rating ? {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${postUrl}#review`,
    name: `${reviewedName} Review`,
    url: postUrl,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: reviewedName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      image: postImage,
      description: post.excerpt,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: post.rating,
        bestRating: 10,
        worstRating: 1,
        ratingCount: 1,
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: post.rating,
      worstRating: 1,
      bestRating: 10,
    },
    author: {
      "@type": "Person",
      "@id": `${baseUrl}/about#mahitosh-dey`,
      name: post.author,
      url: `${baseUrl}/about`,
    },
    publisher: { "@id": `${baseUrl}#organization` },
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {reviewJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <div style={{ minHeight: "100vh" }}>
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
              <Image
                src="/images/mahitosh-dey.webp"
                alt={post.author}
                width={26}
                height={26}
                style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
              />
              <Link href="/about" style={{ color: "#94a3b8", fontWeight: 500, textDecoration: "none" }}>{post.author}</Link>
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

        {/* Paid-placement disclosure, above the fold and above the body */}
        {post.sponsored && <SponsoredNotice sponsoredBy={post.sponsoredBy} />}

        {/* Affiliate disclosure. The disclosure page promises readers this
            appears at the top of any post carrying affiliate links, so it has
            to actually render. */}
        {post.affiliate && !post.sponsored && <AffiliateDisclosure />}

        {/* Editorial transparency note */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            background: "rgba(168,85,247,0.05)",
            border: "1px solid rgba(168,85,247,0.18)",
            borderRadius: "10px",
            padding: "0.7rem 1rem",
            marginBottom: "2rem",
          }}
        >
          <Image
            src="/images/mahitosh-dey.webp"
            alt="Mahitosh Dey"
            width={32}
            height={32}
            style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
          />
          <p style={{ margin: 0, fontSize: "0.78rem", color: "#64748b", lineHeight: 1.6 }}>
            By{" "}
            <Link href="/about" style={{ color: "#a855f7", textDecoration: "none", fontWeight: 600 }}>
              Mahitosh Dey
            </Link>
            {/* "No sponsored content" must never render on a paid post. */}
            {post.sponsored
              ? <> · Paid placement · Verdict is my own · </>
              : <> · Independent opinion · No sponsored content · </>}
            <Link href="/disclosure" style={{ color: "#64748b", textDecoration: "underline" }}>
              {post.sponsored ? "Disclosure" : "Affiliate disclosure"}
            </Link>
          </p>
        </div>

        <article className="prose-blog">
          <MDXRemote
            source={post.content}
            components={{
              StarRating,
              ProsConsList,
              a: makeAnchor(!!post.sponsored),
            }}
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
            {/* Answers render expanded, never behind a toggle, so readers and
                AI crawlers both get the text without an interaction. */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {post.faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: "1px solid #1e1e2e",
                    padding: "0",
                  }}
                >
                  <h3
                    style={{
                      padding: "1rem 0 0.5rem 0",
                      margin: 0,
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#e2e8f0",
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.6rem",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        color: "#a855f7",
                        flexShrink: 0,
                        fontWeight: 700,
                      }}
                    >
                      Q.
                    </span>
                    <span>{faq.q}</span>
                  </h3>
                  <p
                    style={{
                      margin: "0 0 1.25rem 0",
                      paddingLeft: "1.6rem",
                      fontSize: "0.95rem",
                      color: "#94a3b8",
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
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
    </>
  );
}
