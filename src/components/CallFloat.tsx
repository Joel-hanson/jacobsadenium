import { whatsappHref } from "@/lib/site";

/** Desktop-only floating WhatsApp — mobile uses the bottom contact bar */
export function CallFloat() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-full bg-sun px-5 py-3.5 text-sm font-bold text-sun-ink shadow-[0_14px_40px_rgba(242,234,0,0.35)] transition hover:brightness-105 md:inline-flex"
      aria-label="WhatsApp the nursery"
    >
      <span aria-hidden>✆</span>
      WhatsApp us
    </a>
  );
}
