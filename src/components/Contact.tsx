import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { emailLink, siteConfig, whatsappLink } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  const hasLinkedIn = siteConfig.linkedinUrl.trim() !== "";
  const hasGitHub = siteConfig.githubUrl.trim() !== "";

  return (
    <section id="contact" className="section scroll-mt-24">
      <div className="wrap">
        <Reveal>
          <div className="panel px-8 py-14 text-center md:px-16 md:py-20">
            <p className="eyebrow mb-4">Start a project</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
              Have a SaaS idea, dashboard, or website you want to launch?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Let&apos;s turn it into something real. Message me — I respond personally within 24
              hours.
            </p>
            <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href={emailLink} className="btn-secondary justify-center">
                <Mail size={16} />
                Email me
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa justify-center"
              >
                <MessageCircle size={16} />
                WhatsApp me
              </Link>
            </div>
            {(hasLinkedIn || hasGitHub) && (
              <div className="mt-4 flex justify-center gap-3">
                {hasLinkedIn && (
                  <Link
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary justify-center"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </Link>
                )}
                {hasGitHub && (
                  <Link
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary justify-center"
                  >
                    <Github size={16} />
                    GitHub
                  </Link>
                )}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
