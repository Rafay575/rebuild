"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import PhoneField from "./PhoneField";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion"; // Import Framer Motion

export default function Contact() {
  const handleSelect = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <>
      <motion.section
        className="max-w-7xl mx-auto px-4 my-8 py-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Grid layout: two columns on md+ screens, one column on smaller screens */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Ready to Get Started</h2>

            <div className="py-12 pb-20 space-y-6">
              {/* Call Us */}
              <motion.div
                className="flex items-center relative group transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-full border-dotted border-2 border-blue-600 relative overflow-hidden group-hover:bg-blue-600 transition-all">
                  <Phone className="text-blue-600 group-hover:text-white transition-all" size={22} />
                  <div className="absolute right-0 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all w-0" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-sm">+1 (762) 777-7275</p>
                </div>
              </motion.div>

              {/* Get a Quote */}
              <motion.div
                className="flex items-center relative group transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-full border-dotted border-2 border-blue-600 relative overflow-hidden group-hover:bg-blue-600 transition-all">
                  <Mail className="text-blue-600 group-hover:text-white transition-all" size={22} />
                  <div className="absolute right-0 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all w-0" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Get a Quote</h3>
                  <p className="text-sm">info@allsparktechnologies.com</p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-center relative group transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mr-3 flex h-14 w-14 items-center justify-center rounded-full border-dotted border-2 border-blue-600 relative overflow-hidden group-hover:bg-blue-600 transition-all">
                  <MapPin className="text-blue-600 group-hover:text-white transition-all" size={22} />
                  <div className="absolute right-0 h-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-all w-0" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-sm">638 Knollwood Road Franklin Lakes NJ 07417.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="info@example.com"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Row 2: Phone, Message */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                  <PhoneField label="Your Phone*" name="phone" placeholder="+1 234 567 890" />
                </div>
                <div className="md:col-span-1">
                  <Dropdown label="Choose a fruit" items={["Apple", "Banana", "Cherry", "Date", "Elderberry"]} />
                </div>
                <div className="col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Describe your project
                  </label>
                  <textarea
                    rows={8}
                    id="message"
                    name="message"
                    placeholder="Describe your project"
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="rounded-full bg-blue-600 px-6 py-2 text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Google Map */}
      <motion.div
        className="w-full overflow-hidden rounded-md shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0547481808397!2d-74.21168508465166!3d40.9836217793026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3058162f405f5%3A0xf322bc57cf73e57c!2s638%20Knollwood%20Rd%2C%20Franklin%20Lakes%2C%20NJ%2007417%2C%20USA!5e0!3m2!1sen!2s!4v1678102241616!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </>
  );
}
