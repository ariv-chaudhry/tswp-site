import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ContentCard } from "@/components/ui/ContentCard";
import { EmailSignupForm } from "@/components/ui/EmailSignupForm";
import { PageHero } from "@/components/ui/PageHero";
import { donatePage } from "@/data/contact";

export const metadata: Metadata = {
  title: "Donate",
  description: donatePage.description,
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow={donatePage.eyebrow}
        title={donatePage.title}
        description={donatePage.description}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <ContentCard title="Project transparency">
              <p className="text-sm leading-relaxed text-navy/70">
                {donatePage.transparencyNote}
              </p>
              <ul className="mt-6 space-y-3">
                {donatePage.campaignLinks.map((link) => (
                  <li key={link.href}>
                    <Button
                      href={link.href}
                      variant="outline"
                      external={link.external}
                      className="w-full sm:w-auto"
                    >
                      {link.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </ContentCard>

            <ContentCard title="Get notified when donations open">
              <EmailSignupForm prompt={donatePage.notifyPrompt} />
            </ContentCard>
          </div>
        </Container>
      </section>

      <CTA
        title="Support the pilot while donation portals launch"
        description="You can already give through the 12,000 KM Challenge campaign, or reach out for direct project support."
        primaryCta={{
          label: "Donate on Zeffy",
          href: "https://www.zeffy.com/en-CA/peer-to-peer/25-000-km-challenge",
        }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
