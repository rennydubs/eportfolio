"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact, FaPython, FaAws } from "react-icons/fa";
import { SiTypescript, SiSupabase } from "react-icons/si";

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
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
            >
                {/* Card A: About Me Text - Spans 2 columns */}
                <motion.div
                    variants={fadeInUp}
                    className="md:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm dark:bg-gray-800/50"
                >
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                        I am currently completing my{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            Bachelor of Engineering (Honours)
                        </span>{" "}
                        in Software Engineering at UTS. My passion lies in bridging the gap
                        between complex AI models and user-friendly applications.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        I recently led a team to build{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            InnerSystems
                        </span>
                        , an AI platform for tracking team health, using React, Python, and
                        Supabase. My background in operations at Bunnings taught me how to
                        manage teams and streamline processes, skills I now apply to my
                        engineering leadership.
                    </p>
                </motion.div>

                {/* Card B: Image - cognizant2.jpg */}
                <motion.div
                    variants={fadeInUp}
                    className="rounded-2xl overflow-hidden border border-white/10 bg-gray-800/50 aspect-square md:aspect-auto"
                >
                    <Image
                        src="/cognizant2.jpg"
                        alt="Oliver at Cognizant event"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Card C: Image - cognizant3.jpeg */}
                <motion.div
                    variants={fadeInUp}
                    className="rounded-2xl overflow-hidden border border-white/10 bg-gray-800/50 aspect-square md:aspect-auto"
                >
                    <Image
                        src="/cognizant3.jpeg"
                        alt="Oliver at Cognizant"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Card D: Skills/Tech Stack */}
                <motion.div
                    variants={fadeInUp}
                    className="md:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm dark:bg-gray-800/50"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <LuGraduationCap className="text-2xl text-gray-900 dark:text-white" />
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            UTS Software Engineering (Honours)
                        </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Expected Graduation: Feb 2026
                    </p>

                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                        Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-700/50 text-gray-900 dark:text-white">
                            <FaPython className="text-lg" />
                            <span className="text-sm font-medium">Python</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-700/50 text-gray-900 dark:text-white">
                            <SiTypescript className="text-lg" />
                            <span className="text-sm font-medium">TypeScript</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-700/50 text-gray-900 dark:text-white">
                            <FaReact className="text-lg" />
                            <span className="text-sm font-medium">React</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-700/50 text-gray-900 dark:text-white">
                            <SiSupabase className="text-lg" />
                            <span className="text-sm font-medium">Supabase</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
