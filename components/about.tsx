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
        I graduated with a degree in{" "}
        <span className="font-medium">Civil Engineering</span> and started my career designing undergound tunnels in the UK & Singapore for ARUP.
        After working on digital automation of the construction design processes,
        I decided to take my passion for Engineering deeper into the digital world.{" "}
        In 2019, I began building my own projects an enrolling on Harvard's CS50 qualifications and bootcamps to improve my{" "}
        <span className="font-medium">full-stack web development</span> skills.{" "}
      </p>
      <p className="mb-3">
        My first project <span className="font-medium">Civils.ai</span>{" "}
        gained significant traction in the Construction Industry and became a VC backed SaaS business growing to 7 figure annual revenue. 
      </p>
      <p className="mb-3">
        My main skills are in <span className="font-medium">solutions architecture</span>, <span className="font-medium">product management</span> and <span className="font-medium">enterprise sales with experience closing 6-figure deals</span>.
      </p>
    </motion.section>
  );
}
