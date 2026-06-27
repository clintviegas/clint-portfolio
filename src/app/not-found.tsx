import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:bg-foreground/5"
      >
        <ArrowLeft size={16} />
        Back home
      </Link>
    </div>
  );
}
