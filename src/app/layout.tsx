import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import PwaInstaller from "@/components/PwaInstaller";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Asmaul Husna",
  description: "A learning and memorization tool for the 99 names of Allah.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#020817" />
      </head>
      <body className="font-sans antialiased bg-background min-h-screen text-foreground pb-20">
        {children}
        <BottomNav />
        <Toaster />
        <PwaInstaller />
      </body>
    </html>
  );
}
