"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { siteConfig, whatsappLink } from "@/data/portfolio";
import { NavPill } from "./NavPill";
import { ThemeToggle } from "./ThemeToggle";

const sectionLinks = [
  { id: "work", href: "/#work", label: "Work" },
  { id: "services", href: "/#services", label: "Services" },
  { id: "process", href: "/#process", label: "Process" },
];

const ctaLink = { id: "contact", href: "/#contact", label: "Book a call" };

const mobileLinks = [
  { href: "/#work", num: "01", label: "Work" },
  { href: "/#services", num: "02", label: "Services" },
  { href: "/#process", num: "03", label: "Process" },
  { href: "/#contact", num: "04", label: "Contact" },
];

function SparkIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden className="nav-spark">
      <path
        d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");
  const [desktopNav, setDesktopNav] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktopNav(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isHome || !desktopNav) return;

    const ids = [...sectionLinks.map((l) => l.id), ctaLink.id];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome, desktopNav]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);

  const activeLink = sectionLinks.find((l) => l.id === activeSection);
  const restLinks = sectionLinks.filter((l) => l.id !== activeSection);

  return (
    <>
      <header className={`nav-bar ${scrolled ? "is-scrolled" : ""}`} id="top">
        <div className="nav-bar__inner wrap !px-5 md:!px-8">
          <Link href="/" className="nav-bar__brand" aria-label={`${siteConfig.name} — home`}>
            <span className="nav-spark-wrap" aria-hidden>
              <SparkIcon />
            </span>
            <span className="text-sm font-semibold tracking-tight">{siteConfig.name}</span>
          </Link>

          {isHome && (
            <div className="hidden min-w-0 flex-1 items-center gap-4 lg:flex">
              <span className="nav-bar__rule nav-bar__rule--short" aria-hidden />
              <LayoutGroup id="portfolio-nav">
                <div className="nav-bar__active">
                  {activeLink && (
                    <NavPill
                      href={activeLink.href}
                      label={activeLink.label}
                      active
                      layoutId="nav-active-pill"
                    />
                  )}
                </div>
                <span className="nav-bar__rule nav-bar__rule--flex" aria-hidden />
                <nav className="nav-bar__links" aria-label="Primary">
                  <div className="nav-bar__rest">
                    {restLinks.map((link) => (
                      <NavPill key={link.id} href={link.href} label={link.label} />
                    ))}
                  </div>
                  <NavPill
                    href={ctaLink.href}
                    label={ctaLink.label}
                    cta
                    active={activeSection === ctaLink.id}
                  />
                </nav>
              </LayoutGroup>
              <ThemeToggle className="ml-1 shrink-0" />
            </div>
          )}

          {!isHome && (
            <nav className="ml-auto hidden items-center gap-2 lg:flex" aria-label="Primary">
              {sectionLinks.map((link) => (
                <Link key={link.id} href={link.href} className="nav-pill">
                  {link.label}
                </Link>
              ))}
              <Link href={ctaLink.href} className="nav-pill nav-pill--cta">
                {ctaLink.label}
              </Link>
              <ThemeToggle />
            </nav>
          )}

          <div className="flex items-center gap-1 lg:hidden ml-auto">
            {isHome && <ThemeToggle />}
            <button
              type="button"
              className="nav-bar__toggle lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="nav-panel"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-panel ${open ? "is-open" : ""}`} id="nav-panel" aria-hidden={!open}>
        <div className="nav-panel__head">
          <span className="nav-spark-wrap" aria-hidden>
            <SparkIcon size={18} />
          </span>
          <button type="button" className="nav-panel__close" onClick={closeMenu} aria-label="Close menu">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="nav-panel__nav" aria-label="Mobile">
          {(isHome ? mobileLinks : [{ href: "/work", num: "01", label: "All work" }, ...mobileLinks]).map(
            (link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                <span className="nav-panel__no">{link.num}</span>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa nav-panel__cta"
          onClick={closeMenu}
        >
          WhatsApp me
        </Link>
      </div>
    </>
  );
}
