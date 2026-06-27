import { comparison } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Comparison() {
  return (
    <section className="section border-t border-border bg-background">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-3">The honest comparison</p>
          <h2 className="font-display max-w-2xl text-3xl md:text-4xl">
            Slow, messy, or overpriced? There&apos;s a better way.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                {comparison.headers.map((h, i) => (
                  <th
                    key={h || "label"}
                    className={`pb-4 pr-4 font-medium ${i === 1 ? "text-foreground" : "text-muted"}`}
                  >
                    {i === 1 && (
                      <span className="mb-1 block text-[10px] uppercase tracking-wider text-success">
                        Recommended
                      </span>
                    )}
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <td className="py-4 pr-4 font-medium text-muted">{row.label}</td>
                  <td className="py-4 pr-4 text-foreground">{row.me}</td>
                  <td className="py-4 pr-4 text-muted">{row.agency}</td>
                  <td className="py-4 text-muted">{row.cheap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
