// app/about/page.tsx
import { Metadata } from 'next';

// Dynamically import the client component
import AboutClient from '@/components/AboutClient'

export const metadata: Metadata = {
  title: 'About AllSpark Technologies | US-Based Software Development & AI Company',
  description:
    'Learn more about AllSpark Technologies, a trusted software development and AI company in the USA. Discover how our experienced developers deliver innovative, tech-enabled digital solutions.',
  alternates: {
    canonical: 'https://allsparktechnologies.com/about/',
  },
  openGraph: {
    title: 'About AllSpark Technologies | US-Based Software Development Company',
    description:
      'Meet AllSpark Technologies — a trusted software development and AI company in the USA.',
    url: 'https://allsparktechnologies.com/about/',
    images: [
      {
        url: 'https://allsparktechnologies.com/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AllSpark Technologies',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
