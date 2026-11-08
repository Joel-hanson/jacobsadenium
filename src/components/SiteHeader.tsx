"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { whatsappHref } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/plants", label: "Plants" },
  { href: "/grow", label: "Grow" },
  { href: "/visit", label: "Visit" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-mint/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <BrandLogo variant="header" priority className="shrink-0" />

        <nav
          className="hidden items-center gap-1 rounded-full border border-line bg-card/80 px-1.5 py-1.5 md:flex"
          aria-label="Main"
        >
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  active
                    ? "bg-forest text-foam"
                    : "text-ink/70 hover:bg-mint-deep hover:text-forest"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lime !min-h-10 !px-4 !py-2 !text-sm"
        >
          WhatsApp
        </a>
      </div>

      <nav
        className="flex gap-1.5 overflow-x-auto px-4 pb-3 md:hidden"
        aria-label="Mobile"
      >
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold ${
                active
                  ? "bg-forest text-foam"
                  : "border border-line bg-card text-ink/80"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
