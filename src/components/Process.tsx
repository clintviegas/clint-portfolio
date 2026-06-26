import { process as steps } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="section scroll-mt-24 border-t border-border">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="font-display text-3xl md:text-4xl">From brief to live in weeks</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <div className="card h-full p-6">
                <span className="text-xs font-medium text-muted">{step.step}</span>
                <h3 className="mt-3 font-display text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
