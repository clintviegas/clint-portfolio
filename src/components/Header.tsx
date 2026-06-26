"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/portfolio";

const links = [
  { href: "/work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-xl" : ""
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between md:h-[72px]">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <span className="mr-4 hidden text-xs text-muted lg:inline">{siteConfig.availability}</span>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="px-2 text-sm text-muted hover:text-foreground">
              {l.label}
            </Link>
          ))}
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary ml-2">
            Book a call
          </Link>
        </div>

        <button type="button" className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-muted">
              {l.label}
            </Link>
          ))}
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3 w-full">
            Book a call
          </Link>
        </div>
      )}
    </header>
  );
}
