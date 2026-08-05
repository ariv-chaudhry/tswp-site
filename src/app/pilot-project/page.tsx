import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContentCard } from "@/components/ui/ContentCard";
import { PageHero } from "@/components/ui/PageHero";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pilotProject } from "@/data/projects";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pilot Project",
  description: `Pilot project at ${pilotProject.school} in ${pilotProject.region}.`,
};

export default function PilotProjectPage() {
  return (
    <>
      <PageHero
        eyebrow={pilotProject.title}
        title={pilotProject.school}
        description={`${pilotProject.location} · ${pilotProject.region}`}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/donate" variant="secondary">
            Donate Now
          </Button>
          <Button href="/fundraisers" variant="outline">
            See Current Projects
          </Button>
          {pilotProject.articleHref && (
            <Button href={pilotProject.articleHref} variant="outline" external>
              Read Mitacs Article
            </Button>
          )}
        </div>
      </PageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-navy/75">
            {pilotProject.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-water/10 shadow-sm">
                          <Image
                              src="/images/RainwaterHarvestingAndTreatmentSystem.avif"
                              alt={pilotProject.figures[0].caption}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                      </div>
            <p className="mt-3 text-sm text-navy/55">
              {pilotProject.figures[0].caption}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-water/5 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="I. Introduction"
            title={pilotProject.location}
            description="Access to safe drinking water remains a serious challenge in many underserved rural schools. This pilot expands a proven UV treatment system for the entire school community."
            className="mb-8"
          />
          <Button href="/fundraisers" variant="primary">
            See Current Projects
          </Button>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-10">
          <SectionHeader eyebrow="II. The Problem" title="The Problem" />
          <p className="max-w-3xl text-base leading-relaxed text-navy/75">
            {pilotProject.problemIntro}
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            <ContentCard title="A. Water Treatment Challenges">
              <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-navy/70">
                {pilotProject.waterTreatmentChallenges.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            </ContentCard>
            <ContentCard title="B. Sanitation and Hygiene Challenges">
              <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-navy/70">
                {pilotProject.sanitationChallenges.map((item) => (
                  <li key={item.slice(0, 40)}>{item}</li>
                ))}
              </ul>
            </ContentCard>
          </div>
        </Container>
      </section>

      <section className="bg-water/5 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="III. Our Solution"
            title="Our Solution"
            className="mb-8"
          />
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-navy/75">
            <p>{pilotProject.solutionIntro}</p>
            {pilotProject.solutionBody.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-water/10 shadow-sm">
                          <Image
                              src="/images/CurrentConditionOfSchoolToilets.avif"
                              alt={pilotProject.figures[0].caption}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                      </div>
            <p className="mt-3 text-sm text-navy/55">
              {pilotProject.figures[1].caption}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="IV. Fundraising Method"
            title="Fundraising Method"
            className="mb-8"
          />
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-navy/75">
            {pilotProject.fundraisingMethod.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-water/10 shadow-sm">
                          <Image
                              src={pilotProject.figures[0].image}
                              alt={pilotProject.figures[0].caption}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                      </div>
            <p className="mt-3 text-sm text-navy/55">
              {pilotProject.figures[2].caption}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-water/5 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="V. Implementation Plan"
            title="Implementation Plan"
            description={pilotProject.implementationIntro}
            className="mb-10"
          />
          <ol className="grid gap-4 md:grid-cols-2">
            {pilotProject.phases.map((phase) => (
              <li key={phase.phase}>
                <ContentCard
                  eyebrow={`Phase ${phase.phase}`}
                  title={phase.title}
                  className="h-full"
                >
                  <p className="text-sm leading-relaxed text-navy/70">
                    {phase.description}
                  </p>
                </ContentCard>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="VI. Impact" title="Impact" className="mb-8" />
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-navy/75">
            {pilotProject.impact.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-3xl">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-water/10 shadow-sm">
                          <Image
                              src="/images/BannerSignedBy100Students.avif"
                              alt={pilotProject.figures[0].caption}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                      </div>
            <p className="mt-3 text-sm text-navy/55">
              {pilotProject.figures[3].caption}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-water/5 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="VII. Funding Breakdown"
            title="Funding Breakdown"
            description="The funding for the project will be divided into:"
            className="mb-8"
          />
          <ul className="grid gap-4 sm:grid-cols-3">
            {pilotProject.fundingBreakdown.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-navy/8 bg-white p-6 text-center font-semibold text-navy shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-navy/55">
            Detailed dollar amounts were not published on the Wix page — see
            CONTENT_TODO.md.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="VIII. Summary"
            title="Summary"
            className="mb-8"
          />
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-navy/75">
            {pilotProject.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Support the Kenya Water Project Expansion"
        description="Every contribution is matched dollar-for-dollar by Clear Inc., doubling its impact."
        primaryCta={{ label: "Donate", href: "/donate" }}
        secondaryCta={{ label: "Become a Sponsor", href: "/sponsorships" }}
        variant="gradient"
      />
    </>
  );
}
