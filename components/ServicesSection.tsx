"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react"; // or any icon you prefer

export default function ServicesSection() {
  // Example service data
  const services = [
    {
      id: 1,
      title: "AI & Machine Learning",
      imageUrl: "/images/home_services/ai-machine-learning.webp",
    },
    {
      id: 2,
      title: "Custom Software Development",
      imageUrl: "/images/home_services/custom-software-development.webp",
    },
    {
      id: 3,
      title: "Digital Marketing & SEO",
      imageUrl: "/images/home_services/digital-marketing-seo.webp",  
    },
    {
      id: 4,
      title: "Email Marketing",
      imageUrl: "/images/home_services/email-marketing.webp",
    },
    // Additional Services
    {
      id: 5,
      title: "Web App Development",
      imageUrl: "/images/home_services/web-app-development.webp",
    },
    {
      id: 6,
      title: "Cloud & DevOps Solutions",
      imageUrl: "/images/home_services/dev-ops.webp",
    },
    {
      id: 7,
      title: "Customer Support",
      imageUrl: "/images/home_services/f3.jpg",
    },
    {
      id: 8,
      title: "Live Chat Support",
      imageUrl: "/images/home_services/f1.jpg",
    },
    {
      id: 9,
      title: "UX/UI Design",
      imageUrl: "/images/home_services/ui-ux-design.webp",
    },
    {
      id: 10,
      title: "Ecommerce Development",
      imageUrl: "/images/home_services/ecommerce-development.webp",
    },
  ];

  // State to toggle showing more services
  const [showMore, setShowMore] = useState(false);

  // Show first 4 by default, show all if 'showMore' is true
  const displayedServices = showMore ? services : services.slice(0, 10);

  // Basic animation variants for each card
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    hover: { y: -10 }, // Moves card up on hover
  };

  // Animation variants for the entire section
  // It will slide up and fade in once it enters the viewport
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.section
      // Animate from "hidden" to "show" once in the viewport
      initial="hidden"
      whileInView="show"
      // Ensures it only plays once; remove `once: true` to animate each time it appears
      viewport={{ once: true }}
      variants={sectionVariants}
      className="max-w-7xl mx-auto px-4 py-10"
    >
      <div className="mx-auto max-w-7xl  text-start">
        {/* Title Section */}
        {/* <div className="flex items-center justify-start space-x-3">
       
             <span className="text-[#1D4ED8] font-semibold uppercase text-sm">← Our Services →</span>
        </div> */}
         <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
            <ArrowLeft className="h-4 w-4" />
            <span>Our Services</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        <div className="relative">
          <h2 className="mt-3 text-4xl font-semibold text-gray-900">
            What We Do Best
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <AnimatePresence>
          {displayedServices.map((service) => (
            <motion.div
              key={service.id}
              // Card fade/slide animation
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              transition={{ duration: 0.3 }}
              className="relative rounded-lg overflow-hidden shadow-md cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="h-72 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${service.imageUrl})`,
                }}
              ></div>

              {/* Overlay Text */}
              <div className="absolute top-0 left-0 w-full h-full flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-lg font-semibold">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Button to toggle more services */}
      {/* <div className="mt-6 flex justify-center">
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="flex items-center space-x-2 text-lg font-semibold px-6 py-2 bg-[#F2F2F2] rounded-md hover:bg-[#e8e8e8] transition-colors"
        >
          <span>{showMore ? "Show Less Services" : "View More Services"}</span>
          <motion.span
            animate={{ rotate: showMore ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.span>
        </button>
      </div> */}
    </motion.section>
  );
}
