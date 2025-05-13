// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import { ChevronsRight } from "lucide-react";
import { MapPin, Mail, Phone, Facebook, Instagram} from 'lucide-react';
export default function Footer2() {
  return (
    <>
    <footer className="bg-[#0D0B52] text-white">
      {/* Top Bar */}
     
      <div className=" py-8">
      <div className="mx-auto max-w-7xl px-4">
        {/* Main container with bright background */}
        <div className="flex flex-col items-center justify-between rounded-xl bg-[#2B4EFF] px-6 py-10 shadow-md md:flex-row">
          
          {/* Address */}
          <div className="mb-6 flex w-full flex-col items-center text-center md:mb-0 md:w-auto md:flex-row md:items-center md:space-x-3 md:text-left">
            {/* Icon Circle */}
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#191B4E] border-dotted border-[#191B4E]  border-2 md:mb-0">
              <MapPin size={20} />
            </div>
            {/* Text */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide">Address</h3>
              <p className="text-sm">4648 Rocky Road Philadelphia PA</p>
            </div>
          </div>

          {/* Vertical divider (visible on md+ screens) */}
          <div className="hidden h-16 w-px bg-gray-300 opacity-25 md:block" />

          {/* SendEmail */}
          <div className="mb-6 flex w-full flex-col items-center text-center md:mb-0 md:w-auto md:flex-row md:items-center md:space-x-3 md:text-left">
            {/* Icon Circle */}
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#191B4E] border-dotted border-[#191B4E] border-2 md:mb-0">
              <Mail size={20} />
            </div>
            {/* Text */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide">SendEmail</h3>
              <p className="text-sm">info@example.com</p>
            </div>
          </div>

          {/* Vertical divider (visible on md+ screens) */}
          <div className="hidden h-16 w-px bg-gray-300 opacity-25 md:block" />

          {/* CallEmergency */}
          <div className="flex w-full flex-col items-center text-center md:w-auto md:flex-row md:items-center md:space-x-3 md:text-left">
            {/* Icon Circle */}
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#191B4E] border-dotted border-[#191B4E]  border-2 md:mb-0">
              <Phone size={20} />
            </div>
            {/* Text */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide">Call Now</h3>
              <p className="text-sm">+88 0123 654 99</p>
            </div>
          </div>

        </div>
      </div>
    </div>


      {/* Bottom Section */}
     <div className="max-w-7xl pb-8 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/footer-logo.svg"
              alt="AllSpark Logo"
              width={150}
              height={50}
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              AllSpark Technologies is dedicated to delivering innovative tech
              solutions, focusing on modern web and mobile applications to help
              businesses thrive in a digital-first world.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
              >
                <Facebook className="h-4 w-4"/>
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
            
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              {[
                "About Us",  
                "FAQ'S",
                "Contact Us",
             
              ].map((link, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ChevronsRight className="h-4 w-4 text-white" />
                  <a href="#" className="hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-4 text-sm">
              {[
               
                "Custom Software Development",
"Web & App Development",
"AI & Machine Learning",
"Digital Marketing & SEO"

              ].map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ChevronsRight className="h-4 w-4 text-white" />
                  <a href="#" className="hover:text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className=" text-end">
            <div className="w-fit space-y-6">
              <h3 className="text-lg text-left font-semibold text-white">
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span>info@allsparktech.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>+208-7869-0113</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-gray-400" />
                  <span className="text-start">638 KNOLLWOOD ROAD FRANKLIN LAKES, NJ, 07417</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </footer>
      <div className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-white text-sm">
          <p>
            © All Copyright {new Date().getFullYear()} by AllSpark Technologies
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>

  );
}
