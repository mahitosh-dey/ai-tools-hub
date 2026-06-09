import Link from "next/link";

const categoryColors: Record<string, { bg: string; color: string }> = {
  reviews: { bg: "rgba(168,85,247,0.15)", color: "#c084fc" },
  tutorials: { bg: "rgba(34,211,238,0.15)", color: "#22d3ee" },
  comparisons: { bg: "rgba(236,72,153,0.15)", color: "#f472b6" },
  tools: { bg: "rgba(250,204,21,0.15)", color: "#fbbf24" },
  news: { bg: "rgba(52,211,153,0.15)", color: "#34d399" },
  general: { bg: "rgba(148,163,184,0.15)", color: "#94a3b8" },
};

interface Props {
  category: string;
  asLink?: boolean;
}

export default function CategoryBadge({ category, asLink = true }: Props) {
  const key = category.toLowerCase();
  const style = categoryColors[key] ?? categoryColors.general;

  const badge = (
    <span
      style={{
        background: style.bg,
        color: style.color,
        padding: "0.2rem 0.7rem",
        borderRadius: "20px",
        fontSize: "0.75rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      {category}
    </span>
  );

  if (asLink) {
    return (
      <Link
        href={`/category/${key}`}
        style={{ textDecoration: "none" }}
      >
        {badge}
      </Link>
    );
  }

  return badge;
}
