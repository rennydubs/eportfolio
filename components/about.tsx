"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently completing my <span className="font-medium">Bachelor of Engineering (Honours)</span> in Software Engineering at UTS. My passion lies in bridging the gap between complex AI models and user-friendly applications. I recently led a team to build <span className="font-medium">InnerSystems</span>, an AI platform for tracking team health, using <span className="font-medium">React, Python, and Supabase</span>.
      </p>
      <p>
        My background in operations at <span className="font-medium">Bunnings</span> taught me how to manage teams and streamline processes—skills I now apply to engineering leadership.
      </p>
    </motion.section>
  );
}
