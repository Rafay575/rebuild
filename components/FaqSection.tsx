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
     <section className="py-16" id="faq-section">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image Section */}
        <div className="relative w-full max-w-md">
          <div className="relative overflow-hidden rounded-3xl w-full h-auto">
            <img
              alt="Team Working"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover"
              src="/images/aboutThumb1_1-2.png"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
            <img
              alt="Team Working"
              loading="lazy"
              width={400}
              height={400}
              decoding="async"
              data-nimg="1"
              className="rounded-3xl"
              src="/images/aboutThumb1_1-2.png"
              style={{ color: "transparent", width: "100%", height: "auto" }}
            />
          </div>
          <div
            className="absolute bottom-[-30px] right-[-30px] w-0 h-0 sm:bottom-[-35px] sm:right-[-40px] sm:w-[250px] sm:h-[225px]"
          >
            <img
              alt="Team Discussion"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-contain"
              src="/images/aboutThumb1_1-sub-section-2.png"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
          </div>
          <div
             className="absolute top-0 right-0 w-[5em] h-[5em] md:right-[-10px] md:w-16 md:h-16  lg:right-[-10px] lg:w-20 lg:h-20  flex items-center  xl:w-20 xl:h-20  xl:right-[0px]
            justify-center  rounded-full border-2 border-white text-white text-xs uppercase tracking-wide  animate-spin"
            style={{ animationDuration: "4s" }}
          >
            <img
              alt="Explore More"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-contain"
              src="/images/projectShape1.png"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
          </div>
        </div>

       
         <div className="w-full max-w-lg">
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
