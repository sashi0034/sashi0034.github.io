/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages用の設定は本番環境でのみ適用
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/sashi0034.github.io',
    trailingSlash: true,
  }),
}

module.exports = nextConfig 