"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        In 2014, I graduated with a degree in{" "}
        <span className="font-medium">Civil Engineering</span> and started my career designing underground tunnels in the UK & Singapore.{" "}
      </p>
      <p className="mb-3">
        In 2019, I became extremely interested in applying AI in Construction (one of the world's least digitized industries) and began building my own software, enrolling on Harvard's CS50 to improve my{" "}
        <span className="font-medium">Software and AI development</span> skills.
      </p>
      <p className="mb-3">
        My first project <span className="font-medium">Civils.ai</span>{" "}
        gained significant traction in the Construction Industry and became a VC backed SaaS B2B startup growing to 7 figure annual revenue. 
      </p>
      <p className="mb-3">
        My main skills are in <span className="font-medium">solutions architecture</span>, <span className="font-medium">product management</span> and <span className="font-medium">enterprise sales with experience closing 6-figure dealsnom</span>.
      </p>
    </motion.section>
  );
}
