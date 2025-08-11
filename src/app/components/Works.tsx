'use client';

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import { SkillsMarquee } from "@/components/ui/logo";
import ScrollingBanner from "./ScrollingBanner";



const projectItems = [
  {
    name: "KreezoWheels",
    url: "https://kreezowheels.com",
    imageSrc: "/kreezo.png", // optional

  },
  {
    name: "BMShineHub",
    url: "https://bmshinehub.com",
    imageSrc: "./bmshine.png", // optional

  },
];

export default function Works() {
  return (
    <section id="works" className="min-h-screen w-full bg-black flex flex-col items-center py-24">
      <div className="container-custom">
        {/* Works Section */}
        <div className="w-full max-w-4xl mx-auto mb-24">
          <h1 className="font-sans text-5xl font-bold tracking-tight text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text animate-gradient">
            Our Works
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectItems.map(({ name, url, imageSrc }) => (
              <div 
                key={name}
                className="bg-black/40 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">
                    {name}
                  </h3>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-cyan-400" />
                  </a>
                </div>
                
                <LinkPreview
                  url={url}
                  imageSrc={imageSrc}
                  isStatic
                  className="w-full h-48 rounded-lg overflow-hidden relative block"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">Visit Website</span>
                  </div>
                </LinkPreview>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="font-sans text-5xl font-bold tracking-tight text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text animate-gradient">
            Our Skills
          </h1>
          
          <div className="mb-16">
            <SkillsMarquee/>
          </div>
          
          <div className="max-w-6xl mx-auto mt-8 mb-12">
            <ScrollingBanner />
          </div>
        </div>
      </div>
    </section>
  );
}
