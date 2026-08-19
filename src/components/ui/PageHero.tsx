import Image from "next/image";
import type { ReactNode } from "react";

interface PageHeroProps {
    eyebrow?: string;
    title: string;
    description?: string;
    children?: ReactNode;
    mascotSrc?: string;
    mascotAlt?: string;
}

export function PageHero({
    eyebrow,
    title,
    description,
    children,
    mascotSrc,
    mascotAlt = "",
}: PageHeroProps) {
    return (
        <section className="border-b border-navy/8 bg-gradient-to-b from-water/8 via-white to-white">
            <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <div
                    className={
                        mascotSrc
                            ? "grid items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-14"
                            : ""
                    }
                >
                    <div className="max-w-3xl">
                        {eyebrow && (
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-water-dark">
                                {eyebrow}
                            </p>
                        )}

                        <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
                            {title}
                        </h1>

                        {description && (
                            <p className="mt-5 text-lg leading-relaxed text-navy/70">
                                {description}
                            </p>
                        )}

                        {children && <div className="mt-8">{children}</div>}
                    </div>

                    {mascotSrc && (
                        <div className="flex justify-center lg:justify-end">
                            <Image
                                src={mascotSrc}
                                alt={mascotAlt}
                                width={360}
                                height={360}
                                className="h-auto max-h-[300px] w-auto max-w-full object-contain sm:max-h-[340px]"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}