import type { Metadata, Viewport } from "next";
import Script from "next/script";
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

const seoTitle = `${siteConfig.name} | AI Full-Stack Developer`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: seoTitle,
    description: siteConfig.description,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: seoTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F4F5" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
  colorScheme: "light dark",
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",t==="light"||t==="dark"?t:"dark");}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} data-theme="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
