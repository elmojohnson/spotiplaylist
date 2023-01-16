/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["i.scdn.co", "t.scdn.co", "mosaic.scdn.co"],
  },
};

module.exports = nextConfig;
