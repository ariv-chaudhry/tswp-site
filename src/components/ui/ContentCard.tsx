import type { ReactNode } from "react";

interface ContentCardProps {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}

export function ContentCard({
  title,
  eyebrow,
  children,
  className = "",
}: ContentCardProps) {
  return (
    <article
      className={`rounded-2xl border border-navy/8 bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-water-dark">
          {eyebrow}
        </p>
      )}
      {title && (
        <h3 className="text-xl font-bold text-navy sm:text-2xl">{title}</h3>
      )}
      <div className={title || eyebrow ? "mt-4" : ""}>{children}</div>
    </article>
  );
}
