import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Freelance Web & Software Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — Freelance Web & Software Developer`,
    description: siteConfig.description,
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
