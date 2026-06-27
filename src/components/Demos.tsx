import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { demoProjects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Demos() {
  return (
    <section id="demos" className="section scroll-mt-24 border-t border-border bg-background">
      <div className="wrap">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-3">UI/UX demos</p>
              <h2 className="font-display max-w-xl text-3xl md:text-4xl">
                Fancy templates across verticals
              </h2>
              <p className="mt-4 max-w-xl text-sm text-muted md:text-base">
                A concept build showing what a polished creative agency site can look like — bold
                typography, work showcase, and premium motion-led UI.
              </p>
            </div>
            <Link
              href="/work#demos"
              className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground"
            >
              View all demos
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
          {demoProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06} className="h-full">
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
