import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

const principles = [
  "Responsive layouts that feel intentional on mobile and desktop",
  "Clean component structure with practical, readable code",
  "Interfaces that make real workflows easier to complete",
];

export default function AboutMe() {
  return (
    <section id="about" className="section-shell bg-[#f6f3ee] text-zinc-950 dark:bg-[#0d0d0f] dark:text-white">
      <div className="section-inner grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="group relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-gradient-to-tr from-amber-300/40 to-teal-300/30 blur-xl transition group-hover:from-amber-400/50" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-2xl shadow-zinc-900/10 dark:border-white/10 dark:bg-zinc-900">
            <Image
              src="/my-photo.png"
              alt="Hrishikesh Thorat"
              fill
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow mb-3">
            <span className="font-mono text-zinc-400">02</span> About
          </p>
          <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            I design and build web apps that are{" "}
            <span className="text-gradient">simple to use and easy to grow.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            I'm a full-stack developer who enjoys shaping ideas into polished,
            useful products. My work blends React and Next.js interfaces with
            backend tools like Node.js, Supabase, and MongoDB.
          </p>

          <div className="mt-8 space-y-3">
            {principles.map((item) => (
              <div key={item} className="flex gap-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/Resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3 font-bold text-white transition hover:bg-zinc-800 dark:bg-amber-400 dark:text-black dark:hover:bg-amber-300"
            >
              Resume
              <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
            </Link>
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 px-6 py-3 font-bold text-zinc-950 transition hover:border-zinc-950 hover:bg-white dark:border-white/20 dark:text-white dark:hover:border-white/50 dark:hover:bg-white/5"
            >
              Hire Me
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
