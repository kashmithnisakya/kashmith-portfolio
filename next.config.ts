import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // A stray lockfile in the home directory makes Next infer the wrong
  // workspace root; pin it to this project.
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
