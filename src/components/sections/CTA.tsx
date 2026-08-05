import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface CTAProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "light" | "gradient";
}

export function CTA({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "gradient",
}: CTAProps) {
  const isGradient = variant === "gradient";

  return (
    <section
      className={
        isGradient
          ? "bg-gradient-to-br from-navy via-navy to-water-dark py-16 text-white sm:py-20"
          : "bg-water/5 py-16 sm:py-20"
      }
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-widest ${
                isGradient ? "text-water-light" : "text-water-dark"
              }`}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className={`text-3xl font-bold tracking-tight sm:text-4xl ${
              isGradient ? "text-white" : "text-navy"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mt-4 text-lg leading-relaxed ${
                isGradient ? "text-white/75" : "text-navy/70"
              }`}
            >
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={primaryCta.href}
              variant={isGradient ? "secondary" : "primary"}
              size="lg"
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className={
                  isGradient
                    ? "border-white/30 bg-transparent text-white hover:border-white hover:text-white"
                    : ""
                }
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
