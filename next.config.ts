import type { NextConfig } from "next";

const basePath = "/jacobsadenium";

const nextConfig: NextConfig = {
  // GitHub project Pages under joelhanson.com/jacobsadenium/
  output: "export",
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Required for static export — no image optimization server on Pages
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
