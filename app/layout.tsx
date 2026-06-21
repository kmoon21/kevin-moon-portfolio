import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Moon — Full-Stack Developer",
  description:
    "Full-stack developer who has independently designed, built, and shipped four production web apps and one iOS app. TypeScript, React, Next.js, Supabase.",
  metadataBase: new URL("https://kevinmoon.dev"),
  openGraph: {
    title: "Kevin Moon — Full-Stack Developer",
    description:
      "Production software, real users, real validation. Not portfolio demos.",
    url: "https://kevinmoon.dev",
    siteName: "Kevin Moon",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
