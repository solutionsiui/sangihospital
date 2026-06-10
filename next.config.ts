import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/specializations",
        destination: "/specialities",
        permanent: true,
      },
      {
        source: "/specializations/:slug",
        destination: "/specialities/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
