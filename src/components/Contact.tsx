import Link from "next/link";
import { siteConfig, whatsappLink } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section scroll-mt-24">
      <div className="wrap">
        <Reveal>
          <div className="rounded-3xl border border-border bg-background-elevated px-8 py-14 text-center md:px-16 md:py-20">
            <p className="eyebrow mb-4">Still curious?</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">Ask me directly.</h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Message on WhatsApp for the fastest reply. Tell me what you&apos;re building — I&apos;ll
              respond personally within 24 hours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-wa">
                WhatsApp {siteConfig.whatsappDisplay}
              </Link>
              <Link href={`mailto:${siteConfig.email}`} className="btn-secondary">
                {siteConfig.email}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
