"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact, FaPython, FaProjectDiagram, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiCplusplus } from "react-icons/si";
import { GlassCard } from "@/components/ui/glass-card";
import { FadeIn } from "@/components/ui/fade-in";

export default function AboutGrid() {
    const { ref } = useSectionInView("About", 0.3);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    return (
        <section
            ref={ref}
            id="about"
            className="mb-28 max-w-[64rem] scroll-mt-28 px-4"
        >
            <FadeIn>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {/* Card A: About Me Text - Spans 2 columns */}
                    <motion.div variants={fadeInUp} className="md:col-span-2">
                        <GlassCard className="p-6 h-full">
                            <h2 className="text-2xl font-bold mb-4 text-white">
                                About Me
                            </h2>
                            <p className="text-slate-100 leading-relaxed mb-3">
                                I am currently completing my{" "}
                                <span className="font-semibold text-white">
                                    Bachelor of Engineering (Honours)
                                </span>{" "}
                                in Software Engineering at UTS. My passion lies in bridging the gap
                                between complex AI models and user-friendly applications.
                            </p>
                            <p className="text-slate-100 leading-relaxed">
                                I recently led a team to build{" "}
                                <span className="font-semibold text-white">
                                    InnerSystems
                                </span>
                                , an AI platform for tracking team health, using React, Python, and
                                Supabase. My background in operations at{" "}
                                <span className="font-semibold text-white">
                                    Bunnings
                                </span>{" "}
                                taught me how to manage teams and streamline processes, skills I now apply to my
                                engineering leadership.
                            </p>
                        </GlassCard>
                    </motion.div>

                    {/* Card B: Image - cognizant2.jpg */}
                    <motion.div variants={fadeInUp}>
                        <GlassCard className="group aspect-square md:aspect-auto h-full p-0 overflow-hidden">
                            <Image
                                src="/cognizant2.jpg"
                                alt="Oliver at Cognizant event"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                        </GlassCard>
                    </motion.div>

                    {/* Card C: Image - cognizant3.jpeg */}
                    <motion.div variants={fadeInUp}>
                        <GlassCard className="group aspect-square md:aspect-auto h-full p-0 overflow-hidden">
                            <Image
                                src="/cognizant3.jpeg"
                                alt="Oliver at Cognizant"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                        </GlassCard>
                    </motion.div>

                    {/* Card D: Skills/Tech Stack */}
                    <motion.div variants={fadeInUp} className="md:col-span-2">
                        <GlassCard className="p-6 h-full transition-shadow duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                            <div className="flex items-center gap-2 mb-4">
                                <LuGraduationCap className="text-2xl text-white" />
                                <h3 className="text-lg font-bold text-white">
                                    UTS Software Engineering (Honours)
                                </h3>
                            </div>
                            <p className="text-sm text-slate-100 font-medium mb-2">
                                All coursework complete. Graduating May 2026
                            </p>
                            <p className="text-sm text-slate-100 leading-relaxed mb-4 italic">
                                Honours student specialising in Enterprise Software and AI. Awarded High Distinction for Capstone Project 'NLP in Auslan'. Consistently achieved distinction-grade results across core subjects.
                            </p>
                            <p className="text-sm text-emerald-400 font-medium mb-6">
                                Currently seeking graduate software engineering roles.
                            </p>

                            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                                Core Technologies
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/5 text-white">
                                    <SiCplusplus className="text-lg" />
                                    <span className="text-sm font-medium">C++</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/5 text-white">
                                    <FaPython className="text-lg" />
                                    <span className="text-sm font-medium">Python</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/5 text-white">
                                    <FaProjectDiagram className="text-lg" />
                                    <span className="text-sm font-medium">System Design</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/5 text-white">
                                    <FaDatabase className="text-lg" />
                                    <span className="text-sm font-medium">Data Structures</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/5 text-white">
                                    <FaReact className="text-lg" />
                                    <span className="text-sm font-medium">React</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/5 text-white">
                                    <SiTypescript className="text-lg" />
                                    <span className="text-sm font-medium">TypeScript</span>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </motion.div>
            </FadeIn>
        </section>
    );
}

