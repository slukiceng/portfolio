"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsArrowUpRightSquare } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  userCount,
  link,
  logoUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >

      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[28rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <Image
            src={logoUrl}
            alt="logo"
            quality={95}
            height={35}
          />

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-white/70">
            <small>Monthly active users: <b>{userCount}</b></small>
          </p>
          <p>
          <Link
            href={link}
            target="_blank"
            className="group mt-3 inline-flex items-center bg-white text-black px-7 py-3 gap-2 rounded-full border border-black outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-transform duration-200 ease-in-out dark:bg-white/10 dark:text-white dark:border-white/20"

          >
            View project
            <BsArrowUpRightSquare className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-200" />
          </Link>


          </p>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          group-even:right-[initial] group-even:-left-40"
        />
      </section>

    </motion.div>
  );
}
