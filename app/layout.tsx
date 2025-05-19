"use client";

import GlobalPreloader from "@/components/GlobalPreloader";

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


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
       <link
        rel="icon"
        href="/images/favicon.png"
        type="image/png"
      />
      <body className={`${plusJakartaSans.className} antialiased`}>
        <GlobalPreloader />
        {children}
      </body>
    </html>
  );
}
