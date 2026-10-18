/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export a fully static site so it can be served by GitHub Pages
  output: 'export',
  trailingSlash: true
};

module.exports = nextConfig;
