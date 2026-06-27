import { aiStack, type StackCategory } from "@/data/portfolio";
import { Reveal } from "./Reveal";

const categoryOrder: StackCategory[] = ["Framework", "Backend", "AI", "DevTools", "Infra"];

const categoryLabels: Record<StackCategory, string> = {
  Framework: "Framework",
  Backend: "Backend",
  AI: "AI",
  DevTools: "Dev tools",
  Infra: "Infrastructure",
};

export function AIStack() {
  const grouped = categoryOrder.map((category) => ({
    category,
    label: categoryLabels[category],
    items: aiStack.filter((item) => item.category === category),
  }));

  return (
    <section id="stack" className="section scroll-mt-24 border-t border-border">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-3">Modern development stack</p>
          <h2 className="font-display text-3xl md:text-4xl">Built with the tools that ship fast</h2>
          <p className="mt-4 max-w-2xl text-muted">
            From AI-assisted development to production infrastructure — the stack I use to build
            websites, SaaS, dashboards, and automations.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {grouped.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.05}>
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item.name} className="stack-pill">
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
