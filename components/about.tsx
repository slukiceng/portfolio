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
        <span className="font-medium">Civil Engineering</span> and started my career working 
        on the design of Tunnelling Projects in the UK & later in Singapore for ARUP.
        After working on the digital side automating construction design processes,
        I realised I wanted take my passion for Engineering from the physical into the digital world.{" "}
        In 2019, I began enrolling on training courses and completing projects to further my knowledge of{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
      </p>
      <p className="mb-3">
        One of my early projects <span className="font-medium">Civils.ai</span>{" "}
        gained significant traction in the Construction Industry and I later turned it into a full-time SaaS business, raising Venture Capital. 
        Alongside handling the role of CEO and product management responsibilities, I continued to build the product alongside the CTO.
      </p>
      <p>  
        <span className="italic">My favorite part of programming</span> is solving
        Engineering challenges. I love the feeling I get from knowing someone else
        is solving a problem using the product I built. I am especially motivated
        when working in a complimentary team working towards a higher goal. My core stack
        is{" "}
        <span className="font-medium">
          React, Django, PostgreSQL
        </span>
        . I am also familiar with Next.js and FastAPI. I am always hungry to learn
        about new technologies.
      </p>
    </motion.section>
  );
}
