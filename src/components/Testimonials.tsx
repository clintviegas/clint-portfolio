import { testimonials } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="section border-t border-border bg-background">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-3">Kind words</p>
          <h2 className="font-display text-3xl text-foreground md:text-4xl">Trusted by business owners</h2>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <blockquote className="card flex h-full flex-col p-6 md:p-8">
                <p className="text-base leading-relaxed text-foreground md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
