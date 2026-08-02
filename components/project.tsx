"use client";

import { useEffect, useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRightSquare } from "react-icons/bs";
import clsx from "clsx";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  videoUrl,
  videoPoster,
  videoPlaybackRate,
  userCount,
  link,
  logoUrl,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const isReversed = index % 2 === 1;

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = videoPlaybackRate;
    }
  }, [videoPlaybackRate]);

  return (
    <div ref={ref} className="w-full">
      <motion.div
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group/card w-full"
      >
        <section className="w-full rounded-2xl border border-black/5 bg-gray-100 p-5 transition-colors hover:bg-gray-200 sm:p-8 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
          <div
            className={clsx(
              "flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-10",
              isReversed && "lg:flex-row-reverse"
            )}
          >
            {/* ---------- Text column ---------- */}
            <div className="flex min-w-0 flex-col lg:w-[40%] lg:shrink-0">
              <div className="flex h-9 items-center">
                <Image
                  src={logoUrl}
                  alt={`${title} logo`}
                  width={180}
                  height={40}
                  className="h-full w-auto max-w-[190px] object-contain object-left"
                />
              </div>

              <p className="mt-5 leading-relaxed text-gray-700 dark:text-white/70">
                {description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:bg-white/20 dark:text-white/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm leading-relaxed text-gray-700 dark:text-white/70">
                Monthly active users: <b>{userCount}</b>
              </p>

              <div className="mt-6">
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} (opens in a new tab)`}
                  className="group/link inline-flex items-center gap-2 rounded-full border border-black bg-white px-7 py-3 text-black outline-none transition-transform duration-200 ease-in-out hover:scale-105 focus-visible:scale-105 active:scale-100 dark:border-white/20 dark:bg-white/10 dark:text-white"
                >
                  View project
                  <BsArrowUpRightSquare className="opacity-80 transition-transform duration-200 group-hover/link:scale-110 group-hover/link:opacity-100" />
                </Link>
              </div>
            </div>

            {/* ---------- Video column ---------- */}
            <div className="min-w-0 lg:w-[60%]">
              <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-lg transition-all duration-300 ease-out group-hover/card:-translate-y-1 group-hover/card:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/40">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  poster={videoPoster}
                  aria-label={`${title} application demo`}
                  onLoadedMetadata={(e) => {
                    e.currentTarget.playbackRate = videoPlaybackRate;
                  }}
                  width={1728}
                  height={1080}
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
