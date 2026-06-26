import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productionProjects } from "@/data/portfolio";
import { ProjectCard, ProjectCardCompact } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Work() {
  const selected = productionProjects.filter((p) => p.featured);
  const more = productionProjects.filter((p) => !p.featured);

  return (
    <section id="work" className="section scroll-mt-24">
      <div className="wrap">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-3">Selected work</p>
              <h2 className="font-display text-3xl md:text-4xl">Projects that shipped</h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
            >
              All case studies
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
          {selected.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.04} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        {more.length > 0 && (
          <Reveal className="mt-8">
            <p className="eyebrow mb-4">Also built</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {more.map((p) => (
                <ProjectCardCompact key={p.slug} project={p} />
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
