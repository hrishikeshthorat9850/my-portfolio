"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "DairyWebApp",
    description:
      "A milk collection center app for managing farmers, daily entries, rates, and collection records.",
    image: "/dairywebapp.png",
    github: "https://github.com/hrishikeshthorat9850/milk-collection-center",
    tags: ["Node.js", "Express", "MongoDB"],
    type: "Full-stack dashboard",
  },
  {
    title: "Todo App",
    description:
      "A focused task manager with authentication, task organization, and a responsive dashboard interface.",
    image: "/TodoApp.png",
    github: "https://github.com/hrishikeshthorat9850/TodoApp",
    tags: ["React", "Supabase", "Tailwind"],
    type: "Productivity app",
  },
  {
    title: "AgroGram",
    description:
      "An agriculture-focused web app concept built with modern frontend patterns and clean user flows.",
    image: "/Agrogram.png",
    github: "https://github.com/hrishikeshthorat9850/agrogram",
    tags: ["Next.js", "Supabase", "Tailwind"],
    type: "Agri-tech concept",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-shell overflow-hidden bg-[#0b0b0c] text-white"
    >
      <div className="aurora aurora-amber -right-20 top-10 h-64 w-64 opacity-30" />
      <div className="section-inner">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3">
              <span className="font-mono text-zinc-500">01</span> Selected Work
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Projects that show product thinking, not just UI screens.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-400">
            Each project focuses on a practical workflow, clear data, and
            responsive implementation.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className={`card-surface card-hover group overflow-hidden rounded-2xl ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "h-72" : "h-56"}`}>
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <p className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  {project.type}
                </p>
              </div>

              <div className="p-5">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black">{project.title}</h3>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:rotate-6 hover:bg-amber-400 hover:text-black"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github size={18} />
                  </Link>
                </div>
                <p className="text-sm leading-6 text-zinc-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-black text-amber-300 transition hover:text-amber-200"
                >
                  View repository
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
