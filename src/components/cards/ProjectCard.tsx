import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export interface ProjectCardData {
  title: string;
  summary: string;
  location: string;
  status: "active" | "completed" | "planned";
  image: string;
  href: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
}

const statusLabels: Record<ProjectCardData["status"], string> = {
  active: "Active",
  completed: "Completed",
  planned: "Planned",
};

const statusColors: Record<ProjectCardData["status"], string> = {
  active: "bg-water/15 text-water-dark",
  completed: "bg-green-100 text-green-800",
  planned: "bg-navy/8 text-navy/70",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative">
        <PlaceholderImage
          label={`Add ${project.image}`}
          aspect="aspect-[16/10]"
          className="rounded-none rounded-t-2xl"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${statusColors[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-water-dark">{project.location}</p>
        <h3 className="mt-1 text-xl font-bold text-navy group-hover:text-water-dark">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">
          {project.summary}
        </p>
        <span className="mt-4 text-sm font-semibold text-water-dark">
          Learn more &rarr;
        </span>
      </div>
    </Link>
  );
}
