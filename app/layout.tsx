import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/lib/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello Next",
  description: "Hello Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen py-10 mx-auto px-4 bg-slate-200">
          <Sidebar>{children}</Sidebar>
        </div>
      </body>
    </html>
  );
}
