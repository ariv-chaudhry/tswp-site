import type { Metadata } from "next";
import { SponsorsStrip } from "@/components/sections/SponsorsStrip";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContentCard } from "@/components/ui/ContentCard";
import { PageHero } from "@/components/ui/PageHero";
import { sponsorPackages, sponsorshipsPage } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "Sponsorships",
  description: sponsorshipsPage.description,
};

export default function SponsorshipsPage() {
  return (
    <>
      <PageHero
        eyebrow={sponsorshipsPage.eyebrow}
        title={sponsorshipsPage.title}
        description={sponsorshipsPage.description}
      >
        <Button href="mailto:studentwaterproject@gmail.com" variant="secondary">
          Contact About Sponsorship
        </Button>
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          <ul className="grid gap-8 lg:grid-cols-2">
            {sponsorPackages.map((pkg) => (
              <li key={pkg.id}>
                <ContentCard
                  title={pkg.title}
                  eyebrow={pkg.subtitle}
                  className="h-full"
                >
                  <p className="text-sm leading-relaxed text-navy/70">
                    {pkg.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-navy">
                    What You Receive:
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-navy/70">
                    {pkg.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                  {pkg.whyItMatters && (
                    <p className="mt-5 text-sm leading-relaxed text-navy/70">
                      <span className="font-semibold text-navy">
                        Why It Matters:{" "}
                      </span>
                      {pkg.whyItMatters}
                    </p>
                  )}
                  {pkg.cta && (
                    <div className="mt-6">
                      <Button
                        href={pkg.cta.href}
                        variant="outline"
                        external={pkg.cta.external}
                      >
                        {pkg.cta.label}
                      </Button>
                    </div>
                  )}
                </ContentCard>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <SponsorsStrip />

      <CTA
        title="Interested in matching or event sponsorship?"
        description="Email us to discuss packages, branding, and campaign timelines."
        primaryCta={{
          label: "Email Us",
          href: "mailto:studentwaterproject@gmail.com",
        }}
        secondaryCta={{ label: "See Current Events", href: "/fundraisers" }}
        variant="gradient"
      />
    </>
  );
}
