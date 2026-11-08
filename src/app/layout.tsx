import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CallFloat } from "@/components/CallFloat";
import { MobileContactBar } from "@/components/MobileContactBar";
import { site } from "@/lib/site";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Adenium Nursery`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
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
