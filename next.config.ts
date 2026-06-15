import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "aivaultblog.com" }],
        destination: "https://www.aivaultblog.com/:path*",
        permanent: true,
      },
      // Old slug indexed by Google — redirect to current canonical URL
      {
        source: "/blog/chatgpt-review-2025",
        destination: "/blog/chatgpt-plus-review",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
