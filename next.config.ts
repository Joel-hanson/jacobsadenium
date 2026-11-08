import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML for GitHub Pages (custom domain: jacobs-adenium.joelhanson.com)
  // cacheComponents / partialPrefetching enable PPR, which is incompatible with export.
  output: "export",
  trailingSlash: true,
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
