import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { projects, siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Case Studies — Web & SaaS Projects by Clint Viegas",
  description:
    "Browse case studies of websites, SaaS platforms, and business software built by freelance developer Clint Viegas for clients in Canada, UAE, and worldwide.",
  alternates: { canonical: `${siteConfig.url}/work` },
};

export default function WorkIndexPage() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

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

        <div className="wrap pb-24">
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project, i) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group card block overflow-hidden hover:border-border-strong ${
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
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes={i === 0 ? "100vw" : "50vw"}
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-5 md:p-6">
                  <div>
                    <p className="text-xs text-muted">
                      {project.category}
                      {project.year ? ` · ${project.year}` : ""}
                    </p>
                    <h2 className="mt-1 font-display text-xl md:text-2xl">{project.title}</h2>
                    <p className="mt-2 text-sm text-muted">{project.description}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted group-hover:text-foreground"
                  />
                </div>
              </Link>
            ))}
          </div>

          {more.length > 0 && (
            <div className="mt-12">
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
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
