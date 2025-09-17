import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "@/components/ui/sonner";
import { Separator } from "@/components/ui/separator";
import ThemeSwitch from "@/components/theme-switch";

import { HeartIcon, MousePointerClickIcon } from "lucide-react";
import XformerlyTwitter from "@/components/icons/twitter";
import GitHub from "@/components/icons/github";
import { Button } from "@/components/ui/button";

const CommandMenu = dynamic(() => import("@/components/command-menu"));

import dynamic from "next/dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ui.raulcarini.dev"),
  title: "UI Components",
  description:
    "A collection of UI components built with Shadcn UI. Using React, TypeScript, and Tailwind CSS. Install the components using the shadcn/cli or open it in v0.",
  authors: [{ name: "Raul Carini", url: "https://www.raulcarini.dev" }],
  openGraph: {
    url: new URL("https://ui.raulcarini.dev"),
    siteName: "UI Components",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UI Components",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <header className="max-w-6xl mx-auto flex items-center px-4 py-6">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <MousePointerClickIcon className="size-5" />
                <h1 className="font-semibold tracking-tight">UI Components</h1>
              </Link>
              <Separator
                orientation="vertical"
                className="!h-4 hidden md:block"
              />
              <p className="text-muted-foreground hidden md:block line-clamp-1 text-sm">
                A collection of UI components built with Shadcn UI.
              </p>
            </div>
            <div className="ml-auto flex items-center gap-1 md:gap-2">
              <CommandMenu />
              <Button asChild variant="ghost" size="sm" className="h-8 group">
                <a
                  href="https://github.com/sponsors/R4ULtv?frequency=one-time"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="hidden md:block">Sponsorship</span>
                  <HeartIcon className="group-hover:stroke-red-400 group-hover:fill-red-400 group-hover:scale-110 transition-all duration-200 ease-out" />
                </a>
              </Button>
              <Separator
                orientation="vertical"
                className="!h-4 hidden md:block"
              />
              <ThemeSwitch />
            </div>
          </header>
          {children}
          <footer className="max-w-6xl mx-auto flex items-center justify-between px-4 py-6">
            <span className="text-sm text-muted-foreground text-pretty">
              Built with passion by{" "}
              <a
                href="https://x.com/lil_poop__"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground/90 hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground/50 transition-colors inline-flex items-center gap-1 group"
              >
                Raul Carini
                <XformerlyTwitter className="size-3.5 inline-block opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
              . Explore the source code on{" "}
              <a
                href="https://github.com/r4ultv/ui"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground/90 hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground/50 transition-colors inline-flex items-center gap-1 group"
              >
                Github
                <GitHub className="size-3.5 inline-block opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
              .
            </span>
          </footer>
          <Toaster position="top-center" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
