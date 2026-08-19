import Image from "next/image";
import type { Metadata } from "next";

import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { aboutContent, site } from "@/data/site";
import { teamIntro, teamMembers } from "@/data/team";

export const metadata: Metadata = {
    title: "About",
    description: aboutContent.subtitle,
};

export default function AboutPage() {
    const adjustedTeamMembers = teamMembers.map((member) =>
        member.name === "Mariana Trillos"
            ? {
                ...member,
                imagePosition: "44% 52%",
            }
            : member,
    );

    const executiveMembers = adjustedTeamMembers.slice(0, 4);
    const advisoryMembers = adjustedTeamMembers.slice(4);

    return (
        <div className="relative overflow-hidden bg-[#e8f4fc]">
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.85),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(125,211,252,0.35),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(186,230,253,0.45),_transparent_45%)]"
                aria-hidden="true"
            />

            <div
                className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-white/40 blur-3xl"
                aria-hidden="true"
            />

            <div
                className="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"
                aria-hidden="true"
            />

            {/* Intro */}
            <section className="relative pt-16 sm:pt-20 lg:pt-24">
                <Container>
                    <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-sky-500">
                                {aboutContent.eyebrow}
                            </p>

                            <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
                                {aboutContent.title}
                            </h1>

                            <p className="mt-4 text-lg font-semibold leading-snug text-navy/80 sm:text-xl">
                                {aboutContent.subtitle}
                            </p>

                            <div className="mt-8 space-y-5 text-base leading-relaxed text-navy/70 sm:text-[1.05rem]">
                                {aboutContent.paragraphs.map((paragraph) => (
                                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <aside className="lg:sticky lg:top-24">
                            <div className="rounded-2xl bg-sky-200/70 p-7 shadow-sm sm:p-8">
                                <h2 className="text-2xl font-bold text-navy">
                                    {aboutContent.uvSection.title}
                                </h2>

                                <div className="mt-4 space-y-4 text-sm leading-relaxed text-navy/75 sm:text-base">
                                    {aboutContent.uvSection.paragraphs.map((paragraph) => (
                                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </section>

            {/* Team */}
            <section className="relative py-16 sm:py-24">
                <Container>
                    <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
                        <div className="text-center lg:text-left">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                                {teamIntro.eyebrow}
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                                {teamIntro.title}
                            </h2>

                            <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy/65 sm:text-lg">
                                {teamIntro.description}
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <Image
                                src="/images/mascot/friends.png"
                                alt="Two Student Water Project droplet mascots together"
                                width={520}
                                height={320}
                                className="h-auto max-h-[230px] w-auto max-w-full object-contain sm:max-h-[260px] lg:max-h-[290px]"
                            />
                        </div>
                    </div>

                    {/* Executive row */}
                    <ul className="mx-auto mt-16 grid max-w-7xl gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                        {executiveMembers.map((member) => (
                            <li key={member.name}>
                                <TeamMemberCard member={member} />
                            </li>
                        ))}
                    </ul>

                    {/* Advisory row */}
                    <ul className="mx-auto mt-14 grid max-w-4xl gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {advisoryMembers.map((member) => (
                            <li key={member.name}>
                                <TeamMemberCard member={member} />
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            {/* Registered NGO */}
            <section className="relative pb-20 pt-4 sm:pb-24">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                            {aboutContent.ngoSection.title}
                        </h2>

                        <div className="mt-8">
                            <Button
                                href={`mailto:${site.email}?subject=Incorporation%20Certificate`}
                                variant="outline"
                                size="lg"
                                className="border-navy/30 bg-sky-200/80 text-navy hover:border-navy hover:bg-sky-200"
                            >
                                {aboutContent.ngoSection.ctaLabel}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}