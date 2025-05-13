// components/HeroSection.tsx
import React from 'react';
import Link from 'next/link';

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
  breadcrumbs = [],
  overlayColor = 'bg-blue-900/50', // Semi-transparent overlay by default
  heightClass = 'h-96', // Default height
}) => {
  return (
    <section className={`relative w-full ${heightClass} bg-cover bg-center`} 
      style={{ backgroundImage: `url('images/breadcrum.png')` }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor}`} />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h1>

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-sm md:text-base">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <li key={crumb.label} className="inline-flex items-center">
                    {!isLast ? (
                      <>
                        <Link href={crumb.href}>
                          {crumb.label}
                        </Link>
                        <span className="mx-1">/</span>
                      </>
                    ) : (
                      <span>{crumb.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
