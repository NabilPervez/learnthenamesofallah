import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SWRegister } from "@/components/sw-register";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Learn the Names of Allah",
  description: "A learning and memorization tool for the 99 names of Allah.",
  manifest: "/manifest.json",
  icons: { icon: "/icons/favicon-48.png", apple: "/icons/apple-touch-icon.png" },
  appleWebApp: { capable: true, title: "99 Names", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#66A5AD",
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
      </head>
      <body className="font-sans antialiased bg-background min-h-screen text-foreground pb-20">
        {children}
        <BottomNav />
        <Toaster />
        <SWRegister />
      </body>
    </html>
  );
}
