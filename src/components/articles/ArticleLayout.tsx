import Image from "next/image";
import Link from "next/link";
import type { Article, ArticleBlock } from "@/types/article";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface ArticleLayoutProps {
    article: Article;
}

function ArticleBlockView({ block }: { block: ArticleBlock }) {
    switch (block.type) {
        case "paragraph":
            return (
                <p className="text-base leading-relaxed text-navy/75 sm:text-[1.05rem]">
                    {block.text}
                </p>
            );

        case "subheading":
            return (
                <h3 className="mt-2 text-lg font-bold text-navy sm:text-xl">
                    {block.text}
                </h3>
            );

        case "list":
            return (
                <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-navy/75">
                    {block.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            );

        case "note":
            return (
                <p className="rounded-xl border border-navy/10 bg-water/5 px-4 py-3 text-sm italic leading-relaxed text-navy/60">
                    {block.text}
                </p>
            );

        case "image":
            return (
                <figure className="my-8 space-y-3">
                    <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
                        <Image
                            src={block.src}
                            alt={block.alt}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>

                    {block.caption && (
                        <figcaption className="mx-auto max-w-3xl text-sm italic leading-relaxed text-navy/55">
                            {block.caption}
                        </figcaption>
                    )}
                </figure>
            );

        default:
            return null;
    }
}

export function ArticleLayout({ article }: ArticleLayoutProps) {
    return (
        <article>
            <header className="border-b border-navy/8 bg-gradient-to-b from-water/8 via-white to-white">
                <Container className="py-14 sm:py-16 lg:py-20">
                    <p className="text-sm font-semibold uppercase tracking-widest text-water-dark">
                        <Link href="/student-publications" className="hover:underline">
                            Student Publications
                        </Link>
                        {" · "}
                        {article.category}
                    </p>

                    <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                        {article.title}
                    </h1>

                    <ul className="mt-8 space-y-3">
                        {article.authors.map((author) => (
                            <li key={author.name}>
                                <p className="font-semibold text-navy">{author.name}</p>
                                {author.affiliation && (
                                    <p className="text-sm text-navy/60">{author.affiliation}</p>
                                )}
                            </li>
                        ))}
                    </ul>

                    {article.pdfHref && (
                        <div className="mt-8">
                            <Button href={article.pdfHref} variant="secondary" external>
                                Download Full PDF
                            </Button>
                        </div>
                    )}
                </Container>
            </header>

            <Container className="py-12 sm:py-16">
                <div className="mx-auto max-w-3xl space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-navy">Abstract</h2>
                        <p className="text-base leading-relaxed text-navy/75 sm:text-[1.05rem]">
                            {article.abstract}
                        </p>
                    </section>

                    {article.sections.map((section) => (
                        <section key={section.title} className="space-y-4">
                            <h2 className="text-2xl font-bold text-navy">{section.title}</h2>

                            <div className="space-y-4">
                                {section.blocks.map((block, index) => (
                                    <ArticleBlockView
                                        key={`${section.title}-${block.type}-${index}`}
                                        block={block}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}

                    {article.references && article.references.length > 0 && (
                        <section className="space-y-4 border-t border-navy/8 pt-10">
                            <h2 className="text-2xl font-bold text-navy">References</h2>

                            <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-navy/70">
                                {article.references.map((reference) => (
                                    <li key={reference.slice(0, 60)}>{reference}</li>
                                ))}
                            </ol>
                        </section>
                    )}

                    <div className="flex flex-wrap gap-3 border-t border-navy/8 pt-10">
                        <Button href="/student-publications" variant="outline">
                            Back to Publications
                        </Button>

                        {article.pdfHref && (
                            <Button href={article.pdfHref} variant="secondary" external>
                                Download Full PDF
                            </Button>
                        )}
                    </div>
                </div>
            </Container>
        </article>
    );
}