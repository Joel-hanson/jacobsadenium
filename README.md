# Jacobs Adenium

Marketing site for a family Adenium nursery in Manalur, Thrissur. Browse plants, read grow guides, call or visit — payments can be added later.

**Live:** [jacobs-adenium.joelhanson.com](https://jacobs-adenium.joelhanson.com/) · **GitHub Pages** after DNS CNAME is set

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (GitHub Pages)

Pushes to `main` build a static export and deploy via [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

One-time setup:

1. Repo **Settings → Pages → Source: GitHub Actions**
2. DNS CNAME: `jacobs-adenium` → `Joel-hanson.github.io` (Cloudflare: DNS only)
3. Pages → Custom domain: `jacobs-adenium.joelhanson.com` (Enforce HTTPS)

## Before go-live

Edit [`src/lib/site.ts`](src/lib/site.ts):

1. Set `phoneDisplay`, `phoneE164`, and `whatsappE164` to the real nursery number  
   (example: `phoneDisplay: "+91 98765 43210"`, `phoneE164: "919876543210"`).
2. Location and Maps links are already set to Karamuck, Manalur, Thrissur.
3. Adjust `hours` if needed.

## Edit plants

Plant list: [`src/lib/plants.ts`](src/lib/plants.ts). Add photos under `public/plants/`.

## Design notes

Visual direction inspired by modern plant-nursery landing pages (Behance / Uplabs style): full-bleed bloom photography, deep canopy greens, Adenium pink accents, editorial plant grid, phone-first CTAs.

## Later (not in this build)

- UPI / Google Pay QR
- Cashfree payment links
- Full cart checkout
- Instagram / YouTube weekly shorts embedding
