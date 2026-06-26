import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Work() {
  const selected = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {selected.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.04}>
              <Link
                href={`/work/${project.slug}`}
                className={`group card block overflow-hidden transition-colors hover:border-border-strong ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-background-elevated ${
                    i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={i < 2}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes={i === 0 ? "100vw" : "50vw"}
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-5 md:p-6">
                  <div>
                    <p className="text-xs text-muted">
                      {project.category}
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
            </Reveal>
          ))}
        </div>

        {more.length > 0 && (
          <Reveal className="mt-8">
            <p className="eyebrow mb-4">Also built</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="card group flex items-center gap-4 p-4 hover:border-border-strong"
                >
                  <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
                    <Image src={p.image} alt={p.title} fill className="object-cover object-top" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{p.title}</p>
                    <p className="truncate text-xs text-muted">{p.category}</p>
                  </div>
                  <ArrowUpRight size={16} className="text-muted group-hover:text-foreground" />
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
