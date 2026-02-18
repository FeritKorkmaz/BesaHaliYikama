export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const withBasePath = (p: string) =>
  `${basePath}${p.startsWith("/") ? p : `/${p}`}`;
