"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Oliver Dubois"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white font-space"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey, I'm Oliver.</span> A{" "}
        <span className="font-bold">Software Engineer</span> graduate from{" "}
        <span className="font-bold">UTS</span>. Building the next generation of{" "}
        <span className="italic text-indigo-300">AI-driven software</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-sm font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group px-5 py-2.5 flex items-center gap-2 rounded-lg outline-none transition-all duration-200 bg-white/5 text-white/90 border border-white/10 hover:bg-white/10 hover:border-white/20"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me
          <BsArrowRight className="text-xs opacity-60 group-hover:translate-x-0.5 transition" />
        </Link>

        <a
          className="group px-5 py-2.5 flex items-center gap-2 rounded-lg outline-none transition-all duration-200 bg-white/5 text-white/90 border border-white/10 hover:bg-white/10 hover:border-white/20"
          href="/OliverDuboisResume.pdf"
          download="OliverDuboisResume.pdf"
        >
          Download Resume
          <HiDownload className="text-xs opacity-60 group-hover:translate-y-0.5 transition" />
        </a>

        <Link
          href="#projects"
          className="group px-5 py-2.5 flex items-center gap-2 rounded-lg outline-none transition-all duration-200 bg-white/5 text-white/90 border border-white/10 hover:bg-white/10 hover:border-white/20"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        >
          View Projects
          <BsArrowRight className="text-xs opacity-60 group-hover:translate-x-0.5 transition" />
        </Link>

        <a
          className="p-2.5 flex items-center rounded-lg transition-all duration-200 bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white/90"
          href="https://www.linkedin.com/in/oliver-dubois/"
          target="_blank"
        >
          <BsLinkedin className="text-base" />
        </a>

        <a
          className="p-2.5 flex items-center rounded-lg transition-all duration-200 bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white/90"
          href="https://github.com/rennydubs"
          target="_blank"
        >
          <FaGithubSquare className="text-base" />
        </a>
      </motion.div>
    </section>
  );
}
