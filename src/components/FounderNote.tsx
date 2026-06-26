import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function FounderNote() {
  return (
    <section id="about" className="section scroll-mt-24">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-3">A note from the developer</p>
        </Reveal>

        <div className="mt-4 grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl">
                One person.
                <br />
                Idea to launch.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                Most businesses hire a designer, then a developer, then spend weeks translating
                between them. Details get lost. Timelines slip. Costs add up.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                I removed the handoff. I design, build, and ship — end to end. What we agree on is
                what goes live. CELPIPACE, Rekart, Scalify — all built that way.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Good work isn&apos;t decoration. It&apos;s decision-making — what to build, what to
                cut, and what makes your business feel more valuable online.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 font-medium">{/* signature line */}Clint Viegas</p>
              <p className="text-sm text-muted">Freelance Web & Software Developer</p>
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
                Start a project
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:pt-8">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border lg:max-h-[360px]">
              <Image
                src="/clint-photo.png"
                alt="Clint Viegas"
                fill
                className="object-cover object-[center_12%]"
                sizes="280px"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
