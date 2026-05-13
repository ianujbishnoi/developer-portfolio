/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/developer-portfolio",
  assetPrefix: "/developer-portfolio/",
};

export default nextConfig;
