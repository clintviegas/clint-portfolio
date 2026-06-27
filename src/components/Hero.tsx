import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="wrap">
        <Reveal>
          <div className="badge-pill mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            <span className="text-xs text-muted">{siteConfig.heroBadge}</span>
          </div>
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
          <div>
            <Reveal delay={0.05}>
              <h1 className="headline max-w-3xl">{siteConfig.heroHeadline}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {siteConfig.heroSubheadline}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#contact" className="btn-primary">
                  Start a Project
                </Link>
                <Link href="#work" className="btn-secondary">
                  View Work
                  <ArrowDown size={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-xs text-muted">Based in Vancouver · Available worldwide</p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="hidden lg:flex lg:justify-end">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
