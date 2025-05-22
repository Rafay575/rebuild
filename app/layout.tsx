"use client";
import Script from 'next/script'
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
 


const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://allsparktechnologies.com/#organization',
      name: 'AllSpark Technologies',
      url: 'https://allsparktechnologies.com',
      logo: 'https://allsparktechnologies.com/logo.png',
      sameAs: [
        'https://www.linkedin.com/company/allspark-technologies',
        'https://www.facebook.com/allsparktechnologies',
      ],
      description:
        'AllSpark Technologies is a leading software development company and AI development agency in the USA, offering custom software, cloud, DevOps, and full-stack solutions.',
      foundingDate: '2023',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    },
    /* …the rest of your graph… */
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        {/* Inject the JSON-LD into the head */}
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
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
