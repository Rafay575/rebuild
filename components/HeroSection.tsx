// components/HeroSection.tsx
"use client";
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface HeroSectionProps {
  /** The main heading text, e.g. "Contact Us" */
  title: string;
  /** URL or path to the background image, e.g. "/images/contact-bg.jpg" */
  backgroundImage: string;
  /** Array of breadcrumb items to display, e.g. [{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact" }] */
  breadcrumbs?: BreadcrumbItem[];
  /** Optional overlay color (Tailwind class) */
  overlayColor?: string;
  /** Optional height of the hero section (Tailwind class) */
  heightClass?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  backgroundImage,

  overlayColor = 'bg-blue-900/50', // Semi-transparent overlay by default
  heightClass = 'h-96', // Default height
}) => {
  return (
    <section className={`relative w-full ${heightClass} bg-cover bg-center`} 
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor}`} />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h1>

        {/* Breadcrumbs */}
       
      </div>
    </section>
  );
};

export default HeroSection;
