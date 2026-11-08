import Image from "next/image";
import Link from "next/link";
import { adeniumColors, adeniumIntro } from "@/lib/adenium";
import { guides } from "@/lib/guides";
import { adeniums, isProductCutout } from "@/lib/plants";
import { site, telHref, whatsappHref } from "@/lib/site";

export default function HomePage() {
  const collection = adeniums();
  const thumbs = collection.slice(0, 4);
  const finest = collection.slice(0, 4);

  const heroColors = [
    {
      src: "/plants/adenium-3d-fuchsia.webp",
      name: "Fuchsia Pink",
      note: "Hot pink to cream centre",
    },
    {
      src: "/plants/adenium-3d-purple.webp",
      name: "Purple & White",
      note: "Magenta with white throat",
    },
    {
      src: "/plants/adenium-3d-coral.webp",
      name: "Coral Pink",
      note: "Warm coral to cream",
    },
    {
      src: "/plants/adenium-3d-cream.webp",
      name: "Creamy White",
      note: "Cream with golden centre",
    },
  ];

  return (
    <>
      {/* Landing hero — rounded panel like garden-landing reference */}
      <section className="bg-mint px-3 pb-6 pt-3 sm:px-5 sm:pb-8 sm:pt-4 lg:px-8">
        <div className="hero-panel relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] lg:rounded-[2.75rem]">
          {/* Soft decorative blobs */}
          <div
            className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-lime/10 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-lime/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-[18%] top-[12%] hidden h-28 w-28 rounded-full border border-lime/25 lg:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-[8%] top-[38%] hidden h-16 w-16 rounded-full bg-lime/20 lg:block"
            aria-hidden
          />

          <div className="relative grid items-center gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_1.05fr] lg:gap-6 lg:px-12 lg:py-14">
            {/* Copy */}
            <div className="relative z-10 max-w-xl">
              <p className="animate-fade inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-lime">
                <span aria-hidden>✦</span> Family nursery · Manalur
              </p>
              <h1 className="animate-rise font-display mt-5 text-[2.65rem] leading-[1.05] text-foam sm:text-5xl md:text-6xl lg:text-[3.6rem]">
                Grow Desert Rose
                <span className="mt-1 block text-lime">with us.</span>
              </h1>
              <p className="animate-rise-delay mt-5 max-w-md text-base leading-relaxed text-foam/75 sm:text-lg">
                Healthy Adenium plants from Jacobs Adenium — pick the colour you
                love, WhatsApp us, and visit the nursery in Thrissur.
              </p>
              <div className="animate-fade mt-7 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lime min-h-12 w-full justify-center sm:w-auto"
                >
                  WhatsApp now
                </a>
                <Link
                  href="/visit"
                  className="btn-ghost-light min-h-12 w-full justify-center sm:w-auto"
                >
                  Get directions
                </Link>
              </div>
              <p className="mt-4 text-sm text-foam/55">
                {site.phoneDisplay} · call & WhatsApp
              </p>
            </div>

            {/* Visual stage */}
            <div className="animate-fade relative mx-auto flex min-h-[22rem] w-full max-w-lg items-center justify-center sm:min-h-[26rem] lg:max-w-none">
              <div className="hero-orb relative z-10 aspect-square w-[78%] max-w-[22rem] overflow-hidden rounded-full border-[6px] border-lime/45 bg-forest-deep/40 sm:w-[85%] sm:max-w-[26rem]">
                <Image
                  src="/plants/adenium-3d-fuchsia.webp"
                  alt="Fuchsia pink Adenium"
                  fill
                  preload
                  quality={75}
                  className="object-contain p-4 sm:p-6"
                  sizes="(max-width: 768px) 70vw, 420px"
                />
              </div>

              {/* Floating colour chips */}
              <div className="float-card absolute left-0 top-[12%] z-20 hidden w-[9.5rem] rounded-2xl border border-white/15 bg-card/95 p-2.5 shadow-lg backdrop-blur-sm sm:block lg:left-2">
                <div className="relative mx-auto h-16 w-16">
                  <Image
                    src="/plants/adenium-3d-purple.webp"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <p className="mt-1 text-center text-xs font-bold text-forest">
                  Purple & White
                </p>
              </div>

              <div className="float-card-delay absolute bottom-[8%] right-0 z-20 hidden w-[9.5rem] rounded-2xl border border-white/15 bg-card/95 p-2.5 shadow-lg backdrop-blur-sm sm:block lg:right-2">
                <div className="relative mx-auto h-16 w-16">
                  <Image
                    src="/plants/adenium-3d-cream.webp"
                    alt=""
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <p className="mt-1 text-center text-xs font-bold text-forest">
                  Creamy White
                </p>
              </div>

              <div className="absolute -bottom-1 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:hidden">
                {heroColors.slice(1).map((c) => (
                  <div
                    key={c.name}
                    className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-lime/40 bg-card"
                  >
                    <Image
                      src={c.src}
                      alt={c.name}
                      fill
                      className="object-contain p-1"
                      sizes="56px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Colour row under hero panel */}
        <div className="mx-auto mt-5 max-w-6xl sm:mt-6">
          <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
            {heroColors.map((item) => (
              <div
                key={item.name}
                className="flex min-w-[75%] shrink-0 items-center gap-3 rounded-[1.35rem] bg-card p-3 shadow-[0_8px_24px_rgba(20,53,46,0.06)] sm:min-w-0 sm:flex-col sm:items-stretch sm:p-4"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1rem] bg-mint-deep/50 sm:mx-auto sm:h-28 sm:w-full sm:max-w-[8.5rem]">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-contain p-1.5"
                    sizes="120px"
                  />
                </div>
                <div className="sm:text-center">
                  <p className="font-display text-base text-forest">{item.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Adenium */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-label">{adeniumIntro.subtitle}</p>
            <h2 className="font-display mt-3 text-3xl text-forest sm:text-5xl">
              {adeniumIntro.title}
            </h2>
            <div className="mt-5 space-y-4 text-muted">
              {adeniumIntro.body.map((para) => (
                <p key={para.slice(0, 28)} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <Link href="/grow" className="btn-forest mt-8">
              Learn how to grow →
            </Link>
          </div>

          <dl className="grid gap-3 sm:grid-cols-2">
            {adeniumIntro.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-[1.35rem] bg-card px-5 py-5 shadow-[0_8px_30px_rgba(20,53,46,0.04)]"
              >
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-lime-deep">
                  {fact.label}
                </dt>
                <dd className="font-display mt-2 text-xl text-forest">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Colour varieties */}
      <section className="bg-mint-soft px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="section-label">Colours we grow</p>
            <h2 className="font-display mt-3 text-3xl text-forest sm:text-4xl">
              Adenium in many colours
            </h2>
            <p className="mt-3 text-muted">
              From classic pink to purple-white bicolours — call to see what’s
              blooming this week at the nursery.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {adeniumColors.map((color) => {
              const cutout = isProductCutout(color.image);
              return (
                <article
                  key={color.id}
                  className="plant-tile overflow-hidden rounded-[1.5rem] bg-card"
                >
                  <div
                    className={`relative aspect-[4/3] ${
                      cutout ? "bg-mint-deep/50" : ""
                    }`}
                  >
                    <Image
                      src={color.image}
                      alt={color.name}
                      fill
                      className={
                        cutout ? "object-contain p-4" : "object-cover"
                      }
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-start gap-3 p-5">
                    <span
                      className="mt-1 h-4 w-4 shrink-0 rounded-full border border-forest/10 shadow-sm"
                      style={{ backgroundColor: color.swatch }}
                      aria-hidden
                    />
                    <div>
                      <h3 className="font-display text-lg text-forest">
                        {color.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {color.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8">
            <a
              href={whatsappHref(
                "Hi Jacobs Adenium, which Adenium colours are available this week?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sun"
            >
              WhatsApp about colours →
            </a>
          </div>
        </div>
      </section>

      {/* Standout plants */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid grid-cols-2 gap-3">
            {[
              "/plants/adenium-3d-fuchsia.webp",
              "/plants/adenium-3d-purple.webp",
              "/plants/adenium-3d-coral.webp",
              "/plants/adenium-3d-cream.webp",
            ].map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-mint-deep/70 sm:rounded-[1.75rem]"
              >
                <Image
                  src={src}
                  alt="Adenium colour variety"
                  fill
                  className="object-contain p-3"
                  sizes="40vw"
                />
              </div>
            ))}
          </div>

          <div>
            <div className="mb-6 flex gap-3 overflow-x-auto pb-1">
              {thumbs.map((plant) => (
                <div
                  key={plant.id}
                  className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-2xl ring-2 ring-lime/40 ${
                    isProductCutout(plant.image) ? "bg-mint-deep/40" : ""
                  }`}
                >
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className={
                      isProductCutout(plant.image)
                        ? "object-contain p-1"
                        : "object-cover"
                    }
                    sizes="64px"
                  />
                </div>
              ))}
            </div>

            <p className="section-label">Our standout plants</p>
            <h2 className="font-display mt-3 text-3xl text-forest sm:text-4xl">
              Unique beauty of Adenium
            </h2>
            <p className="mt-4 text-muted">
              Thick caudex shapes, pink blooms, purple-white bicolours, and more
              — grown with care at our Thrissur nursery.
            </p>
            <Link href="/plants" className="btn-sun mt-6">
              View plants →
            </Link>
          </div>
        </div>
      </section>

      {/* Finest selection */}
      <section className="bg-mint-soft px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">Collection</p>
              <h2 className="font-display mt-3 text-3xl text-forest sm:text-4xl">
                Our finest selection
              </h2>
            </div>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sun"
            >
              WhatsApp to order →
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {finest.map((plant, index) => {
              const cutout = isProductCutout(plant.image);
              return (
              <article
                key={plant.id}
                className={`plant-tile overflow-hidden rounded-[1.75rem] bg-card ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 ? "aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[26rem]" : "aspect-[3/4]"
                  } ${cutout ? "bg-mint-deep/50" : ""}`}
                >
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className={`plant-media ${
                      cutout ? "object-contain p-5 sm:p-8" : "object-cover"
                    }`}
                    sizes={index === 0 ? "(max-width: 640px) 100vw, 50vw" : "25vw"}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/80 to-transparent p-5 pt-16">
                    {index === 0 && (
                      <span className="mb-2 inline-flex rounded-full bg-sun px-3 py-1 text-xs font-bold text-sun-ink">
                        Best plant
                      </span>
                    )}
                    <h3 className="font-display text-lg text-foam sm:text-xl">
                      {plant.name}
                    </h3>
                    <p className="mt-1 text-sm text-foam/75">
                      {plant.priceLabel ?? "Ask for quote"}
                    </p>
                  </div>
                </div>
              </article>
            )})}
          </div>
        </div>
      </section>

      {/* Articles / guides */}
      <section className="border-t border-line bg-mint px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">Learn</p>
              <h2 className="font-display mt-3 text-3xl text-forest sm:text-4xl">
                Plant-focused guides
              </h2>
            </div>
            <Link href="/grow" className="btn-outline">
              All guides
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/grow/${guide.slug}`}
                className="plant-tile rounded-[1.5rem] bg-card p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-lime-deep">
                  {guide.readingMinutes} min
                </p>
                <h3 className="font-display mt-2 text-xl text-forest">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{guide.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Visit strip */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] bg-forest px-6 py-10 sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime">
              Visit us
            </p>
            <h2 className="font-display mt-2 text-3xl text-foam">
              Manalur, Thrissur
            </h2>
            <p className="mt-2 text-sm text-foam/70">
              {site.addressLines.slice(1).join(", ")}
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="flex flex-wrap gap-3">
              <a href={telHref()} className="btn-sun">
                {site.phoneDisplay}
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light"
              >
                WhatsApp
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light"
              >
                Open Maps
              </a>
            </div>
            <p className="text-xs text-foam/55">
              Same number for call & WhatsApp
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
