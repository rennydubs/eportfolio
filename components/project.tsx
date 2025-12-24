"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  websiteUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Spotlight effect - using useMotionValue for 60fps performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Create the spotlight gradient template
  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(120, 119, 198, 0.15),
      transparent 40%
    )
  `;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <motion.section
        onMouseMove={handleMouseMove}
        className="relative max-w-[42rem] border border-white/10 rounded-xl overflow-hidden sm:pr-8 sm:min-h-[20rem] transition-all duration-300 sm:group-even:pl-8 bg-white/5 backdrop-blur-md"
        whileHover={{ scale: 1.01 }}
      >
        {/* Spotlight overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: spotlightBackground }}
        />

        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />

        <div className="relative z-10 pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">

          {/* TITLE: Clickable if URL exists */}
          <h3 className="text-2xl font-semibold text-white">
            {websiteUrl ? (
              <Link href={websiteUrl} target="_blank" className="hover:underline hover:text-indigo-300 transition-colors">
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>

          <p className="mt-2 leading-relaxed text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-white/10 backdrop-blur-sm px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white/80 rounded-full border border-white/5"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE: Clickable if URL exists */}
        {websiteUrl ? (
          <Link href={websiteUrl} target="_blank">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="absolute hidden sm:block top-8 -right-40 
              w-[28.25rem] rounded-t-lg shadow-2xl
              transition 
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2
              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2
              group-even:right-[initial] group-even:-left-40"
              style={{
                width: '28.25rem',
                height: '18rem',
                objectFit: 'cover',
                objectPosition: 'left top'
              }}
            />
          </Link>
        ) : (
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 
            w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40"
            style={{
              width: '28.25rem',
              height: '18rem',
              objectFit: 'cover',
              objectPosition: 'left top'
            }}
          />
        )}
      </motion.section>
    </motion.div>
  );
}
