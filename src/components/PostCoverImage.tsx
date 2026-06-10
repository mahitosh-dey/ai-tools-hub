import Image from "next/image";

const categoryConfig: Record<string, {
  emoji: string;
  gradient: string;
  accent: string;
  accentSoft: string;
}> = {
  reviews: {
    emoji: "⭐",
    gradient: "linear-gradient(135deg, #0f0720 0%, #1e0f40 40%, #2d1b69 100%)",
    accent: "#a855f7",
    accentSoft: "rgba(168,85,247,0.18)",
  },
  tutorials: {
    emoji: "📖",
    gradient: "linear-gradient(135deg, #050e1f 0%, #0a1e3d 40%, #0f3460 100%)",
    accent: "#38bdf8",
    accentSoft: "rgba(56,189,248,0.15)",
  },
  comparisons: {
    emoji: "⚖️",
    gradient: "linear-gradient(135deg, #061206 0%, #0d2610 40%, #1a3d1a 100%)",
    accent: "#4ade80",
    accentSoft: "rgba(74,222,128,0.15)",
  },
  tools: {
    emoji: "🛠️",
    gradient: "linear-gradient(135deg, #1a0505 0%, #2d0f0f 40%, #3d1515 100%)",
    accent: "#f97316",
    accentSoft: "rgba(249,115,22,0.15)",
  },
  news: {
    emoji: "📰",
    gradient: "linear-gradient(135deg, #0f0f05 0%, #1f1f0a 40%, #2e2e10 100%)",
    accent: "#facc15",
    accentSoft: "rgba(250,204,21,0.15)",
  },
};

const defaultConfig = {
  emoji: "🤖",
  gradient: "linear-gradient(135deg, #0a0a14 0%, #13131e 40%, #1c1c2e 100%)",
  accent: "#a855f7",
  accentSoft: "rgba(168,85,247,0.15)",
};

interface Props {
  coverImage?: string;
  category: string;
  title: string;
}

export default function PostCoverImage({ coverImage, category, title }: Props) {
  const hasRealImage = coverImage && !coverImage.includes("default-cover");
  const config = categoryConfig[category.toLowerCase()] ?? defaultConfig;

  if (hasRealImage) {
    return (
      <div
        style={{
          width: "100%",
          maxWidth: "780px",
          margin: "0 auto",
          borderRadius: "0 0 20px 20px",
          overflow: "hidden",
          height: "300px",
          position: "relative",
          borderLeft: "1px solid rgba(255,255,255,0.06)",
          borderRight: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Image
          src={coverImage!}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Dark overlay so title is always readable */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
        }} />
        {/* Accent top border */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "3px",
          background: `linear-gradient(90deg, transparent 0%, ${config.accent} 30%, ${config.accent} 70%, transparent 100%)`,
        }} />
        {/* Title overlay */}
        <div style={{
          position: "absolute", zIndex: 1, bottom: 0, left: 0, right: 0,
          padding: "1.5rem 2.5rem 2rem",
          display: "flex", flexDirection: "column", gap: "0.6rem",
        }}>
          <span style={{
            fontSize: "0.72rem", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.12em",
            color: config.accent,
            background: `${config.accentSoft}`,
            border: `1px solid ${config.accent}40`,
            borderRadius: "6px", padding: "0.3rem 0.75rem",
            width: "fit-content",
          }}>
            {category}
          </span>
          <h2 style={{
            fontSize: "clamp(1.15rem, 2.8vw, 1.6rem)",
            fontWeight: 800, color: "#f1f5f9",
            lineHeight: 1.3, letterSpacing: "-0.02em",
            margin: 0, maxWidth: "580px",
            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
          }}>
            {title}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "780px",
        margin: "0 auto",
        borderRadius: "0 0 20px 20px",
        overflow: "hidden",
        height: "300px",
        background: config.gradient,
        position: "relative",
        borderLeft: "1px solid rgba(255,255,255,0.06)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Grid lines */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(${config.accent}18 1px, transparent 1px), linear-gradient(90deg, ${config.accent}18 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      {/* Top-left glow */}
      <div style={{
        position: "absolute", width: "400px", height: "400px",
        background: `radial-gradient(circle, ${config.accentSoft} 0%, transparent 65%)`,
        borderRadius: "50%", top: "-120px", left: "-60px",
        pointerEvents: "none",
      }} />

      {/* Bottom-right glow */}
      <div style={{
        position: "absolute", width: "300px", height: "300px",
        background: `radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 65%)`,
        borderRadius: "50%", bottom: "-80px", right: "-40px",
        pointerEvents: "none",
      }} />

      {/* Accent top border */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "3px",
        background: `linear-gradient(90deg, transparent 0%, ${config.accent} 30%, ${config.accent} 70%, transparent 100%)`,
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem 2.5rem",
        gap: "1rem",
      }}>
        {/* Category badge + emoji row */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{
            fontSize: "2rem",
            filter: `drop-shadow(0 2px 12px ${config.accent}60)`,
            lineHeight: 1,
          }}>
            {config.emoji}
          </span>
          <span style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: config.accent,
            background: `${config.accentSoft}`,
            border: `1px solid ${config.accent}40`,
            borderRadius: "6px",
            padding: "0.3rem 0.75rem",
          }}>
            {category}
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: "clamp(1.15rem, 2.8vw, 1.6rem)",
          fontWeight: 800,
          color: "#f1f5f9",
          lineHeight: 1.3,
          letterSpacing: "-0.02em",
          margin: 0,
          maxWidth: "580px",
          textShadow: "0 2px 20px rgba(0,0,0,0.5)",
        }}>
          {title}
        </h2>

        {/* Decorative line */}
        <div style={{
          width: "48px",
          height: "3px",
          borderRadius: "2px",
          background: `linear-gradient(90deg, ${config.accent}, transparent)`,
        }} />
      </div>
    </div>
  );
}
