import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    //    appDir: true, // Removed as it is not recognized in ExperimentalConfig
  },
};

export default nextConfig;
