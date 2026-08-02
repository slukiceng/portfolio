import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import calcForgeLogo from "@/public/calcforge-logo.png";
import civilsLogo from "@/public/civils-logo.svg";

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
    location: "University of Warwick 🇬🇧",
    description:
      "I graduated with a degree in Civil Engineering and started working as a technical Engineering Designer.",
    icon: React.createElement(LuGraduationCap),
    date: "2014",
  },
  {
    title: "Civil Engineer",
    location: "ARUP 🇬🇧 / 🇸🇬",
    description:
      "I worked as a Civil Engineer on tunnelling projects taking an interest in digitial & Engineering automation whilst working for ARUP. I enrolled on several full stack web development qualifications in this time and completed projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2022",
  },
  {
    title: "CEO & Full Stack Developer",
    location: "Civils.ai 🇸🇬",
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
      "Civils.ai automates the quantities takeoff process for construction projects using AI vision, helping contractors estimate costs more accurately.",
    tags: ["React", "FastAPI", "PostgreSQL", "Bootstrap CSS", "QDrant", "AWS"],
    videoUrl: "/civils.mp4",
    videoPoster: "/civils-poster.jpg",
    videoPlaybackRate: 1,
    userCount: "16,000",
    link: "https://civils.ai/",
    logoUrl : civilsLogo,
  },
  {
    title: "CalcForge",
    description:
      "A professional community for civil & structural engineers. Earn certifications in AI, automation and Python.",
    tags: ["Django", "PostgreSQL", "Bootstrap", "AWS"],
    videoUrl: "/calcforge.mp4",
    videoPoster: "/calcforge-poster.jpg",
    videoPlaybackRate: 2,
    userCount: "11,000",
    link: "https://calcforge.com/",
    logoUrl : calcForgeLogo,
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
