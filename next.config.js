/** @type {import('next').NextConfig} */

const nextConfig = {
   async rewrites() {
      return {
        afterFiles: [
          // These rewrites are checked after pages/public files
          // are checked but before dynamic routes
          {
            source: '/:path*',
            destination: `/helper`,
          },
        ],
      }
    },
}

module.exports = nextConfig
