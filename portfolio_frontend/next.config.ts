import type { NextConfig } from "next";

/**
 * Next.js configuration for static export.
 * - output: 'export' enables static HTML export.
 * - images.unoptimized: true disables next/image optimization which is incompatible with static export without a remote loader.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
