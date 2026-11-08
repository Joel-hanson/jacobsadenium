export type Guide = {
  slug: string;
  title: string;
  summary: string;
  readingMinutes: number;
  sections: { heading: string; body: string[] }[];
  tip: string;
};

export const guides: Guide[] = [
  {
    slug: "how-to-plant",
    title: "How to plant Adenium",
    summary:
      "Pot size, soil mix, and the first weeks after you bring a Desert Rose home.",
    readingMinutes: 4,
    tip: "Never leave Adenium sitting in a saucer of water — the caudex can rot.",
    sections: [
      {
        heading: "Choose the right pot",
        body: [
          "Pick a pot only a little wider than the root ball, with drainage holes. Adenium likes a snug home more than a deep, wet one.",
          "Clay or terracotta pots dry faster than plastic — helpful in humid weather.",
        ],
      },
      {
        heading: "Use fast-draining soil",
        body: [
          "Mix garden soil or coco peat with coarse sand / perlite / small gravel so water runs through quickly.",
          "Avoid heavy black soil that stays soggy after rain.",
        ],
      },
      {
        heading: "Planting steps",
        body: [
          "1. Fill the pot partway with mix and set the plant so the caudex sits slightly above the soil line.",
          "2. Backfill gently — do not bury the swollen stem deep.",
          "3. Water lightly once, then wait until the top soil is dry before watering again.",
          "4. Keep in bright light; harden off gradually if it came from shade.",
        ],
      },
    ],
  },
  {
    slug: "watering-and-sunlight",
    title: "Watering and sunlight",
    summary:
      "How much sun Adenium wants, and a simple watering rhythm for Indian weather.",
    readingMinutes: 3,
    tip: "In monsoon, water less — grey skies and rain already keep the soil moist.",
    sections: [
      {
        heading: "Sunlight",
        body: [
          "Adenium blooms best in 4–6+ hours of direct sun. A bright balcony or open terrace is ideal.",
          "If leaves bleach or burn, give light afternoon shade while keeping morning sun.",
        ],
      },
      {
        heading: "Watering rhythm",
        body: [
          "Water thoroughly, then let the soil dry out before the next drink. Stick a finger 2–3 cm into the mix — if it feels dry, water.",
          "In hot dry months you may water more often; in cool or rainy months, much less.",
          "Yellow, soft caudex often means too much water. Wrinkled caudex with dry soil usually means it needs a drink.",
        ],
      },
    ],
  },
  {
    slug: "common-problems",
    title: "Common problems and fixes",
    summary:
      "Yellow leaves, no flowers, pests, and soft stems — what they usually mean.",
    readingMinutes: 4,
    tip: "When in doubt, improve drainage and light before adding fertiliser.",
    sections: [
      {
        heading: "No blooms",
        body: [
          "Most often: not enough sun, or the plant is still young. Grafted plants flower sooner than seedlings.",
          "Feed lightly in the growing season with a bloom-friendly fertiliser; skip heavy nitrogen that only pushes leaves.",
        ],
      },
      {
        heading: "Yellow leaves or leaf drop",
        body: [
          "Can be overwatering, sudden cold, or normal shedding before a rest period. Check soil moisture first.",
          "Remove soft yellow leaves; keep the caudex dry if the soil is wet.",
        ],
      },
      {
        heading: "Soft or rotting caudex",
        body: [
          "Act fast: unpot, trim soft tissue to firm wood, let the cut dry, then repot in fresh dry mix. Water sparingly until new growth appears.",
          "Prevention is better — always use pots with holes and airy soil.",
        ],
      },
      {
        heading: "Pests",
        body: [
          "Watch for aphids, mealybugs, and spider mites on new shoots. Wipe with a soft cloth and mild soapy water, or use a plant-safe spray.",
          "Isolate a badly affected plant so pests do not spread across the nursery shelf.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
