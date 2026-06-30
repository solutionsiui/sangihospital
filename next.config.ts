import type { NextConfig } from "next";
import { siteRedirects } from "./lib/redirects";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return siteRedirects;
  },
};

export default nextConfig;
