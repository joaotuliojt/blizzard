/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.brchallenges.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.brchallenges.com',
        port: '',
        pathname: '/api/blizzard/games/**',
      },
    ],
  },
}

module.exports = nextConfig
