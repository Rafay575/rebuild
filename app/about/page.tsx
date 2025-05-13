"use client";

import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import HeroSection from "@/components/HeroSection";
import Footer2 from "@/components/Footer2";
import BottomFooter from "@/components/BottomFooter";
import ServiceCards from "@/components/ServiceCards";
import AboutPageComponent from "@/components/AboutPageComponent";
import CoreValuesSemiCircle from "@/components/CoreValuesSemiCircle";


const about = () => {
  return (
    <div>
      <Topnav />
      <Navbar2 />
      <HeroSection
        title="About Us"
        backgroundImage="/images/breadcrumb.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/About" },
        ]}
      />
     
     <ServiceCards />
     <AboutPageComponent />
     <CoreValuesSemiCircle />
    
      <Footer2 />
      {/* <BottomFooter /> */}
    </div>
  );
};

export default about;