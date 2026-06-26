import { testimonials } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="section border-t border-border">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-3">Kind words</p>
          <h2 className="font-display text-3xl md:text-4xl">Trusted by business owners</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <blockquote className="card h-full p-6 md:p-8">
                <p className="text-base leading-relaxed md:text-lg">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6">
                  <p className="text-sm font-medium">{t.name}</p>
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
