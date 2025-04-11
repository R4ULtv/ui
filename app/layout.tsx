import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UI - raulcarini.dev",
  description: "A collection of UI components built with Shadcn UI.",
  openGraph: {
    url: "https://ui.raulcarini.dev",
    siteName: "UI - raulcarini.dev",
    images: [
      {
        url: "/public/og-image.png",
        width: 1200,
        height: 630,
        alt: "UI Components Library",
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
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
