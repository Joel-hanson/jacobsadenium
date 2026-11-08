/** Nursery contact + location */
export const site = {
  name: "Jacobs Adenium",
  tagline: "10 years growing Adenium",
  description:
    "A family nursery in Manalur, Thrissur focused on Adenium — healthy Desert Rose plants and simple care advice.",
  phoneDisplay: "+91 81130 78818",
  /** Digits only with country code — used for tel: and wa.me */
  phoneE164: "918113078818",
  /** Same number — call or WhatsApp */
  whatsappE164: "918113078818",
  addressLines: [
    "Jacobs Adenium Nursery",
    "F4Q4+9J2, Unnamed Road, Karamuck, Manalur",
    "Thrissur, Kerala 680617",
  ],
  mapsUrl:
    "https://www.google.com/maps/place/Adenium+gardens/@10.4883834,76.1065077,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7f3f21c34090b:0xf5374e97e7569afa!8m2!3d10.4883834!4d76.1065077!16s%2Fg%2F11fln2j1f0",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=10.4883834,76.1065077&z=17&output=embed",
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
    { days: "Sunday", time: "10:00 AM – 1:00 PM" },
  ],
  social: {
    instagram: "https://instagram.com/jacobsadenium",
    youtube: "https://youtube.com/@jacobsadenium",
  },
} as const;

export function whatsappHref(message?: string) {
  const text = encodeURIComponent(
    message ??
      `Hi ${site.name}, I'd like to know more about your Adenium plants.`,
  );
  return `https://wa.me/${site.whatsappE164}?text=${text}`;
}

export function telHref() {
  return `tel:+${site.phoneE164}`;
}
