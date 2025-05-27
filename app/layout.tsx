
import Script from 'next/script';
import GlobalPreloader from "@/components/GlobalPreloader";

import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/nprogress.css";
import { Toaster } from 'sonner';
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Page title in tab */}
        <title>Custom Software Development Company & AI Solutions | AllSpark Technologies</title>

        {/* Meta tags */}
        <meta name="description" content="AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="AllSpark Technologies" />
        <meta property="og:title" content="AllSpark Technologies | Software & AI Solutions" />
        <meta property="og:description" content="AllSpark Technologies builds scalable software and AI solutions, mobile apps, and tech-enabled services in the USA." />
        <meta property="og:url" content="https://allsparktechnologies.com" />
        <meta property="og:image" content="https://allsparktechnologies.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon */}
        <link rel="icon" href="/images/favicon.png" type="image/png" />

        {/* JSON-LD Schema */}
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <GlobalPreloader />
        {children}
        <Toaster position="bottom-right" className='bg-[#384BFF] text-white' />
      </body>
    </html>
  );
}
