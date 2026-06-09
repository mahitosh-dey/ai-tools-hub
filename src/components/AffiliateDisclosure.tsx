export default function AffiliateDisclosure() {
  return (
    <div
      style={{
        background: "rgba(168,85,247,0.08)",
        border: "1px solid rgba(168,85,247,0.2)",
        borderRadius: "8px",
        padding: "0.75rem 1rem",
        display: "flex",
        gap: "0.5rem",
        alignItems: "flex-start",
        fontSize: "0.8rem",
        color: "#94a3b8",
        marginBottom: "2rem",
      }}
    >
      <span>ℹ️</span>
      <span>
        <strong style={{ color: "#c084fc" }}>Disclosure:</strong> This post
        contains affiliate links. If you purchase through our links, we may earn
        a commission at no extra cost to you. We only recommend tools we
        genuinely use and trust.
      </span>
    </div>
  );
}
