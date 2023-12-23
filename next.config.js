/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['m.media-amazon.com']
  }
}

module.exports = nextConfig
