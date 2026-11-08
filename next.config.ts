import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub project Pages under joelhanson.com/jacobsadenium/
  // (user site joel-hanson.github.io already uses joelhanson.com)
  output: "export",
  basePath: "/jacobsadenium",
  trailingSlash: true,
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
