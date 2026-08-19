import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const opportunities = [
    {
        title: "Join our team",
        description:
            "Contribute your skills to student-led initiatives and help us grow the impact of The Student Water Project.",
    },
    {
        title: "Support a project",
        description:
            "Help with research, outreach, communications, fundraising, or project implementation.",
    },
    {
        title: "Collaborate with us",
        description:
            "Bring an idea, organization, school, or community partnership to our team.",
    },
];

export default function VolunteerPage() {
    return (
        <>
            <PageHero
                eyebrow="Volunteer"
                title="Make an impact with us"
                description="The Student Water Project is powered by students and volunteers who care about water, education, and creating meaningful change."
                mascotSrc="/images/mascot/waving.png"
                mascotAlt="Student Water Project droplet mascot waving beside a signpost"
            />

            <section className="py-16 sm:py-20">
                <Container>
                    <div className="grid gap-6 md:grid-cols-3">
                        {opportunities.map((opportunity) => (
                            <article
                                key={opportunity.title}
                                className="rounded-3xl border border-navy/10 bg-white p-7 shadow-sm"
                            >
                                <h2 className="text-xl font-bold text-navy">
                                    {opportunity.title}
                                </h2>

                                <p className="mt-4 leading-7 text-navy/70">
                                    {opportunity.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 rounded-3xl bg-sky/10 p-8 text-center sm:p-12">
                        <h2 className="text-3xl font-bold text-navy">
                            Interested in getting involved?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-navy/70">
                            Reach out to the team and tell us a little about yourself and how
                            you would like to contribute.
                        </p>

                        <div className="mt-7 flex justify-center">
                            <Button href="/contact">
                                Contact our team
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}