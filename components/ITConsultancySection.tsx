"use client";
import React, { useState, useEffect } from "react";
import { ChevronsRight } from "lucide-react";

// Simulated dynamic data (you’d normally fetch this from an API)
const mockData = {
  heading: "IT Consultancy",
  paragraphs: [
    `This ipsum dolor sit amet consectetur adipiscing elit. Fusce et eleifend
    porta arcu in hac habitasse platea thelorem turpis dictum. In iaculis
    libero faucibus malesuada sagittis placerat eros sed tincidunt augue ac
    ante rutrum sed Is sodales augue consectetur.`,

    `This ipsum dolor sit amet consectetur adipiscing elit. Fusce et eleifend
    porta arcu in hac habitasse platea thelorem turpis dictum. In iaculis
    libero faucibus malesuada sagittis placerat eros sed tincidunt augue ac
    ante rutrum sed Is sodales augue consectetur.`
  ],

  topImage: { src: "/images/ai.webp", alt: "VR person" },

  benefitsHeading: "Benefits With Our Service",
  benefitsIntro: `Fusce et eleifend porta arcu in hac habitasse platea thelorem turpis
  dictum. In iaculis libero.`,

  benefitsList: [
    "Branding and design Identity",
    "Branding and design Identity",
    "Branding and design Identity",
  ],

  benefitImage: { src: "/images/vr1.png", alt: "Second VR" },

  extraText: `Fusce et eleifend porta arcu in hac habitasse platea thelorem turpis
  dictum. In iaculis libero. Fusce et eleifend porta arcu in hac habitasse platea thelorem turpis
  dictum. In iaculis libero. Fusce et eleifend porta arcu in hac habitasse platea thelorem turpis
  dictum. In iaculis libero. Fusce et eleifend porta arcu in hac habitasse platea thelorem turpis
  dictum. In iaculis libero.`,

  twoImages: [
    { src: "/images/vr1.png", alt: "Second VR 1" },
    { src: "/images/vr1.png", alt: "Second VR 2" },
  ],

  faqHeading: "Most Comment Question?",
  faqIntro: `This is ipsum dolor sit amet consectetur adipiscing elit. Fusce et
  eleifend porta arcu in hac habitasse platea thelorem turpis dictum. In
  iaculis libero faucibus malesuada sagittis placerat eros sed tincidunt
  augue ac ante rutrum sed Is sodales augue consequat.`,

  faqs: [
    {
      question: "Where Should I Incorporate My Business?",
      answer:
        "This is ipsum dolor sit amet consectetur adipiscing elit. Fusce et eleifend porta arcu in hac habitasse platea thelorem turpis dictum.",
    },
    {
      question: "How Do I Register a Trademark?",
      answer:
        "This is ipsum dolor sit amet consectetur adipiscing elit. Fusce et eleifend porta arcu in hac habitasse platea thelorem turpis dictum.",
    },
    {
      question: "What Is the Best Way to Handle Partnerships?",
      answer:
        "This is ipsum dolor sit amet consectetur adipiscing elit. Fusce et eleifend porta arcu in hac habitasse platea thelorem turpis dictum.",
    },
    {
      question: "When Should I Hire a CPA?",
      answer:
        "This is ipsum dolor sit amet consectetur adipiscing elit. Fusce et eleifend porta arcu in hac habitasse platea thelorem turpis dictum.",
    },
  ],
};

export default function ITConsultancySection() {
  // Simulate loading data from an API
  const [data, setData] = useState<typeof mockData | null>(null);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState<number>(-1);

  // Mock "fetch" that finishes in 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Toggle open/close logic for FAQs
  const handleClick = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  // If still loading, show skeleton
  if (loading) {
    return <ITConsultancySkeleton />;
  }

  // If data is loaded, render the content
  if (!data) return null;

  return (
    <section className="bg-white">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Image */}
        <div className="w-full rounded-lg overflow-hidden mb-6">
          <img
            src={data.topImage.src}
            alt={data.topImage.alt}
            className="mx-auto h-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {data.heading}
        </h2>

        {/* Paragraphs */}
        {data.paragraphs.map((para, idx) => (
          <p
            key={idx}
            className="text-gray-600 text-sm leading-relaxed mb-4"
          >
            {para}
          </p>
        ))}

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src={data.benefitImage.src}
              alt={data.benefitImage.alt}
              className="rounded-xl h-auto object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="col-span-2">
            <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-4">
              {data.benefitsHeading}
            </h3>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              {data.benefitsIntro}
            </p>
            <ul className="list-disc text-sm list-inside space-y-2 text-gray-600 mb-4">
              {data.benefitsList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-gray-600 text-xs my-3 leading-relaxed">
          {data.extraText}
        </p>

        {/* 2-Image Grid */}
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-8 items-center">
          {data.twoImages.map((imgObj, i) => (
            <div key={i} className="w-full rounded-lg overflow-hidden">
              <img
                src={imgObj.src}
                alt={imgObj.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-7xl py-10 mx-auto px-4">
        <h2 className="text-2xl text-gray-800 font-bold mb-2">
          {data.faqHeading}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {data.faqIntro}
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {data.faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className="bg-white shadow-md px-4 py-3 cursor-pointer"
                onClick={() => handleClick(index)}
              >
                {/* Header row: question + arrow */}
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-sm font-medium transition-colors ${
                      isOpen ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <ChevronsRight
                    className={`h-5 w-5 transition-transform ease-in-out duration-700 ${
                      isOpen ? "text-blue-600 rotate-90" : "text-gray-400"
                    }`}
                  />
                </div>

                {/* Smoothly expanding/collapsing content */}
                <div
                  className={`mt-2 overflow-hidden transition-all ease-in-out duration-700 ${
                    isOpen && faq.answer ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Skeleton component shown while data is “loading.” */
function ITConsultancySkeleton() {
  return (
    <section className="bg-white animate-pulse">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top image placeholder */}
        <div className="w-full rounded-lg overflow-hidden mb-6 bg-gray-200 h-64" />

        {/* Heading placeholder */}
        <div className="h-6 bg-gray-200 w-1/3 mb-4 rounded" />

        {/* Paragraph placeholders */}
        <div className="h-4 bg-gray-200 w-5/6 mb-2 rounded" />
        <div className="h-4 bg-gray-200 w-4/6 mb-4 rounded" />

        {/* Benefits Section placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="w-full rounded-lg overflow-hidden bg-gray-200 h-40" />
          <div className="col-span-2 space-y-3">
            <div className="h-5 bg-gray-200 w-1/2 rounded" />
            <div className="h-4 bg-gray-200 w-2/3 rounded" />
            <div className="h-4 bg-gray-200 w-1/2 rounded" />
          </div>
        </div>

        <div className="h-3 bg-gray-200 w-full my-3 rounded" />

        {/* 2-Image Grid placeholders */}
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-8 items-center">
          <div className="w-full rounded-lg overflow-hidden bg-gray-200 h-36" />
          <div className="w-full rounded-lg overflow-hidden bg-gray-200 h-36" />
        </div>
      </div>

      <div className="max-w-7xl py-10 mx-auto px-4">
        {/* FAQ heading placeholders */}
        <div className="h-6 bg-gray-200 w-1/4 mb-4 rounded" />
        <div className="h-4 bg-gray-200 w-1/2 mb-6 rounded" />

        {/* FAQ items placeholders (repeat as needed) */}
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white shadow-md px-4 py-3 mb-4">
            <div className="h-4 bg-gray-200 w-2/3 rounded mb-2" />
            <div className="h-3 bg-gray-200 w-full rounded" />
          </div>
        ))}
      </div>
    </section>
  );
}
