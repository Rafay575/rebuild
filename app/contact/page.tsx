import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import HeroSection from "@/components/HeroSection";
import Footer2 from "@/components/Footer2";
import  Contact  from "@/components/Contact";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Contact AllSpark Technologies | Custom Software Development & AI Experts',
  description:
    'Call, email, or schedule a consultation with our US-based software development and AI experts.',
  alternates: {
    canonical: 'https://allsparktechnologies.com/contact/',
  },
  openGraph: {
    title: 'Contact AllSpark Technologies | Custom Software Development & AI Experts',
    description:
      'Call, email, or schedule a consultation with our US-based software development and AI experts.',
    url: 'https://allsparktechnologies.com/contact/',
    images: [
      {
        url: 'https://allsparktechnologies.com/assets/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AllSpark Contact Page',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const contactpage = () => {
  return (
    <>
      
      <Topnav />
      <Navbar2 />
      <HeroSection
        title="Contact Us"
        backgroundImage="breadcrum.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
     
      <Contact />
      <Footer2 />
      {/* <BottomFooter /> */}
    </>
  );
};

export default contactpage;
