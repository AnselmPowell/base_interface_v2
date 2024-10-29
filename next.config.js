// const config = require('./src/config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const isProduction = process.env.IS_PRODUCTION_BACKEND === 'true';
    const baseUrl = isProduction 
      ? process.env.BACKEND_BASE_URL || 'https://basedatastorev2-production.up.railway.app/'
      : process.env.BACKEND_BASE_URL_DEV || 'http://localhost:8001/';
    return [
      {
        source: '/api/:path*',
        destination: `${baseUrl || 'https://basedatastorev2-production.up.railway.app'}/api/:path*`,
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
    // Environment switches
    IS_PRODUCTION_FRONTEND: process.env.IS_PRODUCTION_FRONTEND,
    IS_PRODUCTION_BACKEND: process.env.IS_PRODUCTION_BACKEND,

    // URLs - Production
    FRONTEND_BASE_URL: process.env.FRONTEND_BASE_URL,
    BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
    BACKEND_API_URL: process.env.BACKEND_API_URL,

    // URLs - Development
    FRONTEND_BASE_URL_DEV: process.env.FRONTEND_BASE_URL_DEV,
    BACKEND_BASE_URL_DEV: process.env.BACKEND_BASE_URL_DEV,
    BACKEND_API_URL_DEV: process.env.BACKEND_API_URL_DEV,

    // OAuth - Google
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
    GOOGLE_CALLBACK_URL_DEV: process.env.GOOGLE_CALLBACK_URL_DEV,

    // OAuth - Microsoft
    MICROSOFT_CLIENT_ID: process.env.MICROSOFT_CLIENT_ID,
    MICROSOFT_CALLBACK_URL: process.env.MICROSOFT_CALLBACK_URL,
    MICROSOFT_CALLBACK_URL_DEV: process.env.MICROSOFT_CALLBACK_URL_DEV,

    // Database
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_URL_DEV: process.env.POSTGRES_URL_DEV,
  },
};


