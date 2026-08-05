import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { Container } from "@/components/ui/Container";
import { ContentCard } from "@/components/ui/ContentCard";
import { PageHero } from "@/components/ui/PageHero";
import { contactInfo } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: contactInfo.subheading,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={contactInfo.heading}
        description={contactInfo.subheading}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <ContentCard>
              <ContactForm />
            </ContentCard>

            <div className="space-y-6">
              <ContentCard title="Get In Touch">
                <p className="text-sm leading-relaxed text-navy/70">
                  We&apos;re based in {contactInfo.location}, but our work
                  reaches across borders. Reach out however works best for you.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li>
                    <span className="font-semibold text-navy">Email: </span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-water-dark hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-navy">Instagram: </span>
                    <a
                      href={contactInfo.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-water-dark hover:underline"
                    >
                      {contactInfo.instagramHandle}
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-navy">Location: </span>
                    <span className="text-navy/70">{contactInfo.location}</span>
                  </li>
                </ul>
              </ContentCard>

              <ContentCard title="Team leads">
                <ul className="space-y-4">
                  {contactInfo.teamEmails.map((person) => (
                    <li key={person.email}>
                      <p className="font-semibold text-navy">{person.name}</p>
                      <p className="text-sm text-navy/55">{person.role}</p>
                      <a
                        href={`mailto:${person.email}`}
                        className="text-sm text-water-dark hover:underline"
                      >
                        {person.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </ContentCard>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
