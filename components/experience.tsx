"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { FadeIn } from "@/components/ui/fade-in";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 max-w-3xl mx-auto px-4">
      <FadeIn>
        <SectionHeading>My experience</SectionHeading>

        {/* Custom grid layout - no container box, just cards on aurora */}
        <div className="grid grid-cols-[24px_1fr] gap-x-5">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              {/* Left rail: line and dot aligned to card header */}
              <div className="relative flex flex-col items-center pt-[22px]">
                {/* Ring dot - filled center with outer ring */}
                <div className="relative z-10">
                  <div className="w-3 h-3 rounded-full bg-white/90 ring-2 ring-white/30 ring-offset-2 ring-offset-transparent" />
                </div>
                {/* Line connecting to next dot */}
                {index < experiencesData.length - 1 && (
                  <div className="w-px flex-1 bg-white/20 mt-3" />
                )}
              </div>

              {/* Right column: card */}
              <div className="pb-6">
                <div className="bg-slate-950/70 border border-white/25 rounded-xl p-5 shadow-lg backdrop-blur-sm">
                  {/* Header row: Title left, Date right */}
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <span className="text-sm text-white/70 whitespace-nowrap font-medium">
                      {item.start} – {item.end}
                    </span>
                  </div>

                  {/* Company and location */}
                  <p className="text-white/80 text-sm mb-3">
                    {item.company}
                    {item.location && <span className="text-white/50"> · {item.location}</span>}
                  </p>

                  {/* Highlights */}
                  <ul className="list-disc ml-4 space-y-1 text-slate-100 text-[0.875rem] leading-relaxed">
                    {item.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* Tech/Skills chips */}
                  {item.tech && item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-white/10 border border-white/10 text-white/80 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
