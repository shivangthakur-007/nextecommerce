/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [{ hostname: "plus.unsplash.com" }],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = config;
