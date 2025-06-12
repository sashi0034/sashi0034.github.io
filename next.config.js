/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/sashi0034.github.io' : ''

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: isProd ? 'export' : undefined,
  basePath,
  ...(isProd && { distDir: 'out' }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    })
    return config
  }
}

module.exports = nextConfig 