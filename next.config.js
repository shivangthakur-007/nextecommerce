/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com" }],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = config;
