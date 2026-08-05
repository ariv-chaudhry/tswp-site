import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="border-b border-navy/8 bg-gradient-to-b from-water/8 via-white to-white">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
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
      </div>
    </section>
  );
}
