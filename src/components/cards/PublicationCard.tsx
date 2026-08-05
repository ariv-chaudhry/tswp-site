import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { Publication } from "@/data/publications";

interface PublicationCardProps {
    publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
    return (
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-sm">
            {publication.image && (
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl bg-slate-100">
                    <Image
                        src={publication.image}
                        alt={`${publication.title} cover image`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
            )}

            <div className="flex flex-1 flex-col p-6">
                {publication.category && (
                    <p className="text-xs font-semibold uppercase tracking-widest text-water-dark">
                        {publication.category}
                    </p>
                )}

                <h3 className="mt-2 text-lg font-bold leading-snug text-navy sm:text-xl">
                    {publication.title}
                </h3>

                {(publication.author || publication.date) && (
                    <p className="mt-3 text-sm text-navy/60">
                        {publication.author}
                        {publication.author && publication.date ? " · " : ""}
                        {publication.date}
                    </p>
                )}

                {publication.summary && (
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/70">
                        {publication.summary}
                    </p>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                        href={publication.href}
                        variant="secondary"
                        size="sm"
                        external={publication.external}
                    >
                        Read Article
                    </Button>

                    {publication.pdfHref && (
                        <Button href={publication.pdfHref} variant="outline" size="sm" external>
                            Download PDF
                        </Button>
                    )}
                </div>
            </div>
        </article>
    );
}