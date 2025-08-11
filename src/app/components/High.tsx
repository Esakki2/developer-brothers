'use client';

import React from "react";
import { GlowingEffectDemoSecond } from "./Highlights";
import ScrollingBanner from "./ScrollingBanner";

const Highlights: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        background: "#000",
        color: "#fff",
        padding: "2rem 0",
        margin: "0 calc(50% - 50vw)", // full-bleed background
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
        <GlowingEffectDemoSecond />
      </div>
      <div className="max-w-6xl mx-auto mt-8 mb-12">
        <ScrollingBanner />
      </div>
    </div>
  );
};

export default Highlights;
