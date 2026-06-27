import { services } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="section scroll-mt-24 border-t border-border bg-background">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-3">What I do</p>
          <h2 className="font-display max-w-lg text-3xl text-foreground md:text-4xl">
            Design and development, one pair of hands
          </h2>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={i * 0.06} className="contents">
              <article
                className={`service-row ${i > 0 ? "border-t border-border" : ""}`}
              >
                <span className="text-sm font-medium text-muted">{service.num}</span>
                <div>
                  <h3 className="font-display text-xl text-foreground md:text-2xl">{service.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                    {service.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2 md:justify-end">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-background px-3 py-1 text-[11px] text-muted"
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
