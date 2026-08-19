import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export default function ContactPage() {
    return (
        <>
            <PageHero
                eyebrow="Contact"
                title="Get in touch"
                description="Have a question, partnership idea, or want to learn more about The Student Water Project? We'd love to hear from you."
                mascotSrc="/images/mascot/location.png"
                mascotAlt="Student Water Project droplet mascot standing beside a signpost"
            />

            <section className="py-16 sm:py-20">
                <Container>
                    <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold text-navy">
                                Start a conversation
                            </h2>

                            <p className="mt-5 leading-7 text-navy/70">
                                Whether you are interested in volunteering, collaborating,
                                supporting a project, or simply learning more about our work,
                                reach out to our team.
                            </p>

                            <a
                                href="mailto:thestudentwaterproject@gmail.com"
                                className="mt-6 inline-block font-semibold text-sky hover:underline"
                            >
                                thestudentwaterproject@gmail.com
                            </a>
                        </div>

                        <div className="rounded-3xl border border-navy/10 bg-white p-7 shadow-sm sm:p-8">
                            <h2 className="text-xl font-bold text-navy">
                                Send us a message
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-navy/65">
                                Our full website contact form is coming soon. In the meantime,
                                you can contact the team directly by email.
                            </p>

                            <a
                                href="mailto:thestudentwaterproject@gmail.com"
                                className="mt-6 inline-flex rounded-full bg-sky px-6 py-3 font-bold text-white transition hover:bg-navy"
                            >
                                Email us
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}