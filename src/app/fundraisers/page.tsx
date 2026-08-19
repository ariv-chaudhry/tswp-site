import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContentCard } from "@/components/ui/ContentCard";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";
import {
  challengeCommittee,
  fundraiserInitiatives,
  fundraisersPage,
  studentLeaderProgram,
} from "@/data/fundraisers";

export const metadata: Metadata = {
  title: "Fundraisers",
  description: fundraisersPage.description,
};

export default function FundraisersPage() {
  return (
    <>
      <PageHero
        eyebrow={fundraisersPage.eyebrow}
        title={fundraisersPage.title}
        description={fundraisersPage.description}
      />

      <section className="py-16 sm:py-24">
        <Container className="space-y-10">
          {fundraiserInitiatives.map((initiative) => (
            <article
              key={initiative.slug}
              className="grid gap-8 overflow-hidden rounded-2xl border border-navy/8 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2"
            >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-water/10 shadow-sm">
                      <Image
                          src={withBasePath("/images/12000kmChallengeRunning.avif")}
                          alt={initiative.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                  </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-water-dark">
                  {initiative.subtitle}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
                  {initiative.title}
                </h2>
                <dl className="mt-4 grid gap-2 text-sm text-navy/65 sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-navy">Type</dt>
                    <dd>{initiative.type}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Date</dt>
                    <dd>{initiative.date}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Location</dt>
                    <dd>{initiative.location}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Status</dt>
                    <dd>{initiative.status}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm leading-relaxed text-navy/70">
                  Led by: {initiative.ledBy}
                </p>
                <p className="mt-4 text-base leading-relaxed text-navy/75">
                  {initiative.summary}
                </p>
                {initiative.details.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-navy/70">
                    {initiative.details.map((detail) => (
                      <li key={detail.slice(0, 40)}>{detail}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  {initiative.primaryCta && (
                    <Button
                      href={initiative.primaryCta.href}
                      variant="secondary"
                      external={initiative.primaryCta.external}
                    >
                      {initiative.primaryCta.label}
                    </Button>
                  )}
                  {initiative.secondaryCta && (
                    <Button
                      href={initiative.secondaryCta.href}
                      variant="outline"
                      external={initiative.secondaryCta.external}
                    >
                      {initiative.secondaryCta.label}
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-water/5 py-16 sm:py-20">
        <Container>
          <SectionHeader
            title="12,000 KM Challenge Committee"
            description="The students powering the 12,000 KM Challenge."
            className="mb-10"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {challengeCommittee.map((member) => (
              <li key={member.name}>
                <ContentCard title={member.name}>
                  <p className="text-sm text-navy/65">{member.detail}</p>
                </ContentCard>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeader
            title={studentLeaderProgram.title}
            description={studentLeaderProgram.description}
            className="mb-10"
          />
          <ol className="grid gap-4 md:grid-cols-2">
            {studentLeaderProgram.steps.map((step) => (
              <li key={step.step}>
                <ContentCard
                  eyebrow={`Step ${step.step}`}
                  title={step.title}
                  className="h-full"
                >
                  <p className="text-sm leading-relaxed text-navy/70">
                    {step.description}
                  </p>
                </ContentCard>
              </li>
            ))}
          </ol>
          <ul className="mt-10 space-y-3 text-sm leading-relaxed text-navy/70">
            {studentLeaderProgram.benefits.map((benefit) => (
              <li key={benefit.slice(0, 40)} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-water" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={studentLeaderProgram.proposalCta.href}
              variant="outline"
              external
            >
              {studentLeaderProgram.proposalCta.label}
            </Button>
            <Button
              href={studentLeaderProgram.applicationCta.href}
              variant="secondary"
              external
            >
              {studentLeaderProgram.applicationCta.label}
            </Button>
          </div>
        </Container>
      </section>

      <CTA
        title="Support our kickoff fundraiser"
        description="See the student-designed challenge site or donate through the campaign page."
        primaryCta={{
          label: "See Challenge Site",
          href: "https://tswp12k.vercel.app/",
        }}
        secondaryCta={{
          label: "See Campaign",
          href: "https://www.zeffy.com/en-CA/peer-to-peer/25-000-km-challenge",
        }}
        variant="gradient"
      />
    </>
  );
}
