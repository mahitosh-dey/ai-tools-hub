interface Props {
  pros: string[];
  cons: string[];
}

export default function ProsConsList({ pros, cons }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        margin: "1.5rem 0",
      }}
      className="pros-cons-grid"
    >
      {/* Pros */}
      <div
        style={{
          background: "rgba(74,222,128,0.06)",
          border: "1px solid rgba(74,222,128,0.2)",
          borderRadius: "10px",
          padding: "1.25rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "0.85rem",
            color: "#4ade80",
            fontWeight: 700,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          <span>✓</span> Pros
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
          {pros.map((pro, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.5 }}>
              <span style={{ color: "#4ade80", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div
        style={{
          background: "rgba(248,113,113,0.06)",
          border: "1px solid rgba(248,113,113,0.2)",
          borderRadius: "10px",
          padding: "1.25rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "0.85rem",
            color: "#f87171",
            fontWeight: 700,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          <span>✗</span> Cons
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
          {cons.map((con, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.5 }}>
              <span style={{ color: "#f87171", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>✗</span>
              {con}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .pros-cons-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
