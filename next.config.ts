import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://ucampus.uchile.cl/**")
    ],
  }
};

export default nextConfig;
