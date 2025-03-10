import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "upload.wikimedia.org",
        port: '',
      }
    ]
  }
};

export default nextConfig;
