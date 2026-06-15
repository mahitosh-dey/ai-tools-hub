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
    ];
  },
};

export default nextConfig;
