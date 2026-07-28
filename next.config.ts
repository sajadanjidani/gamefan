import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Gamefan",
  assetPrefix: "/Gamefan/",
};

export default nextConfig;