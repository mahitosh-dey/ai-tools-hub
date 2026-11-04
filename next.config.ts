import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export. Every route in this site is content built from MDX on disk,
  // so there is nothing to render per request: a rebuild on each commit does
  // the same job ISR used to. This is also what keeps the site on a free host.
  // It is deliberate, not a stopgap. See HOSTING.md.
  output: "export",

  images: {
    // Static export has no image optimiser. Covers are already encoded to webp
    // under 120 KB by scripts/optimize-images.mjs, so there is little left for
    // one to do. Do not drop the optimize step: it is now load bearing.
    unoptimized: true,
  },
};

export default nextConfig;
