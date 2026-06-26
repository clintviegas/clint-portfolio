import { services } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="section scroll-mt-24 border-t border-border bg-background-elevated">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-3">What I do</p>
          <h2 className="font-display max-w-lg text-3xl md:text-4xl">
            Design and development, one pair of hands
          </h2>
        </Reveal>

        <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-border">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={i * 0.06}>
              <article className="grid gap-6 bg-background p-6 md:grid-cols-[80px_1fr_auto] md:items-start md:p-8">
                <span className="text-sm font-medium text-muted">{service.num}</span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl">{service.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                    {service.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2 md:justify-end">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-[11px] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
