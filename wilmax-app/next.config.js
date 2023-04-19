/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const path = require('path');

module.exports = {
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
};
