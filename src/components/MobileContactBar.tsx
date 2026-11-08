import { site, telHref, whatsappHref } from "@/lib/site";

/** Always-visible Call + WhatsApp bar for easy phone use */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-forest/10 bg-card/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_30px_rgba(18,46,40,0.12)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={telHref()}
          className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-forest px-3 text-sm font-bold text-foam"
        >
          Call
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-[1.4] items-center justify-center rounded-full bg-sun px-3 text-sm font-bold text-sun-ink"
        >
          WhatsApp
        </a>
      </div>
      <p className="mt-1.5 text-center text-[0.7rem] text-muted">
        {site.phoneDisplay} · same for call & WhatsApp
      </p>
    </div>
  );
}
