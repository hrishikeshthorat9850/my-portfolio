"use client";

import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";

const groupedSkills = [
  {
    title: "Frontend",
    description: "Interfaces, layouts, motion, and reusable component systems.",
    skills: [
      { label: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { label: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { label: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { label: "React", icon: <FaReact className="text-cyan-400" /> },
      { label: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
    ],
  },
  {
    title: "Backend",
    description: "APIs, authentication, data flows, and server-side logic.",
    skills: [
      { label: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { label: "Express", icon: <SiExpress className="text-zinc-200" /> },
      { label: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
    ],
  },
  {
    title: "Data & Tools",
    description: "Databases, version control, and practical delivery workflows.",
    skills: [
      { label: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { label: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
      { label: "Git", icon: <FaGitAlt className="text-red-500" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell overflow-hidden bg-[#111112] text-white">
      <div className="aurora aurora-teal -left-20 bottom-10 h-64 w-64 opacity-25" />
      <div className="section-inner">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3">
              <span className="font-mono text-zinc-500">03</span> Stack
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Tools I use to move from idea to shipped interface.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-400">
            Instead of vague percentages, this section highlights the tools I
            use across real project work.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {groupedSkills.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="card-surface card-hover rounded-2xl p-5"
            >
              <h3 className="text-2xl font-black">{group.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-400">
                {group.description}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="group/skill flex items-center gap-3"
                    data-tooltip-id="skill-tooltip"
                    data-tooltip-content={skill.label}
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.06] text-xl transition group-hover/skill:scale-110 group-hover/skill:bg-white/12">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-bold text-zinc-200 transition group-hover/skill:text-white">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Tooltip id="skill-tooltip" />
    </section>
  );
}
