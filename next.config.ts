import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/sumitPortfolio',
  trailingSlash: true,
  images: { unoptimized: true }
};

export default nextConfig;