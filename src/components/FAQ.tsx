"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section border-t border-border bg-background">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl">Questions, answered</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((item, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-foreground"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-medium md:text-base">
                    <span className="mr-3 text-muted">{String(i + 1).padStart(2, "0")}</span>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-muted transition-transform ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <p className="pb-5 pl-8 pr-4 text-sm leading-relaxed text-muted md:text-base">
                    {item.a}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
