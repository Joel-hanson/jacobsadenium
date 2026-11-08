import type { Metadata } from "next";
import { site, telHref, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description:
    "Visit Jacobs Adenium nursery in Karamuck, Manalur, Thrissur — or call / WhatsApp ahead.",
};

export default function VisitPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-2xl">
        <p className="section-label">Find us</p>
        <h1 className="font-display mt-3 text-5xl text-forest sm:text-6xl">
          Visit the nursery
        </h1>
        <p className="mt-4 text-lg text-muted">
          Call or WhatsApp ahead to check stock, then come see the plants in
          Manalur.
        </p>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <section className="space-y-6">
          <div className="rounded-[1.75rem] bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl text-forest">
              Call / WhatsApp
            </h2>
            <a
              href={telHref()}
              className="font-display mt-4 block text-3xl text-forest transition hover:text-lime-deep sm:text-4xl"
            >
              {site.phoneDisplay}
            </a>
            <p className="mt-3 text-sm text-muted">
              Same number for phone calls and WhatsApp — best way to ask what’s
              blooming.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={telHref()} className="btn-sun">
                Call now
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-forest"
              >
                Open WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-lime-soft p-6 sm:p-8">
            <h2 className="font-display text-2xl text-forest">Address</h2>
            <div className="mt-4 space-y-1 text-ink">
              {site.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-forest mt-6"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="rounded-[1.75rem] bg-card p-6 sm:p-8">
            <h2 className="font-display text-2xl text-forest">Hours</h2>
            <ul className="mt-4 space-y-3">
              {site.hours.map((row) => (
                <li
                  key={row.days}
                  className="flex flex-wrap justify-between gap-2 border-b border-line pb-3 text-sm last:border-0 last:pb-0"
                >
                  <span className="font-semibold text-ink">{row.days}</span>
                  <span className="text-muted">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="overflow-hidden rounded-[1.75rem] bg-mint-deep shadow-[0_20px_60px_rgba(13,36,32,0.08)]">
          {site.mapsEmbedUrl ? (
            <iframe
              title="Jacobs Adenium nursery location"
              src={site.mapsEmbedUrl}
              className="h-[28rem] w-full border-0 sm:h-full sm:min-h-[36rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : null}
        </section>
      </div>
    </div>
  );
}
