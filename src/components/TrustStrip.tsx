import { clientLogos } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function TrustStrip() {
  return (
    <section className="border-b border-border py-10 md:py-12" aria-label="Trusted by">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-6 text-center">Trusted by / Worked with</p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {clientLogos.map((client, i) => (
            <Reveal key={client.name} delay={i * 0.04}>
              <div className="trust-logo card px-5 py-3 text-sm font-medium text-muted">
                {/* TODO: replace with <Image> when logoSrc is set in portfolio.ts */}
                {client.name}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
