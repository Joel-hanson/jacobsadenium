export type Plant = {
  id: string;
  name: string;
  category: "adenium" | "other";
  note: string;
  priceLabel?: string;
  image: string;
  color?: string;
};

export const plants: Plant[] = [
  {
    id: "desert-rose-fuchsia",
    name: "Desert Rose — Fuchsia Pink",
    category: "adenium",
    color: "Fuchsia Pink",
    note: "Hot pink edges fading to a creamy centre. A bold bonsai-style Adenium.",
    priceLabel: "Ask for quote",
    image: "/plants/adenium-3d-fuchsia.webp",
  },
  {
    id: "desert-rose-3d",
    name: "Desert Rose — Signature Pink",
    category: "adenium",
    color: "Classic Pink",
    note: "Full caudex, bright pink blooms in a clean ceramic pot. Our signature Adenium look.",
    priceLabel: "Ask for quote",
    image: "/plants/adenium-3d.webp",
  },
  {
    id: "desert-rose-purple",
    name: "Desert Rose — Purple & White",
    category: "adenium",
    color: "Purple & White",
    note: "Magenta-edged petals with a white throat. A striking bicolour for sunny ledges.",
    priceLabel: "Ask for quote",
    image: "/plants/adenium-3d-purple.webp",
  },
  {
    id: "desert-rose-coral",
    name: "Desert Rose — Coral Pink",
    category: "adenium",
    color: "Coral Pink",
    note: "Warm coral petals fading to cream. A cheerful bonsai-style Adenium.",
    priceLabel: "Ask for quote",
    image: "/plants/adenium-3d-coral.webp",
  },
  {
    id: "desert-rose-cream",
    name: "Desert Rose — Creamy White",
    category: "adenium",
    color: "Creamy White",
    note: "Cream-white petals with a golden yellow throat. Soft and elegant.",
    priceLabel: "Ask for quote",
    image: "/plants/adenium-3d-cream.webp",
  },
  {
    id: "desert-rose-classic",
    name: "Desert Rose — Classic Pink",
    category: "adenium",
    color: "Classic Pink",
    note: "Full caudex, bright pink blooms. Great starter Adenium for sunny balconies.",
    priceLabel: "Ask for quote",
    image: "/plants/adenium-terrace.webp",
  },
  {
    id: "desert-rose-sun",
    name: "Desert Rose — Sunlit Bloom",
    category: "adenium",
    color: "Pink & Cream",
    note: "Pink-and-cream petals that glow in morning light. A showpiece for the patio.",
    priceLabel: "Ask for quote",
    image: "/plants/adenium-sun.webp",
  },
  {
    id: "desert-rose-edged",
    name: "Desert Rose — Pink Edge",
    category: "adenium",
    color: "White with Pink Edge",
    note: "Pale bloom with a soft pink outline — delicate and elegant.",
    priceLabel: "Ask for quote",
    image: "/plants/color-pink-edge.webp",
  },
  {
    id: "desert-rose-deep",
    name: "Desert Rose — Deep Pink",
    category: "adenium",
    color: "Deep Pink",
    note: "Saturated pink petals for a bold colour hit on the balcony.",
    priceLabel: "Ask for quote",
    image: "/plants/color-vibrant.webp",
  },
  {
    id: "adenium-young",
    name: "Young Adenium in Pot",
    category: "adenium",
    note: "Compact plant ready to grow on. Ideal if you want to shape your own caudex.",
    priceLabel: "Ask for quote",
    image: "/plants/adenium-pot-blue.webp",
  },
  {
    id: "bougainvillea-classic",
    name: "Bougainvillea — Classic",
    category: "other",
    note: "Classic paper-bract blooms in rich magenta-pink. Sun-loving climber for walls and arches.",
    priceLabel: "Ask for quote",
    image: "/plants/bougainvillea.webp",
  },
  {
    id: "bougainvillea-magenta",
    name: "Bougainvillea — Magenta",
    category: "other",
    note: "Vibrant magenta colour that lights up fences and balconies in full sun.",
    priceLabel: "Ask for quote",
    image: "/plants/bougainvillea-magenta.webp",
  },
  {
    id: "bougainvillea-foliage",
    name: "Bougainvillea — Lush Bloom",
    category: "other",
    note: "Dense green foliage with classic bougainvillea flowers — a Kerala favourite.",
    priceLabel: "Ask for quote",
    image: "/plants/bougainvillea-foliage.webp",
  },
];

/** Transparent product cutouts — use contain + mint backdrop instead of cover. */
export function isProductCutout(image: string) {
  return image.includes("adenium-3d");
}

export function adeniums() {
  return plants.filter((p) => p.category === "adenium");
}

export function otherPlants() {
  return plants.filter((p) => p.category === "other");
}
