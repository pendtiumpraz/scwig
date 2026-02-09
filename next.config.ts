import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization for Vercel
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Disable image optimization in production if needed (for static export)
    unoptimized: false,
  },
  // Ensure trailing slashes are consistent
  trailingSlash: false,
  // Enable React strict mode
  reactStrictMode: true,
  // Suppress hydration warnings in development
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
