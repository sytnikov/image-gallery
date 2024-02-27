import { Rubik } from "next/font/google";
import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";

export const revalidate = 100

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Image Gallery",
  description:
    "An interactive high-performance image library built with Next.js, TypeScript, and Zod",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
