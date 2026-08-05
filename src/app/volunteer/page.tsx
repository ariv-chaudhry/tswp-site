import type { Metadata } from "next";
import { RoleCard } from "@/components/cards/RoleCard";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContentCard } from "@/components/ui/ContentCard";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { studentRoles, volunteerPage } from "@/data/volunteerRoles";

export const metadata: Metadata = {
  title: "Volunteer",
  description: volunteerPage.intro,
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow={volunteerPage.eyebrow}
        title={volunteerPage.title}
        description={volunteerPage.intro}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#student-positions" variant="secondary">
            Student Positions
          </Button>
          <Button href="#advisory-positions" variant="outline">
            Advisory Positions
          </Button>
        </div>
      </PageHero>

      <section id="student-positions" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <SectionHeader
            eyebrow="Volunteering"
            title="Student Positions"
            description={volunteerPage.studentIntro}
            className="mb-12"
          />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studentRoles.map((role) => (
              <li key={role.id}>
                <RoleCard role={role} />
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href={volunteerPage.interestFormHref} variant="secondary">
              {volunteerPage.interestFormLabel}
            </Button>
            <p className="mt-3 text-sm text-navy/55">
              The Wix Interest Form URL was not extractable — this currently
              links to Contact. See CONTENT_TODO.md.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="advisory-positions"
        className="scroll-mt-24 bg-water/5 py-16 sm:py-24"
      >
        <Container>
          <SectionHeader
            eyebrow="Volunteering"
            title="Advisory Positions"
            description={volunteerPage.advisoryIntro}
            className="mb-8"
          />
          <ContentCard className="max-w-3xl">
            <p className="text-navy/70">
              Advisors support engineering/science project deployment,
              operational consulting, or event coordination. Apply through the
              interest form.
            </p>
            <div className="mt-6">
              <Button href={volunteerPage.interestFormHref} variant="primary">
                {volunteerPage.interestFormLabel}
              </Button>
            </div>
          </ContentCard>
        </Container>
      </section>

      <CTA
        title="Have a creative fundraising idea?"
        description="Student Leadership / Campaign Leadership roles let you propose and run your own initiative with executive support."
        primaryCta={{ label: "Learn About Student Leaders", href: "/fundraisers" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
