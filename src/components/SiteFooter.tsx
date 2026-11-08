import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site, telHref, whatsappHref } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-forest-deep text-foam">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="inline-flex rounded-2xl bg-foam px-3 py-2.5 shadow-sm">
            <BrandLogo variant="footer" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-foam/65">
            Adenium nursery in Manalur, Thrissur. Call or WhatsApp to check what’s
            blooming — or visit and pick your plant.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={telHref()} className="btn-sun !py-2.5 !text-sm">
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light !py-2.5 !text-sm"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-2 text-xs text-foam/50">Same number for call & WhatsApp</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-foam/75">
            <li>
              <Link href="/plants" className="hover:text-foam">
                Plants
              </Link>
            </li>
            <li>
              <Link href="/grow" className="hover:text-foam">
                Grow guides
              </Link>
            </li>
            <li>
              <Link href="/visit" className="hover:text-foam">
                Visit us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-lime">
            Find us
          </p>
          <div className="mt-4 space-y-1 text-sm leading-relaxed text-foam/75">
            {site.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-bold text-lime hover:text-foam"
          >
            Open in Maps →
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-foam/40 sm:px-6">
          © 2026 {site.name}. Manalur, Thrissur.
        </p>
      </div>
    </footer>
  );
}
