import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Link from "next/link";

import { Toaster } from "@/components/ui/sonner";
import { Separator } from "@/components/ui/separator";
import ThemeSwitch from "@/components/theme-switch";
import { MousePointerClickIcon } from "lucide-react";

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
        <ThemeProvider attribute="class">
          <header className="max-w-6xl mx-auto flex items-center px-4 py-6">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <MousePointerClickIcon className="size-5" />
                <h1 className="font-semibold tracking-tight">UI Components</h1>
              </Link>
              <Separator
                orientation="vertical"
                className="!h-6 hidden md:block"
              />
              <p className="text-muted-foreground hidden md:block line-clamp-1 text-sm">
                A collection of UI components built with Shadcn UI.
              </p>
            </div>
            <div className="ml-auto">
              <ThemeSwitch />
            </div>
          </header>
          {children}
          <footer className="max-w-6xl mx-auto flex items-center px-4 py-6">
            <span className="text-sm text-muted-foreground text-pretty">
              Built by{" "}
              <a
                href="https://x.com/lil_poop__"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                Raul Carini
              </a>
              . The source code is available on{" "}
              <a
                href="https://github.com/r4ultv/ui"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground transition-colors"
              >
                Github
              </a>
              .
            </span>
          </footer>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
