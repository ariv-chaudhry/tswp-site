import Image from "next/image";
import type { TeamMember } from "@/types";

interface TeamMemberCardProps {
    member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
    return (
        <article className="flex h-full w-full flex-col text-center">
            <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-water/15 to-cyan/10 shadow-sm">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{
                        objectPosition: member.imagePosition ?? "center 20%",
                    }}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                />

                {member.linkedin && (
                    <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 left-3 rounded-md bg-[#0a66c2] px-2.5 py-1 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                    >
                        LinkedIn
                    </a>
                )}
            </div>

            <div className="mt-4 px-2">
                <h3 className="text-lg font-bold leading-tight text-navy sm:text-xl">
                    {member.name}
                </h3>

                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-water-dark sm:text-sm">
                    {member.role}
                </p>

                <p className="mx-auto mt-3 max-w-[290px] text-sm leading-relaxed text-navy/65">
                    {member.bio}
                </p>
            </div>
        </article>
    );
}