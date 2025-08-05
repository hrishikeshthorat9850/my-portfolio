"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "DairyWebApp",
    description: "A full-stack milk collection center web app built with node.js,express and mongodb.",
    image: "dairywebapp.png",
    github: "https://github.com/hrishikeshthorat9850/milk-collection-center",
    live: "https://devblog.vercel.app",
    tags: ["Node.js", "Mongodb", "Tailwind"],
  },
  {
    title: "Todo App",
    description: "Minimal task manager with authentication and drag-drop UI.",
    image: "TodoApp.png",
    github: "https://github.com/hrishikeshthorat9850/TodoApp",
    live: "https://taskflow.vercel.app",
    tags: ["React", "Supabase", "Tailwind"],
  },
  {
    title: "AgroGram",
    description: "A unique animated portfolio showcasing my full-stack work.",
    image: "Agrogram.png",
    github: "https://github.com/hrishikeshthorat9850/agrogram",
    live: "https://yourportfolio.com",
    tags: ["Next.js", "Supabase", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <p className="text-gray-400 mb-12">
          Some of the things I’ve built recently.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    className="text-sm text-indigo-400 hover:underline"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                  <Link
                    href={project.live}
                    className="text-sm text-indigo-400 hover:underline"
                    target="_blank"
                  >
                    Live Site
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
