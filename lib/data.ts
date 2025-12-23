import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    tags: ["Python", "DistilBERT", "NLP", "React", "AWS"],
    imageUrl: project2Img,
    websiteUrl: "https://github.com/rennydubs/auslan-nlp-sign-retrieval",
  },
  {
    title: "Juris Techne",
    description: "Contributed to a legal AI platform landing page using WordPress. Built PHP modules for content management and interactive Chart.js dashboards.",
    tags: ["PHP", "JavaScript", "Chart.js", "MySQL", "WordPress"],
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
    skills: ["Python", "TypeScript", "JavaScript (ES6+)", "SQL", "C++", "HTML/CSS"],
  },
  {
    category: "Frontend Ecosystem",
    skills: ["React", "Next.js", "Tailwind CSS", "Shadcn/UI", "Framer Motion", "Chart.js"],
  },
  {
    category: "Backend & API",
    skills: ["FastAPI", "Node.js", "Express", "Flask", "Clerk Auth"],
  },
  {
    category: "Database & Cloud",
    skills: ["PostgreSQL", "Supabase", "AWS (EC2/S3)", "Docker", "Firebase", "Git/GitHub"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["OpenAI API", "Whisper", "RAG Pipelines", "Vector Embeddings", "LLM Integration"],
  },
  {
    category: "Professional Competencies",
    skills: ["Agile/Scrum", "API Design", "System Architecture", "CI/CD", "Data Visualisation"],
  },
] as const;
