import Link from "next/link";
import { Reveal } from "./Reveal";

export function FounderNote() {
  return (
    <section id="about" className="section scroll-mt-24">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mb-3">About</p>
        </Reveal>

        <div className="mt-4 max-w-3xl">
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl">
              AI-powered software.
              <br />
              <span className="text-muted">Built end to end.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              I&apos;m Clint, a full-stack developer focused on AI-powered software, modern web
              experiences, internal tools, and scalable business systems.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              I build with modern AI tooling — Cursor, Claude Code, Codex — and ship fast without
              sacrificing quality. CELPIPACE, Rekart, Scalify, and more: one developer from idea to
              launch.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 font-medium">Clint Viegas</p>
            <p className="text-sm text-muted">AI Full-Stack Developer</p>
            <Link href="#contact" className="btn-primary mt-8">
              Start a Project
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
