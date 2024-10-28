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




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: `${process.env.BACKEND_BASE_URL || 'https://basedatastorev2-production.up.railway.app'}/api/:path*`,
//       },
//       {
//         source: '/login',
//         destination: '/pages/login',
//       },
//       {
//         source: '/register',
//         destination: '/pages/register',
//       }
//     ];
//   },
//   env: {
//     CSRF_SECRET: process.env.CSRF_SECRET,
//   },
//   webpack: (config, { dev, isServer }) => {
//     // Ignore window error during SSR
//     if (isServer) {
//       config.optimization = {
//         ...config.optimization,
//         nodeEnv: false
//       };
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           ...config.resolve.fallback,
//           window: false
//         }
//       };
//     }
//     return config;
//   },
//   logger: {
//     error(err) {
//       if (err.message?.includes('window is not defined')) return;
//       console.error(err);
//     }
//   }
// };

// module.exports = nextConfig;