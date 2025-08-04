import Link from "next/link";
import Image from "next/image";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs } from "react-icons/si";

export default function AboutMe() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-black via-zinc-900 to-neutral-950 dark:from-gray-900 dark:to-black" id="about">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-white dark:text-gray-300 text-lg leading-relaxed">
            I'm Link passionate full-stack developer with Link knack for building clean, high-performance web apps using modern tools like <strong>Next.js</strong>, <strong>Supabase</strong>, and <strong>Tailwind CSS</strong>. I aim to craft user-centric digital experiences that solve real problems.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all duration-300"
            >
              Download Resume
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Hire Me
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6 text-3xl text-blue-600 dark:text-blue-400">
            <FaReact title="React" />
            <SiNextdotjs title="Next.js" />
            <SiJavascript title="JavaScript" />
            <SiTypescript title="TypeScript" />
            <FaNodeJs title="Node.js" />
            <FaGithub title="GitHub" />
            <SiTailwindcss title="Tailwind CSS" />
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative w-52 h-52 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl shadow-blue-300 dark:shadow-blue-800 hover:scale-105 transition-transform duration-500 ml-40">
          <Image
            src="/photo.jpeg" // Replace with your image
            alt="Your Name"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
