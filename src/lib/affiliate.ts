/**
 * Affiliate link registry.
 *
 * Google asks for paid links to carry rel="sponsored". Applying that to every
 * outbound link would be wrong: most links in these posts are citations to
 * vendor docs and news reports, and marking those would misrepresent them and
 * throw away the signal they are meant to pass. So we match known affiliate
 * URLs only.
 *
 * Add a pattern here whenever a new affiliate programme goes live, or the link
 * ships unmarked.
 */
const AFFILIATE_PATTERNS: RegExp[] = [
  // ElevenLabs partner programme
  /^https?:\/\/try\.elevenlabs\.io\//i,
];

export function isAffiliateLink(href: string | undefined): boolean {
  if (!href) return false;
  return AFFILIATE_PATTERNS.some((re) => re.test(href));
}
