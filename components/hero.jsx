"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const stats = [
  { label: "Projects", value: "03+" },
  { label: "Core Stack", value: "MERN" },
  { label: "Focus", value: "UX" },
];

const techPills = ["React", "Next.js", "Node.js", "Supabase", "Tailwind"];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <div className="grid-backdrop relative min-h-[calc(100vh-6rem)] overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,#050505_0%,#111111_42%,#0b3b3f_100%)] px-4 py-16 text-white dark:border-white/10">
      {/* Aurora glow blobs */}
      <div className="aurora aurora-amber animate-float-slow -left-24 top-10 h-72 w-72" />
      <div className="aurora aurora-teal animate-float-slower -right-16 bottom-0 h-80 w-80" />

      <div className="section-inner grid min-h-[calc(100vh-12rem)] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-200 backdrop-blur">
              <span className="relative grid h-2 w-2 place-items-center">
                <span className="absolute inline-flex h-2 w-2 animate-pulse-ring rounded-full bg-emerald-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for web projects
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl"
          >
            Building fast web apps with a{" "}
            <span className="text-gradient">clean product feel.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl"
          >
            I'm Hrishikesh, a full-stack developer creating responsive,
            practical interfaces with React, Next.js, Node.js, and Supabase.
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap gap-2">
            {techPills.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-bold text-black shadow-lg shadow-amber-500/25 transition hover:bg-amber-300 hover:shadow-amber-400/40"
            >
              View Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/Resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 font-bold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/12"
            >
              Resume
              <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <a
              href="https://github.com/hrishikeshthorat9850"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] transition hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-300"
              aria-label="GitHub profile"
            >
              <Github size={19} />
            </a>
            <a
              href="https://linkedin.com/in/hrishithorat"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] transition hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-300"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={19} />
            </a>
            <a
              href="mailto:hrishikeshthorat9850@gmail.com"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] transition hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-300"
              aria-label="Send email"
            >
              <Mail size={19} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-amber-500/20 via-transparent to-teal-500/20 blur-2xl" />

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="card-surface overflow-hidden rounded-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-xs font-semibold text-zinc-400">
                portfolio.preview
              </span>
            </div>
            <div className="p-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900">
                <Image
                  src="/my-photo.png"
                  alt="Hrishikesh Thorat"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="mt-5 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5">
                {stats.map((item) => (
                  <div key={item.label} className="px-3 text-center">
                    <p className="text-xl font-black text-white">{item.value}</p>
                    <p className="mt-1 text-xs text-zinc-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-400 lg:flex"
      >
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-amber-400"
          />
        </span>
      </motion.div>
    </div>
  );
}
