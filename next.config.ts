import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Option 1: Allow all external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ✅ allows any host
      },
      {
        protocol: 'http',
        hostname: '**', // optional if using http
      },
    ],
  }
};

export default nextConfig;
