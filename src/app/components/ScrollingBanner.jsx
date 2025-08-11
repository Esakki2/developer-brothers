"use client";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function ScrollingBanner() {
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-none bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm shadow-lg overflow-hidden py-4 border-y border-cyan-500/30">
      <VelocityScroll
        defaultVelocity={1}
        numRows={1}
        className="text-white text-3xl font-extrabold whitespace-nowrap w-full"
        aria-label="Scrolling text: Plan. Code. Deploy. Repeat."
      >
        {"Plan. Code. Deploy. Repeat. ".repeat(13)}
      </VelocityScroll>
    </div>
  );
}
