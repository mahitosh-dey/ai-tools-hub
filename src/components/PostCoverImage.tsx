import Image from "next/image";

const categoryConfig: Record<string, { emoji: string; gradient: string }> = {
  reviews:     { emoji: "⭐", gradient: "linear-gradient(135deg, #1e1040 0%, #2d1b69 50%, #1a0a3d 100%)" },
  tutorials:   { emoji: "📖", gradient: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 50%, #0d2137 100%)" },
  comparisons: { emoji: "⚖️", gradient: "linear-gradient(135deg, #0d1f0d 0%, #1a3d1a 50%, #0a1a0a 100%)" },
  tools:       { emoji: "🛠️", gradient: "linear-gradient(135deg, #1a0d0d 0%, #3d1a1a 50%, #1a0a0a 100%)" },
  news:        { emoji: "📰", gradient: "linear-gradient(135deg, #1a1a0d 0%, #3d3d1a 50%, #1a1a0a 100%)" },
};

const defaultConfig = { emoji: "🤖", gradient: "linear-gradient(135deg, #13131e 0%, #1c1c2e 50%, #0d0d14 100%)" };

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
          margin: "0 auto 0",
          borderRadius: "0 0 16px 16px",
          overflow: "hidden",
          height: "320px",
          position: "relative",
        }}
      >
        <Image
          src={coverImage!}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "780px",
        margin: "0 auto",
        borderRadius: "0 0 16px 16px",
        overflow: "hidden",
        height: "200px",
        background: config.gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        borderLeft: "1px solid #252538",
        borderRight: "1px solid #252538",
        borderBottom: "1px solid #252538",
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position: "absolute", width: "300px", height: "300px",
        background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
        borderRadius: "50%", top: "-50px", left: "30%",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: "200px", height: "200px",
        background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)",
        borderRadius: "50%", bottom: "-30px", right: "20%",
        pointerEvents: "none",
      }} />

      <span style={{ fontSize: "4.5rem", position: "relative", zIndex: 1, filter: "drop-shadow(0 4px 24px rgba(168,85,247,0.3))" }}>
        {config.emoji}
      </span>
    </div>
  );
}
