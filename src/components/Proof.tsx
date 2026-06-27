import { proofStats } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Proof() {
  return (
    <section className="section border-b border-border">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-3">Proof, not promises</p>
          <h2 className="font-display text-3xl text-foreground md:text-4xl">The receipts</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {proofStats.map((stat, i) => (
            <Reveal key={stat.num} delay={i * 0.06} className="contents">
              <article className="stat-cell">
                <span className="text-xs font-medium text-muted">{stat.num}</span>
                <h3 className="mt-3 font-display text-xl text-foreground">{stat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{stat.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
