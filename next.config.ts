import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Pin the workspace root — a stray package-lock.json in the home dir otherwise
  // makes Next infer the wrong root. __dirname is this project directory.
  turbopack: { root: __dirname },
};

export default nextConfig;
