import { featuredProject } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturedProject() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow={featuredProject.eyebrow}
          title={featuredProject.title}
          className="mb-10"
        />
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-water/10 shadow-sm">
                      <Image
                          src="/images/Rianyabao Memorial Academy.avif"
                          alt={`${featuredProject.school} project photo`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                  </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-water-dark">
              {featuredProject.location}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
              {featuredProject.school}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              {featuredProject.summary}
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              {featuredProject.goal}
            </p>
            <div className="mt-8">
              <Button href={featuredProject.href} variant="primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
