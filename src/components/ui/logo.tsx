"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const skills = [
  { name: "Tailwind CSS", img: "/ts.svg" },
  { name: "SASS", img: "/saas.svg" },
  { name: "LESS", img: "/Less.js.svg" },
  { name: "Bootstrap", img: "/Bootstrap.svg" },
  { name: "Redux", img: "/Redux.svg" },
  { name: "Node.js", img: "/Node.js.svg" },
  { name: "Ant Design", img: "/Ant Design.svg" },
  { name: "Material UI", img: "/Material UI.svg" },
  { name: "PNPM", img: "/pnpm.svg" },
  { name: "GSAP", img: "/gsap.svg" },
  { name: "Supabase", img: "/supabase.svg" },
  { name: "SQL", img: "/sql.svg" },
];

const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
const secondRow = skills.slice(Math.ceil(skills.length / 2));

const SkillCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div
      className={cn(
        "relative h-28 w-28 cursor-pointer overflow-hidden rounded-2xl border flex flex-col items-center justify-center gap-3 shadow-md",
        // light
        "border-gray-950/[.1] bg-gray-950/[.02] hover:bg-gray-950/[.08]",
        // dark
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.08] dark:hover:bg-gray-50/[.15] transition-all duration-300 ease-out hover:scale-105"
      )}
    >
      <img src={img} alt={name} className="w-12 h-12 object-contain" />
      <span className="text-white text-sm font-medium text-center px-1">
        {name}
      </span>
    </div>
  );
};

export function SkillsMarquee() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-24">
      <Marquee pauseOnHover className="[--duration:18s]"> {/* faster */}
        {firstRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:18s]">
        {secondRow.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      {/* Fading edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black"></div>
    </section>
  );
}
