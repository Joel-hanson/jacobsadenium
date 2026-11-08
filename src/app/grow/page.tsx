import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Grow guides",
  description:
    "Simple Adenium care guides — planting, watering, sunlight, and common problems.",
};

export default function GrowIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-2xl">
        <p className="section-label">Care</p>
        <h1 className="font-display mt-3 text-5xl text-forest sm:text-6xl">
          Grow guides
        </h1>
        <p className="mt-4 text-lg text-muted">
          Beginner-friendly notes from the nursery — plant with confidence.
        </p>
      </header>

      <ol className="mt-14 divide-y divide-line border-y border-line">
        {guides.map((guide, index) => (
          <li key={guide.slug}>
            <Link
              href={`/grow/${guide.slug}`}
              className="group flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:gap-10"
            >
              <span className="font-display text-5xl text-lime-deep sm:w-20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  {guide.readingMinutes} min read
                </p>
                <h2 className="font-display mt-1 text-3xl text-forest transition group-hover:text-lime-deep">
                  {guide.title}
                </h2>
                <p className="mt-2 max-w-2xl text-muted">{guide.summary}</p>
              </div>
              <span className="text-sm font-bold text-forest group-hover:text-lime-deep">
                Read guide →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
