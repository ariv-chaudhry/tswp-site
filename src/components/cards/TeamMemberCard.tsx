import Image from "next/image";
import type { TeamMember } from "@/types";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className="flex h-full flex-col text-center">
      <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl bg-gradient-to-br from-water/15 to-cyan/10 shadow-sm">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
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
      <div className="mt-4 px-1">
        <h3 className="text-lg font-bold text-navy sm:text-xl">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-water-dark">
          {member.role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-navy/65">{member.bio}</p>
      </div>
    </article>
  );
}
