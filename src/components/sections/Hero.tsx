import { site } from "@/data/site";
import { BackgroundVideo } from "@/components/sections/BackgroundVideo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900">
      {/* Falls back to the gradient bg above if video fails or reduced motion is preferred */}
      <BackgroundVideo />

      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-blue-950/65 to-cyan-900/40"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex min-h-[85vh] items-center py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-water-light">
            {site.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/pilot-project" variant="secondary" size="lg">
              Our Project
            </Button>
            <Button
              href="/donate"
              variant="outline"
              size="lg"
              className="border-white/40 bg-white/10 text-white hover:border-white hover:bg-white/20 hover:text-white"
            >
              Donate Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
