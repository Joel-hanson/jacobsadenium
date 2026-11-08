export const adeniumIntro = {
  title: "What is Adenium?",
  subtitle: "Also called Desert Rose",
  body: [
    "Adenium (Adenium obesum) is a sun-loving flowering plant known for its thick water-storing caudex and bright trumpet blooms. Native to dry regions of Africa and the Arabian Peninsula, it thrives in Kerala when given bright light and well-draining soil.",
    "At Jacobs Adenium we grow fuchsia pink, classic pink, purple-white, coral, creamy white, and more — so you can pick the bloom that fits your balcony or garden.",
  ],
  facts: [
    { label: "Also known as", value: "Desert Rose" },
    { label: "Best light", value: "4–6+ hours of sun" },
    { label: "Water", value: "Only when soil is dry" },
    { label: "Great for", value: "Balconies & patios" },
  ],
};

export type AdeniumColor = {
  id: string;
  name: string;
  description: string;
  swatch: string;
  image: string;
};

export const adeniumColors: AdeniumColor[] = [
  {
    id: "pink",
    name: "Classic Pink",
    description: "Bright pink blooms — our most loved starter colour.",
    swatch: "#e85a8c",
    image: "/plants/adenium-3d.webp",
  },
  {
    id: "purple-white",
    name: "Purple & White",
    description: "Magenta edges fading to a white throat — striking bicolour.",
    swatch: "#8b3a9b",
    image: "/plants/adenium-3d-purple.webp",
  },
  {
    id: "coral",
    name: "Coral Pink",
    description: "Warm coral-to-cream blooms — bright and cheerful.",
    swatch: "#e86b4a",
    image: "/plants/adenium-3d-coral.webp",
  },
  {
    id: "cream",
    name: "Creamy White",
    description: "Cream-white petals with a golden yellow throat.",
    swatch: "#f5ecd0",
    image: "/plants/adenium-3d-cream.webp",
  },
  {
    id: "pink-cream",
    name: "Pink & Cream",
    description: "Soft pink rim with a creamy centre — elegant in morning light.",
    swatch: "#f2a0b8",
    image: "/plants/color-pink-white.webp",
  },
  {
    id: "deep-pink",
    name: "Deep Pink",
    description: "Rich, saturated petals for a bold patio statement.",
    swatch: "#c9184a",
    image: "/plants/color-vibrant.webp",
  },
];
