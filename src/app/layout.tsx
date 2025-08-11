import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import StarBackground from "./components/StarBackground";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Developer Brothers",
  description: "A startup focused on innovative development solutions",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} antialiased relative`}>
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
