import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/gamefan",
  assetPrefix: "/gamefan/",
};

export default nextConfig;