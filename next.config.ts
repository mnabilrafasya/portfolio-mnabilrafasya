import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.18.12"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
