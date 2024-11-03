/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "plus.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = config;
