import type { MetadataRoute } from "next";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: asset("/"),
    display: "standalone",
    background_color: "#1A332D",
    theme_color: "#1A332D",
    icons: [
      {
        src: asset("/brand/favicon-32.png"),
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: asset("/brand/favicon-64.png"),
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: asset("/brand/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: asset("/brand/app-icon.png"),
        sizes: "320x320",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
