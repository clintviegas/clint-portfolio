import Image from "next/image";
import Link from "next/link";
import { aboutMe, siteConfig } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function FounderNote() {
  return (
    <section id="about" className="section scroll-mt-24">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-3">About me</p>
        </Reveal>

        <div className="mt-4 grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl">
                {aboutMe.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{aboutMe.subtitle}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
                {aboutMe.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Link href="#contact" className="btn-primary mt-8">
                Start a Project
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:pt-2">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-2xl border border-border lg:max-h-[420px]">
              <Image
                src={siteConfig.photo}
                alt={siteConfig.name}
                fill
                className="object-cover object-[center_15%]"
                sizes="300px"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
