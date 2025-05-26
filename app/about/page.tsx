"use client";

import React, { Suspense } from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import HeroSection from "@/components/HeroSection";
import Footer2 from "@/components/Footer2";
import ServiceCards from "@/components/ServiceCards";
import AboutPageComponent from "@/components/AboutPageComponent";  // Ensure this component is CSR-safe
import CoreValuesSemiCircle from "@/components/CoreValuesSemiCircle";


const about = () => {
  return (
    <div>
      <Topnav />
      <Navbar2 />
      <HeroSection
        title="About Us"
        backgroundImage="breadcrum.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/About" },
        ]}
      />
      <ServiceCards />
      
      {/* Wrap AboutPageComponent in Suspense if it uses async hooks */}
      <Suspense fallback={<div>Loading About Page...</div>}>
        <AboutPageComponent />
      </Suspense>

      <CoreValuesSemiCircle />
      <Footer2 />
    </div>
  );
};

export default about;
