import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
   <section className="relative bg-blue-600 overflow-x-hidden py-28 text-white">
      <div className="mx-auto max-w-7xl flex flex-col-reverse justify-between gap-10 px-3 lg:px-6 lg:flex-row">
        <div className="relative flex w-full mx-auto max-w-lg">
          <div className="relative w-full overflow-hidden rounded-xl">
            <Image
              alt="AI Technology"
              loading="lazy"
              decoding="async"
              className="rounded-xl object-cover"
              src="/images/aboutThumb1_1.png"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
            <Image
              alt="AI Technology"
              loading="lazy"
              width={500}
              height={400}
              decoding="async"
              className="rounded-xl"
              src="/images/aboutThumb1_1.png"
              style={{ color: "transparent", width: "100%", height: "auto" }}
            />
          </div>

          <div
            className="absolute bottom-[-30px] right-[-30px] w-[175px] h-[150px] sm:bottom-[-35px] sm:right-[-40px] sm:w-[250px] sm:h-[225px]"
          >
            <Image
              alt="Team Collaboration"
              loading="lazy"
              decoding="async"
              className="object-contain"
              src="/images/aboutThumb1_1-sub-section.png"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
          </div>

          <div
            className="absolute top-0 right-0 w-[5em] h-[5em] md:right-[-10px] md:w-24 md:h-24  lg:right-[-10px] lg:w-20 lg:h-20  flex items-center  xl:w-24 xl:h-24  xl:right-[0px]
            justify-center  rounded-full border-2 border-white text-white text-xs uppercase tracking-wide  animate-spin"
            style={{ animationDuration: "4s" }}
          >
            <img
              alt="Team Collaboration"
              loading="lazy"
              decoding="async"
              className="object-contain"
              src="/images/aboutShape2.png"
              style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
            />
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto lg:text-left">
          
  <div className="mb-2 flex items-center space-x-4 text-sm font-semibold uppercase tracking-wide text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>ABOUT COMPANY</span>
            <ArrowRight className="h-4 w-4" />
          </div>
          <h1 className="text-4xl font-bold !leading-normal sm:text-4xl">
            Innovating the Future with AI &amp; Technology
          </h1>

          <p className="mt-4 text-base text-white/80">
            <span className="mb-5 block">
              At All Spark Technologies, we believe in the power of technology to transform ideas into reality. Established in the heart of the USA, our software house is a hub of innovation, creativity, and cutting-edge solutions designed to push boundaries and redefine possibilities.
            </span>
            <span className="mt-5 block">
              Driven by passion and expertise, our team of skilled developers, engineers, and AI specialists work collaboratively to create intelligent, user-centric solutions that shape the future of technology.
            </span>
          </p>

          <div className="flex flex-wrap lg:flex-nowrap space-x-6 mt-10 gap-6 lg:gap-0 justify-center lg:justify-between">
            <div className="flex items-center space-x-3 bg-[#5666ff] lg:w-1/3 p-2 rounded-lg">
              <div className="bg-white p-3 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lightbulb text-blue-600"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h6 className="text-white font-semibold">Creative</h6>
                <p className="text-white text-xs">Innovation</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-[#5666ff] lg:w-1/3 p-2 rounded-lg">
              <div className="bg-white p-3 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users text-blue-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h6 className="text-white font-semibold">Team </h6>
                <p className="text-white text-xs">Collaboration</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-[#5666ff] lg:w-1/3 p-2 rounded-lg">
              <div className="bg-white p-3 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-globe text-blue-600"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h6 className="text-white font-semibold">Sustainable</h6>
                <p className="text-white text-xs">Growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


