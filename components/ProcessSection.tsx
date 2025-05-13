"use client"; // Required for Next.js App Router

import { PlayCircle } from "lucide-react"; // Lucide icons

export default function ProcessSection() {
  return (
    <section className="relative py-28 mt-10">
      <div className=" ">
        <div className="relative mx-auto max-w-[95%] xl:max-w-6xl">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <video
              src="/images/videos/below_process.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover rounded-xl"
            />

            {false && (
              <button className="absolute inset-0 flex items-center justify-center bg-black/40 transition hover:bg-black/50">
                <PlayCircle className="h-16 w-16 text-white" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-[-250px] bg-[#0E0E47] pt-80 pb-32 text-white">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 px-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "1",
                title: "Planning & Strategy",
                description:
                  "We start by understanding business requirements, defining objectives, and creating a roadmap for the software. This phase includes market research, competitor analysis, and selecting the right tech stack.",
              },
              {
                number: "2",
                title: "Design & Development",
                description:
                  "Our team crafts intuitive UI/UX designs and builds robust, scalable software solutions. Using agile methodologies, we ensure rapid iteration, seamless integrations, and AI-powered automation where applicable.",
              },
              {
                number: "3",
                title: "Testing & Quality Assurance",
                description:
                  "We conduct thorough testing, including functionality, performance, security, and user experience testing. Automated and manual QA ensures that the software meets the highest industry standards before deployment.",
              },
              {
                number: "4",
                title: "Optimization & Support",
                description:
                  "Once the software is deployed, we provide continuous monitoring, maintenance, and performance optimization. We also offer updates, security patches, and feature enhancements for long-term success.",
              },
            ].map((step, index) => (
              <div key={index} className="text-start">
                <h2 className="text-4xl font-bold text-gray-400">
                  {step.number}
                </h2>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-xs !leading-normal text-gray-300 text-justify">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
