"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  label,
  hook,
  bullets,
  proofLinks,
  tech,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(120, 119, 198, 0.15),
      transparent 40%
    )
  `;

  // Get primary link for title
  const primaryLink = proofLinks.live || proofLinks.github || proofLinks.caseStudy;

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
        className="relative max-w-[42rem] border border-white/20 shadow-2xl rounded-xl overflow-hidden sm:pr-8 sm:min-h-[20rem] transition-all duration-300 sm:group-even:pl-8 bg-slate-950/60 backdrop-blur-xl"
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

        <div className="relative z-10 pt-4 pb-5 px-5 sm:pl-10 sm:pr-2 sm:pt-8 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">

          {/* Label */}
          {label && (
            <span className="inline-block w-fit mb-2 px-2.5 py-1 text-[0.65rem] uppercase tracking-wider font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full">
              {label}
            </span>
          )}

          {/* Title */}
          <h3 className="text-2xl font-semibold text-white">
            {primaryLink ? (
              <Link href={primaryLink} target="_blank" className="hover:underline hover:text-indigo-300 transition-colors">
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>

          {/* Hook line */}
          <p className="mt-1.5 text-sm text-white/70 italic">
            {hook}
          </p>

          {/* Problem / Solution / Result bullets */}
          <ul className="mt-3 space-y-1.5 text-[0.875rem] text-slate-100">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-semibold text-white/90 shrink-0">{bullet.label}:</span>
                <span>{bullet.text}</span>
              </li>
            ))}
          </ul>

          {/* Proof links row */}
          <div className="flex gap-3 mt-4 text-xs">
            {proofLinks.live && (
              <Link href={proofLinks.live} target="_blank" className="px-2.5 py-1 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 rounded-md hover:bg-indigo-500/30 transition">
                Live ↗
              </Link>
            )}
            {proofLinks.github && (
              <Link href={proofLinks.github} target="_blank" className="px-2.5 py-1 bg-white/10 border border-white/10 text-white/80 rounded-md hover:bg-white/20 transition">
                GitHub ↗
              </Link>
            )}
            {proofLinks.caseStudy && (
              <Link href={proofLinks.caseStudy} target="_blank" className="px-2.5 py-1 bg-white/10 border border-white/10 text-white/80 rounded-md hover:bg-white/20 transition">
                Case Study ↗
              </Link>
            )}
          </div>

          {/* Tech chips (max 4 visible) */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.slice(0, 4).map((t, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur-sm px-2.5 py-1 text-[0.7rem] uppercase tracking-wider text-white/80 rounded-full border border-white/5"
              >
                {t}
              </span>
            ))}
            {tech.length > 4 && (
              <span className="px-2.5 py-1 text-[0.7rem] text-white/50">
                +{tech.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Image */}
        {primaryLink ? (
          <Link href={primaryLink} target="_blank">
            <Image
              src={imageUrl}
              alt={title}
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
            alt={title}
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
