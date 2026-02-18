/** @type {import('next').NextConfig} */
const target = process.env.DEPLOY_TARGET ?? "github";
const repo = "BesaHaliYikama";
const isGithub = target === "github";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  ...(isGithub
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}`,
      }
    : {}),
};

export default nextConfig;
