import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

const categoryColors: Record<string, { bg: string; accent: string; label: string }> = {
  reviews:     { bg: "#1e0f40", accent: "#a855f7", label: "Review" },
  tutorials:   { bg: "#0a1e3d", accent: "#38bdf8", label: "Tutorial" },
  comparisons: { bg: "#0d2610", accent: "#4ade80", label: "Comparison" },
  tools:       { bg: "#2d0f0f", accent: "#f97316", label: "Tools" },
};
const defaultColors = { bg: "#13131e", accent: "#a855f7", label: "Article" };

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const colors = post
    ? (categoryColors[post.category.toLowerCase()] ?? defaultColors)
    : defaultColors;

  const title = post?.title ?? "AI Vault";
  const excerpt = post?.excerpt ?? "Honest reviews and tutorials for AI tools.";
  const category = post ? (categoryColors[post.category.toLowerCase()]?.label ?? post.category) : "Article";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: `linear-gradient(135deg, #0d0d14 0%, ${colors.bg} 60%, #0d0d14 100%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${colors.accent}15 1px, transparent 1px), linear-gradient(90deg, ${colors.accent}15 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${colors.accent}20 0%, transparent 65%)`,
            top: "-200px",
            left: "-100px",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", zIndex: 1 }}>
          {/* Category badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "fit-content",
            }}
          >
            <div
              style={{
                background: `${colors.accent}25`,
                border: `1px solid ${colors.accent}60`,
                borderRadius: "8px",
                padding: "8px 20px",
                color: colors.accent,
                fontSize: "18px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              {category}
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              color: "#f1f5f9",
              fontSize: title.length > 60 ? "44px" : "52px",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-1px",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>

          {/* Excerpt */}
          <div
            style={{
              color: "#94a3b8",
              fontSize: "22px",
              lineHeight: 1.5,
              maxWidth: "820px",
              display: "-webkit-box",
              overflow: "hidden",
            }}
          >
            {excerpt.length > 120 ? excerpt.slice(0, 120) + "…" : excerpt}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: colors.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              🤖
            </div>
            <div
              style={{
                color: "#f1f5f9",
                fontSize: "22px",
                fontWeight: 800,
                letterSpacing: "-0.5px",
              }}
            >
              AI Vault
            </div>
          </div>
          <div style={{ color: "#475569", fontSize: "18px" }}>aivaultblog.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
