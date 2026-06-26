import { workMarquee } from "@/data/portfolio";

export function WorkMarquee() {
  const items = [...workMarquee, ...workMarquee];

  return (
    <div className="mt-16 overflow-hidden border-y border-border py-5 md:mt-20">
      <div className="flex w-max marquee-track gap-10 md:gap-16">
        {items.map((item, i) => (
          <div key={`${item.title}-${i}`} className="flex shrink-0 items-center gap-4">
            <span className="font-display text-lg font-semibold md:text-xl">{item.title}</span>
            <span className="text-sm text-muted">{item.category}</span>
            <span className="text-border-strong">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
