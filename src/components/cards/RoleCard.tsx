import type { VolunteerRole } from "@/types";

interface RoleCardProps {
  role: VolunteerRole;
}

export function RoleCard({ role }: RoleCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-navy/8 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-widest text-water-dark">
        {role.category}
      </p>
      <h3 className="mt-2 text-lg font-bold text-navy">{role.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">
        {role.description}
      </p>
      {role.requirements && (
        <p className="mt-4 border-t border-navy/8 pt-4 text-sm text-navy/60">
          <span className="font-semibold text-navy">Requirements:</span>{" "}
          {role.requirements}
        </p>
      )}
    </article>
  );
}
