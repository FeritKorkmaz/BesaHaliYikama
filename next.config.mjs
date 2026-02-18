/** @type {import('next').NextConfig} */
const repo = "BesaHaliYikama"; // GitHub repo adın (URL’de ne yazıyorsa)

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
