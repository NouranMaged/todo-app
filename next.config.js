/** @type {import('next').NextConfig} */
const nextConfig = {
  srcDir: "src",
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
