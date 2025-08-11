'use client';

  import React from "react";
  import { Box, Lock, Search, Settings, Sparkles, Code, Zap, Shield } from "lucide-react";
  import { GlowingEffect } from "@/components/ui/glowing-effect";

  export function GlowingEffectDemoSecond() {
    return (
      <div id="highlights" className="py-10">
        <h1 className="font-sans text-4xl md:text-6xl font-bold tracking-tight text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text animate-gradient">
          Highlights
        </h1>
        <div className="container-custom">
          <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[38rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<Code className="h-5 w-5 text-white" />}
              title="Custom Web Development"
              description="Tailored websites built with cutting-edge technologies to meet your specific business needs."
            />

            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Zap className="h-5 w-5 text-white" />}
              title="Performance Optimization"
              description="Lightning-fast websites optimized for speed, SEO, and exceptional user experience."
            />

            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<Shield className="h-5 w-5 text-white" />}
              title="Secure & Reliable Solutions"
              description="Robust applications with industry-standard security practices to protect your data and users."
            />

            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<Sparkles className="h-5 w-5 text-white" />}
              title="Modern UI/UX Design"
              description="Beautiful, intuitive interfaces that engage users and elevate your brand presence."
            />

            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Settings className="h-5 w-5 text-white" />}
              title="Ongoing Maintenance & Support"
              description="Dedicated technical support and regular updates to keep your digital assets running smoothly."
            />
          </ul>
        </div>
      </div>
    );
  }

  interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  }

  const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
      <li className={`min-h-[16rem] list-none ${area} group`}>
        <div className="relative h-full rounded-2xl border border-cyan-500/30 bg-black/40 p-4 md:rounded-3xl md:p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 hover:border-cyan-500/50 group-hover:transform group-hover:scale-[1.02]">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-black/60 p-6 backdrop-blur-sm">
            <div className="flex flex-1 flex-col justify-between gap-5">
              <div className="w-fit rounded-full border border-cyan-400/50 bg-cyan-500/10 p-3 text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-300">
                {icon}
              </div>
              <div className="space-y-4">
                <h3 className="font-sans text-xl font-semibold tracking-tight text-white md:text-2xl group-hover:text-cyan-400 transition-colors duration-300">
                  {title}
                </h3>
                <p className="font-sans text-sm text-gray-300 md:text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };
