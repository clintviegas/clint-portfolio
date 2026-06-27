import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/portfolio";
import { Reveal } from "./Reveal";

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

        <div className="grid items-end gap-12 lg:grid-cols-[1fr_340px] lg:gap-16">
          <div>
            <Reveal delay={0.05}>
              <h1 className="headline max-w-3xl">
                Websites that convert,
                <br />
                <span className="text-muted">software that ships.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {siteConfig.heroIntro}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-wa">
                  WhatsApp me
                </Link>
                <Link href="#work" className="btn-secondary">
                  See the work
                  <ArrowDown size={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-xs text-muted">Based in Vancouver · Available worldwide</p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="hidden lg:block">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/clint-photo.png"
                alt={siteConfig.name}
                fill
                priority
                className="object-cover object-[center_12%]"
                sizes="340px"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
