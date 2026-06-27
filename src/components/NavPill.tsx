"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type NavPillProps = {
  href: string;
  label: string;
  active?: boolean;
  cta?: boolean;
  layoutId?: string;
  onClick?: () => void;
};

export function NavPill({ href, label, active, cta, layoutId, onClick }: NavPillProps) {
  return (
    <motion.div
      layout={Boolean(layoutId)}
      layoutId={layoutId}
      transition={{ type: "spring", stiffness: 420, damping: 36 }}
      className="flex shrink-0"
    >
      <Link
        href={href}
        onClick={onClick}
        className={`nav-pill ${active ? "is-active" : ""} ${cta ? "nav-pill--cta" : ""}`}
      >
        {label}
      </Link>
    </motion.div>
  );
}
