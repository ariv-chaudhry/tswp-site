import type { Metadata } from "next";

import { PublicationCard } from "@/components/cards/PublicationCard";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { publications, publicationsPage } from "@/data/publications";

export const metadata: Metadata = {
    title: "Student Publications",
    description:
        "Read student-written articles and publications from The Student Water Project on water treatment, UV disinfection, sustainability, and clean water access.",
};

export default function StudentPublicationsPage() {
    return (
        <>
            <PageHero
                eyebrow={publicationsPage.eyebrow}
                title={publicationsPage.title}
                description={publicationsPage.description}
                mascotSrc="/images/mascot/science.png"
                mascotAlt="Student Water Project scientist droplet mascot with laboratory equipment"
            />

            <section className="py-16 sm:py-24">
                <Container>
                    <SectionHeader
                        title={publicationsPage.featuredHeading}
                        description="TSWP student volunteers contribute research-based articles and publications related to water treatment, sustainability, UV disinfection, and global water access — reviewed by mentors in engineering and science."
                        className="mb-12"
                    />

                    {publications.length > 0 ? (
                        <ul className="grid gap-8 sm:grid-cols-2">
                            {publications.map((publication) => (
                                <li key={publication.href}>
                                    <PublicationCard publication={publication} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="rounded-2xl border border-navy/8 bg-water/5 px-6 py-10 text-center text-navy/70">
                            Featured articles will appear here once publication details are
                            available. See CONTENT_TODO.md.
                        </p>
                    )}
                </Container>
            </section>

            <CTA
                eyebrow="Get Involved"
                title="Contribute to student research and writing"
                description="Interested in informative writing, research, or joining the Jr Scientific Team? Volunteer with TSWP and help publish the next water treatment resource."
                primaryCta={{ label: "Volunteer With Us", href: "/volunteer" }}
                secondaryCta={{ label: "Contact the Team", href: "/contact" }}
                variant="gradient"
            />
        </>
    );
}