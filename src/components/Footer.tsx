import Link from "next/link";
import { emailLink, siteConfig, whatsappLink } from "@/data/portfolio";

export function Footer() {
  const hasLinkedIn = siteConfig.linkedinUrl.trim() !== "";
  const hasGitHub = siteConfig.githubUrl.trim() !== "";

  return (
    <footer className="border-t border-border py-10">
      <div className="wrap flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-1 text-xs text-muted">{siteConfig.tagline}</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-xs text-muted">
          <Link href="/work" className="hover:text-foreground">
            Work
          </Link>
          <Link href="/#contact" className="hover:text-foreground">
            Contact
          </Link>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            WhatsApp
          </Link>
          <Link href={emailLink} className="hover:text-foreground">
            Email
          </Link>
          {hasLinkedIn && (
            <Link href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              LinkedIn
            </Link>
          )}
          {hasGitHub && (
            <Link href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              GitHub
            </Link>
          )}
        </nav>
        <p className="text-xs text-muted">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
