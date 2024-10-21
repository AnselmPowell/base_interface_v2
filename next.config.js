// const config = require('./src/config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.BACKEND_BASE_URL || 'https://basedatastorev2-production.up.railway.app'}/api/:path*`,
      },
      {
        source: '/login',
        destination: '/pages/login',
      },
      {
        source: '/register',
        destination: '/pages/register',
      }
    ];
  },
  env: {
    CSRF_SECRET: process.env.CSRF_SECRET,
  },
};

module.exports = nextConfig;