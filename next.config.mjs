/** @type {import('next').NextConfig} */

import nextPWA from '@ducanh2912/next-pwa';

const withPWA = nextPWA({
  dest: 'public',
  cacheOnFrontEndNavigation: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  register: true,
  // skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development', // disable PWA in dev mode
  disable: false // disable PWA in dev mode
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

// export default nextConfig
export default withPWA(nextConfig);
