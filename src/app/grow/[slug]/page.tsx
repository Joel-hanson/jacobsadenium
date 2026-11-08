import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/lib/guides";
import { site, whatsappHref } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide" };
  return {
    title: guide.title,
    description: guide.summary,
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <Link
        href="/grow"
        className="text-sm font-bold text-forest underline-offset-4 hover:text-lime-deep hover:underline"
      >
        ← All guides
      </Link>

      <header className="mt-8">
        <p className="section-label">{guide.readingMinutes} min read</p>
        <h1 className="font-display mt-3 text-4xl text-forest sm:text-6xl">
          {guide.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{guide.summary}</p>
      </header>

      <div className="mt-12 space-y-12">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-2xl text-forest sm:text-3xl">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-3 text-[1.05rem] font-light leading-relaxed text-ink/90">
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <aside className="mt-12 rounded-[1.5rem] bg-lime-soft px-6 py-6">
        <p className="section-label">Nursery tip</p>
        <p className="mt-2 text-base leading-relaxed text-ink">{guide.tip}</p>
      </aside>

      <div className="mt-14 border-t border-line pt-10">
        <h2 className="font-display text-2xl text-forest">Still unsure?</h2>
        <p className="mt-2 text-muted">
          Call or WhatsApp the nursery — we’re happy to help you pick and care
          for a plant.
        </p>
        <a
          href={whatsappHref(
            `Hi Jacobs Adenium, I read your guide "${guide.title}" and have a question.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-sun mt-5"
        >
          WhatsApp {site.phoneDisplay}
        </a>
      </div>
    </article>
  );
}
