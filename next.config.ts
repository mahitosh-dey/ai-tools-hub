import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
