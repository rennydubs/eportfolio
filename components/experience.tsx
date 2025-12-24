"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { FadeIn } from "@/components/ui/fade-in";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Hydration fix - only render timeline after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <FadeIn>
        <SectionHeading>My experience</SectionHeading>
        {isMounted && (
          <VerticalTimeline lineColor="">
            {experiencesData.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: "rgba(255, 255, 255, 0.05)",
                    boxShadow: "none",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    background: "rgba(255, 255, 255, 0.15)",
                    fontSize: "1.5rem",
                  }}
                  dateClassName="text-white/70"
                >
                  <h3 className="font-semibold capitalize text-white">{item.title}</h3>
                  <p className="font-normal !mt-0 text-white/80">{item.location}</p>
                  <p className="!mt-1 !font-normal text-white/70">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        )}
      </FadeIn>
    </section>
  );
}

