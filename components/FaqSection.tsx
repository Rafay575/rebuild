"use client"; // Required for Next.js App Router

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function FaqSection() {
  return (
    <section className="pb-16 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side - Images */}
        <div className="relative w-full ">
          {/* Main Image */}
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/images/aboutThumb1_1-2.png"
              alt="Team Working"
              layout="responsive" // Makes the image responsive
              width={400} // Set the base width
              height={400} // Set the corresponding height
              className="max-w-full h-auto" 
            />
          </div>

          {/* Overlay Image */}
          <div className="absolute bottom-[-50px] right-[-30px]">
            <Image
              src="/images/aboutThumb1_1-sub-section-2.png"
              alt="Team Discussion"
              layout="intrinsic" // Keeps the aspect ratio while being responsive
              width={200} // Set the base width
              height={150} // Set the corresponding height
              className="max-w-full h-auto" 
            />
          </div>

          <div
            className="absolute -top-2 animate-spin transition-all duration-2000 -right-2 flex items-center justify-center w-20 h-20 md:w-32 md:h-32 lg:w-24 lg:h-24  rounded-full border-2 border-white text-white text-xs uppercase tracking-wide"
            style={{ animationDuration: "4s" }}
          >
            <Image
              src="/images/projectShape1.png"
              alt="Team Collaboration"
              layout="intrinsic" // Ensures the aspect ratio is preserved while being responsive
              width={550} // Set the base width
              height={550} // Set the corresponding height
              className="w-full max-w-3xl h-auto" // Make the image responsive within the max-width limit
            />
          </div>
        </div>

        {/* Right Side - FAQ */}
        <div className="w-full ">
          {/* FAQ Label */}
          <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-[#1D4ED8]">
            <ArrowLeft className="h-4 w-4" />
            <span>FAQ</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold !leading-relaxed text-gray-900">
            Frequently Asked Questions
          </h2>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="mt-6 space-y-3">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What services does your software house offer?
              </AccordionTrigger>
              <AccordionContent>
                We provide custom software development, mobile and web app
                development, AI-powered solutions, UI/UX design, Cloud
                computing, DevOps, and ongoing support for businesses of all
                sizes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How long does it take to develop a software product?
              </AccordionTrigger>
              <AccordionContent>
                The timeline varies based on project complexity. A simple MVP
                may take 3-6 months, while enterprise-level solutions can take
                6-12 months. We follow agile methodologies for faster iteration
                and delivery.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do you offer post-launch support and maintenance?
              </AccordionTrigger>
              <AccordionContent>
                Yes! We provide ongoing maintenance, security updates, bug
                fixes, feature enhancements, and cloud infrastructure support to
                ensure the software runs smoothly after deployment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What industries do you work with?
              </AccordionTrigger>
              <AccordionContent>
                We serve various industries including fintech, healthcare,
                e-commerce, logistics, real estate, education, and enterprise
                SaaS platforms.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
