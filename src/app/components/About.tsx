"use client";
import Image from "next/image";
import ScrollingBanner from "./ScrollingBanner";
import { CometCard } from "@/components/ui/comet-card";

// Define a color filter for the cofounder image (e.g., sepia + hue for a creative effect)
const COFOUNDER_IMAGE_FILTER = "sepia(100%) hue-rotate(120deg)";

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-24 px-6" id="about">
      <div className="max-screen mx-auto -mt-20 mb-16">
        <ScrollingBanner />
      </div>
      <div className="container-custom">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text animate-gradient">
          About Us
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col gap-32">
          {/* Founder Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-16 group">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                Hi, I'm Esakkiappan
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl leading-relaxed">
                A full-stack developer passionate about crafting scalable web solutions using Python, React, HTML, CSS, and JavaScript. I focus on building modern, responsive applications tailored to business growth.
              </p>
              <div className="flex flex-wrap gap-2 md:justify-start justify-center">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">CSS</span>
              </div>
            </div>
            {/* Founder Image in CometCard */}
            <div className="flex-1 flex justify-center items-center">
              <CometCard>
                <button
                  type="button"
                  className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:my-20 md:p-4"
                  aria-label="View invite F7RA"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                    opacity: 1,
                  }}
                >
                  <div className="mx-2 flex-1">
                    <div className="relative mt-2 aspect-[3/4] w-full">
                      <Image
                        src="/found.jpg"
                        alt="Esakkiappan"
                        width={300}
                        height={400}
                        className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                          opacity: 1,
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                    <div className="text-xs">Founder</div>
                    <div className="text-xs text-gray-300 opacity-50">#F7RA</div>
                  </div>
                </button>
              </CometCard>
            </div>
          </div>
          {/* Co-Founder Section (using CometCard and filtered image) */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16 group">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                Hi, I'm Sriram
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl leading-relaxed">
                A frontend developer, video editor, and digital marketing expert. I blend UI/UX design with modern marketing strategies to build impactful and visually engaging experiences.
              </p>
              <div className="flex flex-wrap gap-2 md:justify-start justify-center">
                <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">UI/UX</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">Marketing</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Video Editing</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm">Frontend</span>
              </div>
            </div>
            {/* Co-Founder Image in CometCard with color filter */}
            <div className="flex-1 flex justify-center items-center">
              <CometCard>
                <button
                  type="button"
                  className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:my-20 md:p-4"
                  aria-label="View invite S1CO"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "none",
                    opacity: 1,
                  }}
                >
                  <div className="mx-2 flex-1">
                    <div className="relative mt-2 aspect-[3/4] w-full">
                      <Image
                        src="/cofound.jpg"
                        alt="Sriram Kumar"
                        width={300}
                        height={400}
                        className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover"
                        style={{
                          boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                          opacity: 1,
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                    <div className="text-xs">Co-Founder</div>
                    <div className="text-xs text-gray-300 opacity-50">#S1CO</div>
                  </div>
                </button>
              </CometCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
