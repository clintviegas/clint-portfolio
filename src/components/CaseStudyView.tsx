import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { emailLink, projects, whatsappLink } from "@/data/portfolio";

export function CaseStudyView({ project }: { project: Project }) {
  const isDemo = project.kind === "demo";
  const others = projects
    .filter((p) => p.slug !== project.slug && p.featured && p.kind === project.kind)
    .slice(0, 3);

  return (
    <>
      <article>
        <div className="wrap pt-28 pb-8 md:pt-36">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            All projects
          </Link>

          <p className="eyebrow mt-8 mb-4">
            {isDemo ? "UI/UX demo" : "Case study"} · {project.category}
            {project.year ? ` · ${project.year}` : ""}
          </p>
          <h1 className="headline max-w-3xl">{project.title}</h1>
          {isDemo && (
            <p className="mt-3 inline-flex rounded-full border border-border px-3 py-1 text-xs text-muted">
              {project.vertical} · Demo template
            </p>
          )}
          <p className="mt-6 max-w-2xl text-lg text-muted">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {isDemo ? "View live demo" : "Visit live site"}
                <ArrowUpRight size={16} />
              </Link>
            )}
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {isDemo ? "Build something like this" : "Start a similar project"}
            </Link>
          </div>

          <dl className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs text-muted">Role</dt>
              <dd className="mt-1 text-sm">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Region</dt>
              <dd className="mt-1 text-sm">{project.region}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Outcome</dt>
              <dd className="mt-1 text-sm">{project.outcome}</dd>
            </div>
          </dl>
        </div>

        <div className="wrap pb-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-background-elevated">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="border-t border-border bg-background-elevated">
          <div className="wrap section grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">The challenge</h2>
              <p className="mt-4 leading-relaxed text-muted">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl">The solution</h2>
              <p className="mt-4 leading-relaxed text-muted">{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="wrap section">
          <h2 className="font-display text-2xl md:text-3xl">Business impact</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">{project.impact}</p>

          <h2 className="mt-12 font-display text-2xl md:text-3xl">Key metrics</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.metrics.map((metric) => (
              <li
                key={`${metric.label}-${metric.value}`}
                className={`card p-5 ${metric.isPlaceholder ? "metric-card-placeholder" : ""}`}
              >
                <p className="text-xs font-medium uppercase tracking-wider text-muted">{metric.label}</p>
                <p className={`mt-2 text-sm leading-relaxed ${metric.isPlaceholder ? "metric-placeholder" : ""}`}>
                  {metric.value}
                </p>
                {metric.isPlaceholder && (
                  <span className="sr-only">Metric placeholder — replace with real data</span>
                )}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-2xl md:text-3xl">Results</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.results.map((result) => (
              <li key={result} className="card p-5 text-sm leading-relaxed">
                {result}
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-xs font-semibold uppercase tracking-wider text-muted">Tech stack</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li key={tech} className="stack-pill">
                {tech}
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-xs font-semibold uppercase tracking-wider text-muted">
            Deliverables
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.deliverables.map((d) => (
              <li key={d} className="rounded-full border border-border px-4 py-1.5 text-xs text-muted">
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border bg-background-elevated">
          <div className="wrap section text-center">
            <h2 className="font-display text-2xl md:text-3xl">
              {isDemo ? "Want a site like this?" : "Want something similar?"}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              {isDemo
                ? "These demos show what's possible in your vertical. Message me on WhatsApp — I'll reply within 24 hours."
                : "Message me on WhatsApp — I'll reply within 24 hours with next steps."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
              >
                WhatsApp me
              </Link>
              <Link href={emailLink} className="btn-secondary">
                Email me
              </Link>
            </div>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-border">
          <div className="wrap section">
            <h2 className="font-display text-2xl">
              {isDemo ? "More UI/UX demos" : "More case studies"}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="card group overflow-hidden hover:border-border-strong"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover object-top transition-transform group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted">{p.category}</p>
                    <p className="mt-1 font-medium">{p.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
