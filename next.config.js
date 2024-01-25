/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'www.upwork.com',
        },
        // Add more hostnames as needed
      ],
  },
};

module.exports = nextConfig;
