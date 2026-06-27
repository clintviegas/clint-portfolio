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

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

function topMetric(project: Project) {
  const real = project.metrics.find((m) => !m.isPlaceholder);
  return real ?? project.metrics[0];
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
  const metric = topMetric(project);
  const visibleStack = project.techStack.slice(0, 4);
  const overflowCount = project.techStack.length - visibleStack.length;

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
      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
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

        <p className="text-sm leading-relaxed text-foreground/90">{project.impact}</p>

        <div className="rounded-lg border border-border bg-background px-4 py-3 text-sm">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">Challenge</p>
          <p className="mt-1 text-muted">{truncate(project.challenge, 120)}</p>
          {metric && (
            <>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted">Result</p>
              <p className={`mt-1 ${metric.isPlaceholder ? "metric-placeholder" : "text-foreground"}`}>
                {metric.isPlaceholder ? metric.value : `${metric.label}: ${metric.value}`}
              </p>
            </>
          )}
        </div>

        <ul className="mt-auto flex flex-wrap gap-2">
          {visibleStack.map((tech) => (
            <li key={tech} className="stack-pill text-xs">
              {tech}
            </li>
          ))}
          {overflowCount > 0 && (
            <li className="stack-pill text-xs text-muted">+{overflowCount}</li>
          )}
        </ul>
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
