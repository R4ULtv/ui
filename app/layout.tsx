import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Link from "next/link";

import { Toaster } from "@/components/ui/sonner";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import ThemeSwitch from "@/components/theme-switch";
import GithubIcon from "@/components/icons/github";
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
  title: "Icon Picker Components",
  description:
    "A collection of different icon picker components. Using React, TypeScript, and Tailwind CSS. Icons are sourced from lucide.dev. Install the components using the shadcn/cli.",
  authors: [{ name: "Raul Carini", url: "https://www.raulcarini.dev" }],
  openGraph: {
    url: new URL("https://ui.raulcarini.dev"),
    siteName: "Icon Picker Components",
    images: [
      {
        url: "/icon-picker.png",
        width: 1200,
        height: 630,
        alt: "Icon Picker Components",
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
                <span className="font-medium">Icon Picker</span>
              </Link>
              <Separator
                orientation="vertical"
                className="!h-6 hidden md:block"
              />
              <p className="text-muted-foreground hidden md:block line-clamp-1 text-sm">
                A collection of UI components built with Shadcn UI.
              </p>
            </div>
            <div className="ml-auto flex gap-1">
              <Button variant="ghost" size="icon" className="size-8" asChild>
                <a href="https://github.com/r4ultv/ui">
                  <span className="sr-only">Github</span>
                  <GithubIcon />
                </a>
              </Button>
              <ThemeSwitch />
            </div>
          </header>
          {children} <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
