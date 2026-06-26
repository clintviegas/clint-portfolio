import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectCard, ProjectCardCompact } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { demoProjects, productionProjects, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Case Studies — Web & SaaS Projects by Clint Viegas",
  description:
    "Browse case studies of websites, SaaS platforms, and business software built by freelance developer Clint Viegas for clients worldwide.",
  alternates: { canonical: `${siteConfig.url}/work` },
};

export default function WorkIndexPage() {
  const featuredProduction = productionProjects.filter((p) => p.featured);
  const moreProduction = productionProjects.filter((p) => !p.featured);

  return (
    <>
      <Header />
      <main>
        <div className="wrap pt-28 pb-8 md:pt-36">
          <p className="eyebrow mb-4">Case studies</p>
          <h1 className="headline max-w-2xl">Projects that shipped</h1>
          <p className="mt-6 max-w-xl text-muted">
            Real work for real businesses — education platforms, e-commerce ops, brand sites,
            and business software.
          </p>
        </div>

        <div className="wrap pb-16">
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            {featuredProduction.map((project, i) => (
              <Reveal
                key={project.slug}
                className={`h-full ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <ProjectCard project={project} index={i} featured />
              </Reveal>
            ))}
          </div>

          {moreProduction.length > 0 && (
            <div className="mt-12">
              <p className="eyebrow mb-4">Also built</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {moreProduction.map((p) => (
                  <ProjectCardCompact key={p.slug} project={p} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div id="demos" className="scroll-mt-24 border-t border-border bg-background-elevated">
          <div className="wrap pt-16 pb-8">
            <p className="eyebrow mb-4">UI/UX demos</p>
            <h2 className="font-display max-w-xl text-3xl md:text-4xl">
              Fancy templates across verticals
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              Concept builds showcasing polished design across agency, film, and creative
              industries — adaptable starting points for your brand.
            </p>
          </div>

          <div className="wrap pb-24">
            <div className="grid items-stretch gap-6 md:grid-cols-2">
              {demoProjects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
