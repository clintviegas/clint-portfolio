import Link from "next/link";
import { siteConfig, whatsappLink } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="wrap flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-1 text-xs text-muted">{siteConfig.tagline}</p>
        </div>
        <nav className="flex gap-6 text-xs text-muted">
          <Link href="/work" className="hover:text-foreground">Work</Link>
          <Link href="/#contact" className="hover:text-foreground">Contact</Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            WhatsApp
          </Link>
        </nav>
        <p className="text-xs text-muted">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
