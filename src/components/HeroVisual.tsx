"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { heroShowcaseWindows } from "@/data/portfolio";

function BrowserFrame({
  src,
  alt,
  href,
  label,
  style,
  animateY,
  duration,
  staticLayout,
}: {
  src: string;
  alt: string;
  href: string;
  label: string;
  style: { top: string; left?: string; right?: string; width: string };
  animateY: number[];
  duration: number;
  staticLayout: boolean;
}) {
  const content = (
    <div className="hero-window group overflow-hidden rounded-xl border border-border bg-background-elevated shadow-[0_12px_32px_-12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-border-strong hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-1.5 border-b border-border px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
        <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
        <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
        <span className="ml-1 truncate text-[9px] text-muted">{label}</span>
        <ArrowUpRight
          size={11}
          className="ml-auto shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="200px" priority />
      </div>
    </div>
  );

  const positionStyle = {
    top: style.top,
    left: style.left,
    right: style.right,
    width: style.width,
  };

  if (staticLayout) {
    return (
      <div className="absolute" style={positionStyle}>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label={`Visit ${label} live site`}
        >
          {content}
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="absolute"
      style={positionStyle}
      animate={{ y: animateY }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Visit ${label} live site`}
      >
        {content}
      </Link>
    </motion.div>
  );
}

export function HeroVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative h-[520px] w-full max-w-[400px]">
      <div className="hero-visual-glow pointer-events-none absolute inset-0 rounded-3xl" aria-hidden />
      {heroShowcaseWindows.map((win, i) => (
        <BrowserFrame
          key={win.href}
          src={win.src}
          alt={win.alt}
          href={win.href}
          label={win.label}
          style={{ top: win.top, left: win.left, right: win.right, width: win.width }}
          animateY={[0, i % 2 === 0 ? -7 : -5, 0]}
          duration={4.5 + i * 0.55}
          staticLayout={Boolean(reducedMotion)}
        />
      ))}
    </div>
  );
}
