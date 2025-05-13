"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative bg-blue-600 overflow-x-hidden py-28 text-white">
      <div className="mx-auto max-w-7xl flex flex-col-reverse justify-between gap-10 px-6 lg:flex-row">
        {/* Left Side - Images */}
        <div className="relative flex w-full max-w-lg">
          {/* Main Image */}
          <div className="relative w-full overflow-hidden rounded-xl">
            <Image
              src="/images/aboutThumb1_1.png"
              alt="AI Technology"
              width={500}
              height={400}
              className="rounded-xl"
            />
          </div>
          {/* Overlay Image */}
          <div className="absolute bottom-[-30px] right-[-20px]">
            <Image
              src="/images/aboutThumb1_1-sub-section.png"
              alt="Team Collaboration"
              width={200}
              height={150}
              className=""
            />
          </div>

          {/* Circular Explore More Button */}
          <div
            className="absolute -top-2 animate-spin transition-all duration-2000 -right-2 flex items-center justify-center w-20 h-20 rounded-full border-2 border-white text-white text-xs uppercase tracking-wide"
            style={{ animationDuration: "4s" }}
          >
            <Image
              src="/images/aboutShape2.png"
              alt="Team Collaboration"
              fill
              className=""
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full max-w-lg text-center lg:text-left">
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
