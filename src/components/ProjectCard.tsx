import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

function categoryLabel(project: Project) {
  if (project.kind === "demo") {
    return `UI/UX demo · ${project.category.replace("Demo · ", "")}`;
  }
  return project.category;
}

export function ProjectCard({
  project,
  index = 0,
  priority,
  featured = false,
}: {
  project: Project;
  index?: number;
  priority?: boolean;
  featured?: boolean;
}) {
  const spanFull = featured && index === 0;

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group card flex h-full flex-col overflow-hidden transition-colors hover:border-border-strong"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-background-elevated">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority={priority ?? index < 2}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          sizes={spanFull ? "100vw" : "50vw"}
        />
      </div>
      <div className="flex flex-1 items-start justify-between gap-4 p-5 md:p-6">
        <div>
          <p className="text-xs text-muted">
            {categoryLabel(project)}
            {project.year ? ` · ${project.year}` : ""}
          </p>
          <h3 className="mt-1 font-display text-xl md:text-2xl">{project.title}</h3>
          <p className="mt-2 text-sm text-muted">{project.description}</p>
        </div>
        <ArrowUpRight
          size={20}
          className="shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </div>
    </Link>
  );
}

export function ProjectCardCompact({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="card group flex items-center gap-4 p-4 hover:border-border-strong"
    >
      <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
        <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-medium">{project.title}</p>
        <p className="truncate text-xs text-muted">{categoryLabel(project)}</p>
      </div>
      <ArrowUpRight size={16} className="text-muted group-hover:text-foreground" />
    </Link>
  );
}
