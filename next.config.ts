import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*" // Allow loading images from any external source (API may return images from various domains)
      }
    ]
  }
};

export default nextConfig;
