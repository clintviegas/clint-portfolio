import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { projects, siteConfig, whatsappLink } from "@/data/portfolio";

export function CaseStudyView({ project }: { project: Project }) {
  const others = projects.filter((p) => p.slug !== project.slug && p.featured).slice(0, 3);

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
            Case study · {project.category}
            {project.year ? ` · ${project.year}` : ""}
          </p>
          <h1 className="headline max-w-3xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit live site
                <ArrowUpRight size={16} />
              </Link>
            )}
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Start a similar project
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
          <h2 className="font-display text-2xl md:text-3xl">Results</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.results.map((result) => (
              <li key={result} className="card p-5 text-sm leading-relaxed">
                {result}
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
            <h2 className="font-display text-2xl md:text-3xl">Want something similar?</h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Message me on WhatsApp — I&apos;ll reply within 24 hours with next steps.
            </p>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa mt-8"
            >
              WhatsApp {siteConfig.whatsappDisplay}
            </Link>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-border">
          <div className="wrap section">
            <h2 className="font-display text-2xl">More case studies</h2>
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
