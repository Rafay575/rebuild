"use client";

import GlobalPreloader from "@/components/GlobalPreloader";
import { usePathname, useSearchParams } from "next/navigation";
import { useRef } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google"; // Import the font
// import NProgress from "nprogress";
// Load NProgress styles if necessary
import "@/styles/nprogress.css";

// Load Plus Jakarta Sans Font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose the weights you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstRender = useRef(true);

  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <GlobalPreloader />
        {children}
      </body>
    </html>
  );
}
