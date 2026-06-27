"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const windows = [
  {
    src: "/projects/rekart-ae.png",
    alt: "Rekart e-commerce dashboard preview",
    className: "left-0 top-8 z-10 w-[72%]",
    delay: 0,
    y: [0, -10, 0],
  },
  {
    src: "/projects/dashboard.png",
    alt: "Sales analytics dashboard preview",
    className: "right-0 top-0 z-20 w-[68%]",
    delay: 0.4,
    y: [0, -14, 0],
  },
  {
    src: "/projects/leo-india.png",
    alt: "Creative agency website preview",
    className: "bottom-0 left-[18%] z-30 w-[58%]",
    delay: 0.8,
    y: [0, -8, 0],
  },
];

function BrowserFrame({
  src,
  alt,
  className,
  animateY,
  duration,
}: {
  src: string;
  alt: string;
  className: string;
  animateY: number[];
  duration: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ y: animateY }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="hero-window overflow-hidden rounded-xl border border-border bg-background-elevated shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="h-2 w-2 rounded-full bg-border-strong" />
          <span className="ml-2 h-1.5 flex-1 rounded-full bg-border" />
        </div>
        <div className="relative aspect-[16/10]">
          <Image src={src} alt={alt} fill className="object-cover object-top" sizes="340px" />
        </div>
      </div>
    </motion.div>
  );
}

export function HeroVisual() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative aspect-[4/5] w-full max-w-[380px]">
      <div className="hero-visual-glow pointer-events-none absolute inset-0 rounded-3xl" aria-hidden />
      {windows.map((win) =>
        reducedMotion ? (
          <div key={win.src} className={`absolute ${win.className}`}>
            <div className="hero-window overflow-hidden rounded-xl border border-border bg-background-elevated shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-border-strong" />
                <span className="h-2 w-2 rounded-full bg-border-strong" />
                <span className="h-2 w-2 rounded-full bg-border-strong" />
                <span className="ml-2 h-1.5 flex-1 rounded-full bg-border" />
              </div>
              <div className="relative aspect-[16/10]">
                <Image src={win.src} alt={win.alt} fill className="object-cover object-top" sizes="340px" />
              </div>
            </div>
          </div>
        ) : (
          <BrowserFrame
            key={win.src}
            src={win.src}
            alt={win.alt}
            className={win.className}
            animateY={win.y}
            duration={5 + win.delay * 2}
          />
        ),
      )}
    </div>
  );
}
