import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";

type BrandLogoProps = {
  variant?: "header" | "footer" | "mark";
  className?: string;
  priority?: boolean;
};

const variants = {
  header: {
    src: "/brand/logo-header.png",
    width: 560,
    height: 353,
    className: "h-11 w-auto sm:h-12",
  },
  footer: {
    src: "/brand/horizontal-logo.png",
    width: 560,
    height: 353,
    className: "h-12 w-auto sm:h-14",
  },
  mark: {
    src: "/brand/social-icon.png",
    width: 256,
    height: 256,
    className: "h-9 w-9 sm:h-10 sm:w-10",
  },
} as const;

export function BrandLogo({
  variant = "header",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const cfg = variants[variant];

  return (
    <Link
      href="/"
      className={`inline-flex min-w-0 items-center ${className}`}
      aria-label={site.name}
    >
      <Image
        src={asset(cfg.src)}
        alt={site.name}
        width={cfg.width}
        height={cfg.height}
        priority={priority}
        className={`${cfg.className} object-contain`}
      />
    </Link>
  );
}
