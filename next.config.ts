import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    //    appDir: true, // Removed as it is not recognized in ExperimentalConfig
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
// next.config.js


export default nextConfig;
