import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface PageHeroProps {
    eyebrow?: string;
    title: string;
    description?: string;
    mascotSrc?: string;
    mascotAlt?: string;
}

export function PageHero({
    eyebrow,
    title,
    description,
    mascotSrc,
    mascotAlt = "",
}: PageHeroProps) {
    return (
        <section className="overflow-hidden bg-sky/10 py-16 sm:py-20 lg:py-24">
            <Container>
                <div
                    className={`grid items-center gap-10 ${mascotSrc ? "lg:grid-cols-[1fr_360px]" : ""
                        }`}
                >
                    <div className="max-w-3xl">
                        {eyebrow && (
                            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky">
                                {eyebrow}
                            </p>
                        )}

                        <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
                            {title}
                        </h1>

                        {description && (
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/70">
                                {description}
                            </p>
                        )}
                    </div>

                    {mascotSrc && (
                        <div className="flex justify-center lg:justify-end">
                            <Image
                                src={mascotSrc}
                                alt={mascotAlt}
                                width={360}
                                height={360}
                                className="h-auto max-h-[320px] w-auto max-w-full object-contain sm:max-h-[360px]"
                            />
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}