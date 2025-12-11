/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/devcenturionai-3d',
  assetPrefix: '/devcenturionai-3d/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
