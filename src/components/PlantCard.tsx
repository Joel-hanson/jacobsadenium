import Image from "next/image";
import type { Plant } from "@/lib/plants";
import { whatsappHref } from "@/lib/site";

export function PlantCard({
  plant,
  featured = false,
  accent = "mist",
}: {
  plant: Plant;
  featured?: boolean;
  accent?: "mist" | "lime" | "forest";
}) {
  const accents = {
    mist: "bg-card",
    lime: "bg-lime-soft",
    forest: "bg-forest text-foam",
  };

  return (
    <article
      className={`plant-tile overflow-hidden rounded-[1.75rem] ${accents[accent]} ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/5]"
        } ${plant.image.endsWith(".png") ? "bg-mint-deep/60" : ""}`}
      >
        <Image
          src={plant.image}
          alt={plant.name}
          fill
          className={`plant-media ${
            plant.image.endsWith(".png")
              ? "object-contain p-4 sm:p-6"
              : "object-cover"
          }`}
          sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        {!featured && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 to-transparent p-5 pt-16">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-lime">
              {plant.category === "adenium" ? "Adenium" : "Other"}
            </p>
            <h3 className="font-display mt-1 text-xl font-extrabold text-foam">
              {plant.name}
            </h3>
          </div>
        )}
      </div>

      {featured ? (
        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-lime-deep">
              Featured Adenium
            </p>
            <h3 className="font-display mt-1 text-2xl font-extrabold text-forest sm:text-3xl">
              {plant.name}
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted">{plant.note}</p>
          </div>
          <a
            href={whatsappHref(
              `Hi Jacobs Adenium, I'm interested in "${plant.name}". Is it available?`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sun shrink-0"
          >
            WhatsApp to order →
          </a>
        </div>
      ) : (
        <div className={`flex items-center justify-between gap-3 px-5 py-4 ${accent === "forest" ? "" : ""}`}>
          <p
            className={`line-clamp-1 text-sm ${
              accent === "forest" ? "text-foam/75" : "text-muted"
            }`}
          >
            {plant.priceLabel ?? "Ask for quote"}
          </p>
          <a
            href={whatsappHref(
              `Hi Jacobs Adenium, I'm interested in "${plant.name}". Is it available?`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-3.5 py-1.5 text-sm font-bold ${
              accent === "forest"
                ? "bg-lime text-forest-deep"
                : "bg-forest text-foam"
            }`}
          >
            WhatsApp
          </a>
        </div>
      )}
    </article>
  );
}
