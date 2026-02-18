/** @type {import('next').NextConfig} */
const repo = "BesaHaliYikama";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },

  // GitHub Pages project site: /REPO_NAME/
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,

  // export’ta linklerin düzgün çalışması için iyi olur
  trailingSlash: true,
};

export default nextConfig;
