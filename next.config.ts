import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/GameFan",
  assetPrefix: "/GameFan/",
};

export default nextConfig;