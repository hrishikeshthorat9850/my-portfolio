"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaReact,
  FaWrench,
} from "react-icons/fa";
import {
  SiSupabase,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";

const groupedSkills = {
  Frontend: {
    icon: <FaReact className="text-cyan-400 text-2xl" />,
    skills: [
      { label: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
      { label: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
      { label: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 80 },
      { label: "React", icon: <FaReact className="text-cyan-400" />, level: 85 },
      { label: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 80 },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" />, level: 90 },
    ],
  },
  Backend: {
    icon: <FaNodeJs className="text-green-600 text-2xl" />,
    skills: [
      { label: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 85 },
      { label: "Express", icon: <SiExpress className="text-gray-300" />, level: 80 },
      { label: "Supabase", icon: <SiSupabase className="text-green-400" />, level: 75 },
    ],
  },
  Database: {
    icon: <SiMysql className="text-yellow-500 text-2xl" />,
    skills: [
      { label: "MySQL", icon: <SiMysql className="text-blue-600" />, level: 85 },
      { label: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 80 },
      { label: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, level: 70 },
    ],
  },
  Tools: {
    icon: <FaWrench className="text-white text-2xl" />,
    skills: [
      { label: "Git", icon: <FaGitAlt className="text-red-500" />, level: 90 },
    ],
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-gradient-to-br from-black via-zinc-900 to-neutral-950 py-20 px-4 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-16"
        >
          My <span className="text-cyan-400">Skill Set</span>
        </motion.h2>

        <div className="flex flex-col gap-20">
          {Object.entries(groupedSkills).map(([category, { icon, skills }], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-10">
                <div>{icon}</div>
                <h3 className="text-2xl sm:text-3xl font-bold underline underline-offset-8">
                  {category}
                </h3>
              </div>

              <div
                className={`grid gap-8 justify-center ${
                  skills.length <= 3
                    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                    : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                }`}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-2 p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg"
                    data-tooltip-id={`tooltip-${category}-${index}`}
                    data-tooltip-content={skill.label}
                  >
                    <div className="text-4xl">{skill.icon}</div>
                    <p className="text-sm font-medium">{skill.label}</p>
                    <div className="w-full bg-gray-700 h-2 rounded">
                      <div
                        className="h-2 bg-cyan-400 rounded"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Tooltip id="tooltip" />
    </section>
  );
}
