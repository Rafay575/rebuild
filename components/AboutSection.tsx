"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative bg-blue-600 overflow-x-hidden py-28 text-white">
      <div className="mx-auto max-w-7xl flex flex-col-reverse justify-between gap-10 px-6 xl:flex-row">
        {/* Left Side - Images */}
        <div className="relative flex w-full">
          {/* Main Image */}
          <div className="relative w-full overflow-hidden rounded-xl">
            <Image
              src="/images/aboutThumb1_1.png"
              alt="AI Technology"
              layout="responsive" // This makes the image responsive
              width={500}
              height={400}
              className="rounded-xl max-w-full h-auto" // Ensures the image is responsive
            />
          </div>

          <div className="absolute bottom-[-30px] right-[-20px]">
            <Image
              src="/images/aboutThumb1_1-sub-section.png"
              alt="Team Collaboration"
              layout="intrinsic" // Keeps the aspect ratio while being responsive
              width={800} // Set a larger base width for better scaling
              height={700} // Set corresponding height for aspect ratio
              className="w-full max-w-4xl h-auto" // Adjust the max-width to control size and make it responsive
            />
          </div>

          <div
            className="absolute -top-2 animate-spin transition-all duration-2000 -right-2 flex items-center justify-center w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-32 xl:h-32 rounded-full border-2 border-white text-white text-xs uppercase tracking-wide"
            style={{ animationDuration: "4s" }}
          >
            <Image
              src="/images/aboutShape2.png"
              alt="Team Collaboration"
              layout="intrinsic" // Ensures the aspect ratio is preserved while being responsive
              width={550} // Set a larger base width for better scaling
              height={550} // Set corresponding height for aspect ratio
              className="w-full max-w-3xl h-auto" // Make the image responsive within the max-width limit
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full  text-center md:text-left">
          <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>ABOUT COMPANY</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold !leading-normal sm:text-4xl lg:text-5xl">
            Innovating the Future with AI & Technology
          </h1>

          {/* Description */}
          <p className="mt-4 text-base text-white/80">
            At All Spark Technologies, we believe in the power of technology to
            transform ideas into reality. Established in the heart of the USA,
            our software house is a hub of innovation, creativity, and
            cutting-edge solutions designed to push boundaries and redefine
            possibilities.
          </p>

          <p className="mt-4 text-base text-white/80">
            Driven by passion and expertise, our team of skilled developers,
            engineers, and AI specialists work collaboratively to create
            intelligent, user-centric solutions that shape the future of
            technology.
          </p>

          {/* Service Badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
            <div className="flex items-center text-sm space-x-2 rounded-lg bg-white/10 px-2 pr-4 py-2 text-white">
              <div className="relative h-full w-10 flex justify-center items-center rounded-md bg-white ">
                <Image
                  src={"/images/aboutIcon1_1 (1).svg"}
                  alt="Product Design"
                  width={30}
                  height={30}
                />
              </div>
              <span>
                Creative <br />
                Innovation
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm rounded-lg bg-white/10 px-2 pr-4 py-2 text-white">
              <div className="relative h-full w-10 flex justify-center items-center rounded-md bg-white ">
                <Image
                  src={"/images/aboutIcon1_1 (1).svg"}
                  alt="Product Design"
                  width={30}
                  height={30}
                />
              </div>
              <span>
                Team <br />
                Collaboration
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm rounded-lg bg-white/10 px-2 pr-4 py-2 text-white">
              <div className="relative h-full w-10 flex justify-center items-center rounded-md bg-white ">
                <Image
                  src={"/images/aboutIcon1_1 (1).svg"}
                  alt="Product Design"
                  width={30}
                  height={30}
                />
              </div>
              <span>
                Growth <br />
                Sustainable
              </span>
            </div>
          </div>

          {/* Explore More Button */}
        </div>
      </div>
    </section>
  );
}
