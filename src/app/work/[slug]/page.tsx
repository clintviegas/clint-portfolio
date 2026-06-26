import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/CaseStudyView";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getProject, projects, siteConfig } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const url = `${siteConfig.url}/work/${project.slug}`;

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url,
      images: [{ url: project.image, alt: project.title }],
    },
    alternates: { canonical: url },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seoDescription,
    url: `${siteConfig.url}/work/${project.slug}`,
    image: `${siteConfig.url}${project.image}`,
    author: { "@type": "Person", name: siteConfig.name },
    dateCreated: project.year,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <CaseStudyView project={project} />
      </main>
      <Footer />
    </>
  );
}
