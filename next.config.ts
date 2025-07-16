import type { NextConfig } from "next";

const NextConfig = {
  output: 'export',
  // Optional if deploying to GitHub Pages:
  basePath: '/your-repo-name',
  assetPrefix: '/your-repo-name/',
};

export default NextConfig;
