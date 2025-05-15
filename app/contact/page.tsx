import React from "react";
import Topnav from "@/components/Topnav";
import Navbar2 from "@/components/Navbar2";
import HeroSection from "@/components/HeroSection";
import Footer2 from "@/components/Footer2";
import  Contact  from "@/components/Contact";
const contactpage = () => {
  return (
    <div>
      <Topnav />
      <Navbar2 />
      <HeroSection
        title="Contact Us"
        backgroundImage="/images/breadcrum.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
     
      <Contact />
      <Footer2 />
      {/* <BottomFooter /> */}
    </div>
  );
};

export default contactpage;
