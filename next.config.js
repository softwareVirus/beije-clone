/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beije.co',
        port: '',
        pathname: '/_next/**',
      },
    ],
  },
}

module.exports = nextConfig
