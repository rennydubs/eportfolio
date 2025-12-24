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
        <span className="font-bold">Hello, I'm Oliver.</span> A{" "}
        <span className="font-bold">Software Engineer</span> graduating from{" "}
        <span className="font-bold">UTS</span>. I design and build scalable{" "}
        <span className="italic text-indigo-300">AI-driven platforms</span> and production-grade{" "}
        <span className="font-bold">software solutions</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group relative px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition-all duration-300 overflow-hidden bg-slate-950 text-white border border-slate-800 hover:border-indigo-500/50 hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent bg-[length:200%_100%] animate-shimmer" />
          <span className="relative z-10">Contact me here</span>
          <BsArrowRight className="relative z-10 opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group relative px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition-all duration-300 overflow-hidden bg-slate-950 text-white border border-slate-800 hover:border-purple-500/50 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]"
          href="/CV.pdf"
          download
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent bg-[length:200%_100%] animate-shimmer" />
          <span className="relative z-10">Download my Resume</span>
          <HiDownload className="relative z-10 opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/oliver-dubois/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/rennydubs"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
