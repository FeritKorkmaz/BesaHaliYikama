/** @type {import('next').NextConfig} */
const repo = "BesaHaliYikama";
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,

  ...(isProd
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}`,
      }
    : {}),
};

export default nextConfig;
