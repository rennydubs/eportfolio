import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiChartdotjs,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiSupabase,
  SiAmazonaws,
  SiDocker,
  SiFirebase,
  SiGit,
  SiOpenai,
} from "react-icons/si";
import { FaRobot, FaBrain, FaProjectDiagram, FaDatabase, FaKey } from "react-icons/fa";
import { MdArchitecture, MdOutlineIntegrationInstructions } from "react-icons/md";
import { VscSymbolMisc } from "react-icons/vsc";
import project1Img from "@/public/project1.png";
import project2Img from "@/public/project2.png";
import project3Img from "@/public/project3.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    company: "Optik Consultancy",
    location: "Sydney, AU",
    start: "Nov 2025",
    end: "Feb 2026",
    isCurrent: false,
    highlights: [
      "Building InnerSystems, an AI-driven team cohesion platform, as a software engineering intern working with a team of 4 engineers for a client seeking Series A funding.",
      "Built and shipped a full-stack MVP using Next.js, Supabase, and FastAPI, including real-time analytics and automated coaching flows.",
      "Designed API and database schema for sensitive team health data, focusing on secure access patterns and maintainable scaling.",
    ],
    tech: ["Next.js", "Supabase", "FastAPI", "Python"],
    icon: React.createElement(FaReact),
  },
  {
    title: "Operations & Safety Coordinator",
    company: "Bunnings Warehouse",
    location: "Sydney, AU",
    start: "May 2022",
    end: "Present",
    isCurrent: true,
    highlights: [
      "Managed safety and compliance operations for a high-volume site of 100+ staff with zero major incidents during tenure.",
      "Led process improvements that improved audit readiness and reduced operational risk through standardised workflows.",
      "Coordinated stakeholders across floor teams and leadership to drive consistent safety behaviours and reporting.",
    ],
    tech: ["Safety", "Compliance", "Audits", "Process Improvement", "Stakeholder Management"],
    icon: React.createElement(CgWorkAlt),
  },
] as const;

export const projectsData = [
  {
    title: "Emotion-to-Video AI",
    label: "Honours Capstone - High Distinction",
    hook: "Built an NLP pipeline that maps emotion in text to video outputs using DistilBERT.",
    bullets: [
      { label: "Problem", text: "Convert emotional tone into visual output for accessibility." },
      { label: "Solution", text: "DistilBERT classifier + Flask API + video generation pipeline." },
      { label: "Result", text: "End-to-end capstone system with reproducible evaluation and demo." },
    ],
    proofLinks: {
      live: null as string | null,
      github: "https://github.com/rennydubs/auslan-nlp-sign-retrieval",
      caseStudy: null as string | null,
    },
    tech: ["Python", "DistilBERT", "NLP", "Flask"],
    imageUrl: project2Img,
  },
  {
    title: "JurisTechne",
    label: "UTS Startup Design Project",
    hook: "End-to-end UI and design system for an AI legal research startup.",
    bullets: [
      { label: "Problem", text: "Dense legal content and AI outputs were hard to scan and inconsistent." },
      { label: "Solution", text: "Built a scalable design system and high-fidelity prototypes with clear data-visualisation layouts." },
      { label: "Result", text: "Delivered a cohesive product UI that improved readability and accelerated iteration." },
    ],
    proofLinks: {
      live: "https://juristechne.com",
      github: null as string | null,
      caseStudy: null as string | null,
    },
    tech: ["WordPress", "PHP", "JavaScript", "Chart.js"],
    imageUrl: project1Img,
  },
  {
    title: "Carbcasters",
    label: "Group Course Project",
    hook: "Gamified fitness tracker with meal planning and RPG-style progress.",
    bullets: [
      { label: "Problem", text: "Make fitness adherence engaging and measurable." },
      { label: "Solution", text: "React UI + Node backend + PostgreSQL with gamification mechanics." },
      { label: "Result", text: "Working prototype with core tracking and gamification loop." },
    ],
    proofLinks: {
      live: null as string | null,
      github: "https://github.com/rennydubs/carbcasters",
      caseStudy: null as string | null,
    },
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    imageUrl: project3Img,
  },
];

export const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: React.createElement(SiPython) },
      { name: "TypeScript", icon: React.createElement(SiTypescript) },
      { name: "JavaScript (ES6+)", icon: React.createElement(SiJavascript) },
      { name: "SQL", icon: React.createElement(SiPostgresql) },
      { name: "C++", icon: React.createElement(SiCplusplus) },
      { name: "HTML/CSS", icon: React.createElement(SiHtml5) },
    ],
  },
  {
    category: "Frontend Ecosystem",
    skills: [
      { name: "React", icon: React.createElement(SiReact) },
      { name: "Next.js", icon: React.createElement(SiNextdotjs) },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss) },
      { name: "Shadcn/UI", icon: React.createElement(VscSymbolMisc) },
      { name: "Framer Motion", icon: React.createElement(SiFramer) },
      { name: "Chart.js", icon: React.createElement(SiChartdotjs) },
    ],
  },
  {
    category: "Backend & API",
    skills: [
      { name: "FastAPI", icon: React.createElement(SiFastapi) },
      { name: "Node.js", icon: React.createElement(SiNodedotjs) },
      { name: "Express", icon: React.createElement(SiExpress) },
      { name: "Flask", icon: React.createElement(SiFlask) },
      { name: "Clerk Auth", icon: React.createElement(FaKey) },
    ],
  },
  {
    category: "Database & Cloud",
    skills: [
      { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
      { name: "Supabase", icon: React.createElement(SiSupabase) },
      { name: "AWS (EC2/S3)", icon: React.createElement(SiAmazonaws) },
      { name: "Docker", icon: React.createElement(SiDocker) },
      { name: "Firebase", icon: React.createElement(SiFirebase) },
      { name: "Git/GitHub", icon: React.createElement(SiGit) },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "OpenAI API", icon: React.createElement(SiOpenai) },
      { name: "Whisper", icon: React.createElement(FaRobot) },
      { name: "RAG Pipelines", icon: React.createElement(FaDatabase) },
      { name: "Vector Embeddings", icon: React.createElement(FaBrain) },
      { name: "LLM Integration", icon: React.createElement(MdOutlineIntegrationInstructions) },
    ],
  },
  {
    category: "Professional Competencies",
    skills: [
      { name: "Agile/Scrum", icon: React.createElement(FaProjectDiagram) },
      { name: "API Design", icon: React.createElement(MdOutlineIntegrationInstructions) },
      { name: "System Architecture", icon: React.createElement(MdArchitecture) },
      { name: "CI/CD", icon: React.createElement(SiGit) },
      { name: "Data Visualisation", icon: React.createElement(SiChartdotjs) },
    ],
  },
];
