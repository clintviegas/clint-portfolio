import Link from "next/link";
import { Calendar, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import {
  emailLink,
  scheduleLink,
  siteConfig,
  whatsappLink,
} from "@/data/portfolio";
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
              Have an AI project, SaaS idea, dashboard, or website you want to launch?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Let&apos;s turn it into something real. Message me — I respond personally within 24
              hours.
            </p>
            <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
              <Link
                href={scheduleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary justify-center"
              >
                <Calendar size={16} />
                Schedule a call
              </Link>
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
              {(hasLinkedIn || hasGitHub) && (
                <div className="flex gap-3 sm:col-span-2 sm:justify-center">
                  {hasLinkedIn && (
                    <Link
                      href={siteConfig.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 justify-center sm:flex-none"
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
                      className="btn-secondary flex-1 justify-center sm:flex-none"
                    >
                      <Github size={16} />
                      GitHub
                    </Link>
                  )}
                </div>
              )}
            </div>
            {!hasLinkedIn && !hasGitHub && (
              <p className="mt-6 text-xs text-muted">
                {/* TODO: Add linkedinUrl and githubUrl in siteConfig to show social links */}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
