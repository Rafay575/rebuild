import React from "react";
import Image from "next/image";

export default function ServiceCards() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 md:pt-16  lg:pt-20">
      {/* Container with three columns on md+ screens, single column on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className=" border-2 flex  justify-center border-[#E4E9FF] bg-[#F3F6FD] p-6 text-center">
          {/* Icon */}
          <div className="mb-4 mt-2  text-[#1D4ED8]">
            {/* Replace this SVG with your actual icon */}
            <Image src={"/images/Layer_1.svg"} alt="icon 1" width={75} height={75}/>
          </div>
          <div className="flex flex-col text-start items-start ml-3">
            <h5 className="mb-2 text-lg font-semibold text-gray-800">
              Highly Expert Team
            </h5>
            {/* Description */}
            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
Our team of highly skilled professionals brings deep industry knowledge and expertise to provide customized solutions, ensuring top-quality results tailored to your business’s unique needs.
            </p>
            {/* Button */}
            
          </div>
        </div>
        <div className=" border-2 flex  justify-center border-[#E4E9FF] bg-[#F3F6FD] p-6 text-center">
          {/* Icon */}
          <div className="mb-4 mt-2  text-[#1D4ED8]">
            {/* Replace this SVG with your actual icon */}
            <Image src={"/images/Layer_2.svg"} alt="icon 1" width={75} height={75}/>
          </div>
          <div className="flex flex-col text-start items-start ml-3">
            <h5 className="mb-2 text-lg font-semibold text-gray-800">
            24/7 Customer Services
            </h5>
            {/* Description */}
            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
We prioritize customer satisfaction with our round-the-clock support team. Available 24/7, we’re ready to resolve any issues, answer questions, and ensure a seamless experience.
            </p>
            {/* Button */}
            
          </div>
        </div>
        <div className=" border-2 flex  justify-center border-[#E4E9FF] bg-[#F3F6FD] p-6 text-center">
          {/* Icon */}
          <div className="mb-4 mt-2  text-[#1D4ED8]">
            {/* Replace this SVG with your actual icon */}
            <Image src={"/images/Layer_3.svg"} alt="icon 1" width={75} height={75}/>
          </div>
          <div className="flex flex-col text-start items-start ml-3">
            <h5 className="mb-2 text-lg font-semibold text-gray-800">
            Competitive Pricing
            </h5>
            {/* Description */}
            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
We offer competitive pricing designed to fit any budget, without compromising on quality. Our pricing ensures maximum value, making sure you receive the best deal possible.
            </p>
            {/* Button */}
            
          </div>
        </div>

        {/* Card 2 */}
     
      </div>
    </div>
  );
}
