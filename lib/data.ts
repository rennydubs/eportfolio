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
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Optik Consultancy",
    description: "Leading a cross-functional team of 4 to architect and ship 'InnerSystems', an AI-powered team cohesion platform. Engineered the full-stack MVP using Next.js, Supabase, and FastAPI, implementing real-time AI analytics and an AI coach to provide personalised feedback and insights.",
    icon: React.createElement(FaReact),
    date: "Nov 2024 - Present",
  },
  {
    title: "Software Engineering (Honours)",
    location: "UTS, Sydney",
    description: "Honours student specialising in Enterprise Software and AI. Awarded High Distinction (93) for Capstone Project 'NLP in Auslan'. Consistently achieved distinction-grade results across core subjects.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2021 - Feb 2026",
  },
  {
    title: "Operations & Safety Coordinator",
    location: "Bunnings Warehouse",
    description: "Managed safety and compliance operations for a high-volume store (100+ team members). Developed strong stakeholder management skills and led process optimization initiatives to reduce risk.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Emotion-to-Video AI",
    description: "Capstone Project. An end-to-end system using DistilBERT to detect emotional tone in text and generate corresponding video output.",
    tags: ["Python", "DistilBERT", "NLP", "Flask"],
    imageUrl: project2Img,
    websiteUrl: "https://github.com/rennydubs/auslan-nlp-sign-retrieval",
  },
  {
    title: "JurisTechne",
    description: "Designed and developed a content-heavy legal AI platform using WordPress. Engineered custom PHP modules for dynamic content management and integrated Chart.js for interactive data visualization.",
    tags: ["WordPress", "PHP", "JavaScript", "Chart.js"],
    imageUrl: project1Img,
    websiteUrl: "https://juristechne.com",
  },
  {
    title: "Carbcasters",
    description: "Gamified fitness web app. Built React frontend and Node.js backend to combine fitness tracking with AI meal planning.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    imageUrl: project3Img,
    websiteUrl: "https://github.com/rennydubs/carbcasters",
  },
] as const;

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
