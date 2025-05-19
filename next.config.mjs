/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'a0.muscache.com'
      },
      {
        protocol: 'https',
        hostname: 't3.ftcdn.net'
      } ,
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com'
      } ,
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com'
      }
    ],
  },
};

export default nextConfig;
