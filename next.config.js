// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home', // or your actual home route if different
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
