import { featuredTestimonial } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function FeaturedQuote() {
  return (
    <section className="border-t border-border py-16 md:py-20" aria-label="Client testimonial">
      <div className="wrap">
        <Reveal>
          <blockquote className="card mx-auto max-w-3xl p-8 text-center md:p-12">
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </p>
            <footer className="mt-6">
              <p className="text-sm font-medium text-foreground">{featuredTestimonial.name}</p>
              <p className="text-xs text-muted">{featuredTestimonial.role}</p>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
