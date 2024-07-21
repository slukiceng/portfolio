import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import civilsapp from "@/public/civils-app.png";
import civilscalculators from "@/public/civils-calculators.png";
import zenmeditate from "@/public/zen-meditate.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated University",
    location: "University of Warwick (UK)",
    description:
      "I graduated with a degree in Civil Engineering and started working as a technical Engineering Designer.",
    icon: React.createElement(LuGraduationCap),
    date: "2014",
  },
  {
    title: "Civil Engineer",
    location: "ARUP (UK & SG)",
    description:
      "I worked as a Civil Engineer on tunnelling projects taking an interest in digitial & Engineering automation whilst working for ARUP. I enrolled on several full stack web development qualifications in this time and completed projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2022",
  },
  {
    title: "CEO & Full Stack Developer",
    location: "Civils.ai (SG)",
    description:
      "I work on full stack development. My stack includes React, FastAPI, Bootstrap CSS and PostgreSQL.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Civils.ai",
    description:
      "AI web application extracting data from construction drawings and reports. I worked as lead front-end developer & also assisted back-end developments.",
    tags: ["React", "FastAPI", "PostgreSQL", "Bootstrap CSS", "QDrant", "AWS"],
    imageUrl: civilsapp,
    userCount: "16,000",
  },
  {
    title: "Civils Calculators",
    description:
      "Open-source web calculators for Civil & Mechanical Engineering problems. I worked as full-stack developer and managing the open-source project.",
    tags: ["Django", "PostgreSQL", "Bootstrap", "AWS"],
    imageUrl: civilscalculators,
    userCount: "11,000",
  },
  {
    title: "ZenMeditate",
    description:
      "A web app for mixing together relaxing instruments to an aesthetic Three.js scene backdrop. I created this app as a serverless front-end application.",
    tags: ["Next.js", "Tailwind", "Three.js", "Vercel"],
    imageUrl: zenmeditate,
    userCount: "500",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Bootstrap CSS",
  "PostgreSQL",
  "Python",
  "Django",
  "AWS",
  "Figma",
  "UI/UX",
] as const;
