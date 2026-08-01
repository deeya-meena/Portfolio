import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://deeya-meena.github.io/Portfolio";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deeya Meena | Software Developer & AI Engineer",
    template: "%s | Deeya Meena",
  },
  description:
    "Developer portfolio website of Deeya Meena — B.Tech ECE Student at IIIT Bhopal, Full Stack Web Developer, AI & Cloud Enthusiast.",
  keywords: [
    "Deeya Meena",
    "IIIT Bhopal",
    "Software Developer",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js Portfolio",
    "React",
    "TypeScript",
    "C++ Developer",
    "Cloud Engineer",
  ],
  authors: [{ name: "Deeya Meena", url: siteUrl }],
  creator: "Deeya Meena",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Deeya Meena | Software Developer & AI Engineer",
    description:
      "Crafting intelligent, high-performance web applications and cloud software solutions.",
    url: siteUrl,
    siteName: "Deeya Meena Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Deeya Meena - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deeya Meena | Software Developer & AI Engineer",
    description:
      "Full-stack web applications, AI integrations, and cloud software solutions.",
    images: ["/og-image.svg"],
    creator: "@deeyameena",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
