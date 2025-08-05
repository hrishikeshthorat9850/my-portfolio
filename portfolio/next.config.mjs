/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
