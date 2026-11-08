import type { Metadata } from "next";
import { PlantCard } from "@/components/PlantCard";
import { adeniums, otherPlants } from "@/lib/plants";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plants",
  description:
    "Adenium (Desert Rose) and other plants from Jacobs Adenium nursery in Manalur. Call to order.",
};

export default function PlantsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-2xl">
        <p className="section-label">Catalog</p>
        <h1 className="font-display mt-3 text-5xl text-forest sm:text-6xl">
          Plants
        </h1>
        <p className="mt-4 text-lg text-muted">
          Browse what we typically grow. Availability changes — call or WhatsApp
          to ask what’s ready this week.
        </p>
        <a
          href={whatsappHref(
            "Hi Jacobs Adenium, can you share which plants are available this week?",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-sun mt-6"
        >
          WhatsApp {site.phoneDisplay}
        </a>
      </header>

      <section className="mt-16">
        <h2 className="font-display text-3xl text-forest">Adenium</h2>
        <p className="mt-1 text-sm text-muted">Our main focus — Desert Rose.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {adeniums().map((plant, i) => (
            <PlantCard
              key={plant.id}
              plant={plant}
              accent={i % 3 === 1 ? "lime" : "mist"}
            />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-3xl text-forest">Bougainvillea</h2>
        <p className="mt-1 text-sm text-muted">
          Classic bougainvillea — colourful climbers for sun and fences.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherPlants().map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>
    </div>
  );
}
