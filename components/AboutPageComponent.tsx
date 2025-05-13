import React from "react";
import Image from "next/image";
export default function AboutPageComponent() {
  return (
    <section className="py-10 md:py-16  lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 2-column grid: images left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column (Images) */}
          <div className="relative">
            {/* Background Shape (Positioned behind other images) */}
            <img
              src="/images/shape.png"
              alt="Decorative shape"
              className="absolute top-0 right-20 w-[25%] -z-1"
              /* Adjust w-[50%], top, left to position as desired */
            />

            {/* Main Image (people in a meeting) */}
            <img
              src="/images/office.png"
              alt="Team Meeting"
              className="w-2/3 h-auto z-10"
              style={{ zIndex: 10 }}
            />

            {/* Second Image (VR headset), absolutely positioned below/overlap */}
            <div className="absolute bottom-0 right-32 border-4 shadow-md border-white transform translate-y-1/4">
              <img
                src="/images/vr2.png"
                alt="VR Headset"
                className="w-48 h-auto "
              />
            </div>

            {/* "10 Years of Experience" Badge */}
            <div className="flex gap-2 absolute bottom-[-2.5rem] left-4 bg-blue-600 text-white py-3 px-5">
              <Image
                src="/images/layer_4.svg"
                alt="Clock Icon"
                width={30}
                height={30}
              />
              <div>
                <p className="text-base font-bold">
                  10 <span className="text-[10px] font-normal">Years</span>
                </p>
                <p className="text-[10px] font-medium">Of Experience</p>
              </div>
            </div>
          </div>

          {/* Right Column (Text Content) */}
          <div>
            {/* Subheading */}
            <p className="text-blue-600 mt-5 font-medium mb-2">About AISpark</p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
              We are increasing business <br />
              Success with <span className="text-blue-600">Technology</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 mb-6 text-base">
              Back in 2010, a group of forward-thinking software engineers and
              technology enthusiasts came together to tackle one of the biggest
              challenges in the industry: How can businesses truly leverage
              technology to scale, automate, and grow?
            </p>

            <p className="text-gray-600 mb-6 text-base">
              What started as a passion driven initiative quickly turned into a
              full-scale tech powerhouse. We worked on cutting-edge research,
              large-scale cloud infrastructure, and custom built enterprise
              solutions helping businesses unlock unparalleled efficiency, cost
              savings, and revenue growth.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
