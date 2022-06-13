/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: '/talk',
      destination: 'https://discord.gg/WD3jjxkxZa',
      permanent: true
    }
  ]
}

module.exports = nextConfig
