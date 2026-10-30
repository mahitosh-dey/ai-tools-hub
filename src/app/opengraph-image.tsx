import { ImageResponse } from "next/og";

// Site-wide fallback OG image. Next.js applies this to every route that does
// not define its own opengraph-image, which is everything except /blog/[slug].
// It replaces /og-default.png, a file that was referenced in eleven places and
// had never existed, so every share of every page rendered with no image.
export const alt = "AI Vault: honest reviews, tutorials and comparisons of AI tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const accent = "#a855f7";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0d0d14 0%, #13131e 60%, #0d0d14 100%)",
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
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${accent}15 1px, transparent 1px), linear-gradient(90deg, ${accent}15 1px, transparent 1px)`,
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
            background: `radial-gradient(circle, ${accent}20 0%, transparent 65%)`,
            top: "-200px",
            left: "-100px",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", zIndex: 1 }}>
          {/* The badge needs a flex row around it, or Satori stretches it
              across the full width of the card. */}
          <div style={{ display: "flex", alignItems: "center", width: "fit-content" }}>
            <div
              style={{
                background: `${accent}25`,
                border: `1px solid ${accent}60`,
                borderRadius: "8px",
                padding: "8px 20px",
                color: accent,
                fontSize: "18px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              AI Vault
            </div>
          </div>

          <div
            style={{
              color: "#f1f5f9",
              fontSize: "58px",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-1px",
              maxWidth: "900px",
            }}
          >
            Reviews, tutorials and comparisons of AI tools
          </div>

          <div
            style={{
              color: "#94a3b8",
              fontSize: "24px",
              lineHeight: 1.5,
              maxWidth: "820px",
            }}
          >
            Every price read off the vendor's own page, every claim checked, and the read date published.
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
                background: accent,
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
