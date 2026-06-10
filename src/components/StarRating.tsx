interface Props {
  rating: number;
  maxRating?: number;
  showNumber?: boolean;
}

export default function StarRating({ rating, maxRating = 5, showNumber = true }: Props) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalf ? 1 : 0);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        background: "rgba(168,85,247,0.08)",
        border: "1px solid rgba(168,85,247,0.2)",
        borderRadius: "10px",
        padding: "0.5rem 1rem",
      }}
    >
      <div style={{ display: "flex", gap: "2px" }}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`} style={{ color: "#f59e0b", fontSize: "1.1rem" }}>★</span>
        ))}
        {hasHalf && <span style={{ color: "#f59e0b", fontSize: "1.1rem", opacity: 0.6 }}>★</span>}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} style={{ color: "#334155", fontSize: "1.1rem" }}>★</span>
        ))}
      </div>
      {showNumber && (
        <span style={{ color: "#f1f5f9", fontWeight: 700, fontSize: "0.95rem" }}>
          {rating}/{maxRating}
        </span>
      )}
    </div>
  );
}
