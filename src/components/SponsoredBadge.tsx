/**
 * Small "Sponsored" label for post listings. Shared by BlogCard and
 * FeaturedPost so a paid post cannot be labelled in one listing and unlabelled
 * in another. `overlay` positions it over a thumbnail; without it the badge
 * sits inline in a meta row.
 */
export default function SponsoredBadge({ overlay = false }: { overlay?: boolean }) {
  return (
    <span
      style={{
        ...(overlay
          ? ({ position: "absolute", top: "0.6rem", right: "0.6rem" } as const)
          : {}),
        display: "inline-block",
        background: "rgba(20,15,3,0.85)",
        border: "1px solid rgba(245,158,11,0.5)",
        color: "#fbbf24",
        fontSize: "0.66rem",
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        padding: "0.2rem 0.45rem",
        borderRadius: "5px",
        lineHeight: 1.4,
      }}
    >
      Sponsored
    </span>
  );
}
