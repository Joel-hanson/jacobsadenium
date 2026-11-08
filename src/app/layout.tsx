import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CallFloat } from "@/components/CallFloat";
import { MobileContactBar } from "@/components/MobileContactBar";
import { asset } from "@/lib/asset";
import { site } from "@/lib/site";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A332D",
};

export const metadata: Metadata = {
  // Origin only — Next.js already applies `basePath` (/jacobsadenium).
  metadataBase: new URL("https://joelhanson.com"),
  title: {
    default: `${site.name} — Adenium Nursery`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  // File conventions also emit favicon.ico / icon.png / apple-icon.png / opengraph-image.png.
  // Use asset() so GitHub Pages basePath is present (metadata alone was omitting it).
  icons: {
    icon: [
      { url: asset("/brand/favicon-32.png"), sizes: "32x32", type: "image/png" },
      { url: asset("/brand/favicon-64.png"), sizes: "64x64", type: "image/png" },
      { url: asset("/brand/app-icon.png"), sizes: "320x320", type: "image/png" },
    ],
    apple: [{ url: asset("/brand/apple-touch-icon.png"), sizes: "180x180" }],
    shortcut: asset("/brand/favicon.ico"),
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: `${site.name} — Adenium Nursery`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Adenium Nursery`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} h-full`}>
      <body className="site-shell flex min-h-full flex-col pb-24 font-sans antialiased md:pb-0">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CallFloat />
        <MobileContactBar />
      </body>
    </html>
  );
}
