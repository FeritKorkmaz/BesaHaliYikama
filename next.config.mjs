/** @type {import('next').NextConfig} */
const repo = "BesaHaliYikama";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },

  // GitHub Pages project site: /REPO_NAME/
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  // export’ta linklerin düzgün çalışması için iyi olur
  trailingSlash: true,
};

export default nextConfig;
