import Link from "next/link";

interface Props {
  /** Advertiser name. Falls back to a generic wording if absent, but always set it. */
  sponsoredBy?: string;
}

/**
 * Paid-placement disclosure. Deliberately louder than AffiliateDisclosure:
 * an affiliate link pays on a reader action, a paid placement pays for the
 * post existing at all, so the reader needs to know before the first
 * paragraph rather than in a footer.
 *
 * Amber rather than the site purple so it does not read as decoration.
 */
export default function SponsoredNotice({ sponsoredBy }: Props) {
  return (
    <div
      style={{
        background: "rgba(245,158,11,0.08)",
        border: "1px solid rgba(245,158,11,0.35)",
        borderRadius: "10px",
        padding: "0.9rem 1.1rem",
        display: "flex",
        gap: "0.65rem",
        alignItems: "flex-start",
        fontSize: "0.84rem",
        color: "#cbd5e1",
        lineHeight: 1.65,
        marginBottom: "2rem",
      }}
    >
      <span aria-hidden="true" style={{ flexShrink: 0 }}>💰</span>
      <span>
        <strong style={{ color: "#fbbf24" }}>Paid placement.</strong>{" "}
        {sponsoredBy ? <>{sponsoredBy} paid for this post to exist.</> : <>An advertiser paid for this post to exist.</>}{" "}
        They did not pay for the verdict, they had no approval over the wording,
        and they did not see it before publication. Outbound links to them are
        marked <code style={{ color: "#fbbf24", fontSize: "0.8rem" }}>rel=&quot;sponsored&quot;</code> and earn us nothing per click.{" "}
        <Link href="/disclosure" style={{ color: "#fbbf24", textDecoration: "underline" }}>
          How paid placements work here
        </Link>
        .
      </span>
    </div>
  );
}
