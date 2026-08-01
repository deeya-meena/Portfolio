import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deeya | Software Developer & AI Engineer Portfolio",
  description:
    "Modern developer portfolio website of Deeya - Software Developer, AI Engineer, Full Stack Developer, and Machine Learning Enthusiast.",
  keywords: [
    "Deeya",
    "Portfolio",
    "Software Developer",
    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Next.js 15",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Deeya" }],
  openGraph: {
    title: "Deeya | Software Developer & AI Engineer Portfolio",
    description:
      "Crafting high-performance web applications and intelligent machine learning models.",
    type: "website",
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
