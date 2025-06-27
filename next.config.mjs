/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-west-2.cdn.hygraph.com',
        pathname: '/content/cmbj4nf4d01i707w8hzgu9oos/**',
      },
      {
        protocol: 'https',
        hostname: 'eu-west-2.graphassets.com',
        pathname: '/**', // Дозволяє будь-які шляхи
      },
    ],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
