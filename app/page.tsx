import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Development Company & AI Solutions | AllSpark Technologies',
  description:
    'AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA',
  alternates: {
    canonical: 'https://allsparktechnologies.com/',
  },
  openGraph: {
    type: 'website',
    url: 'https://allsparktechnologies.com/',
    title: 'Custom Software Development Company & AI Solutions | AllSpark Technologies',
    description:
      'AllSpark Technologies builds scalable software development solutions, AI solutions, mobile apps, cloud systems, and offers tech-enabled services in USA',
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
export default function Home() {
  return (
    <>
      
      <Navbar />
      <Hero />
      <Logos />
      <ServicesSection />
      <AboutSection /> 
      <ProcessSection />
      <FaqSection />
      <ContactSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
