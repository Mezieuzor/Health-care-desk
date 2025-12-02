import React from "react";
import Image from "next/image";
import background from "@/public/006.jpg";
import img1 from "@/public/001.png";

export default function CharitableInitiatives() {
  const initiatives = [
    { name: "Prostate Cancer Foundation", logo: img1 },
    { name: "American Tinnitus Association", logo: "/002.png" },
    { name: "U.S. Pain Foundation", logo: "/003.png" },
    { name: "American Diabetes Association", logo: "/004.png" },
    { name: "American Heart Association", logo: "/005.png" },
  ];

  return (
    <section
      className="py-16 md:py-20 relative"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blue Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(125,185,222,0.8) 0%, rgba(74,144,184,0.8) 100%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Charitable Initiatives
        </h2>

        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Health Care Desk Gives Back
        </h3>

        <p className="text-white text-lg max-w-3xl mx-auto opacity-90">
          At Health Care Desk, a portion of our profits are committed to 
          supporting charities and global health research initiatives.
        </p>

        {/* Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 mt-10">
          {initiatives.map((initiative, i) => (
            <Image
              key={i}
              src={initiative.logo}
              alt={initiative.name}
              width={180}
              height={70}
              className="object-contain opacity-90"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
