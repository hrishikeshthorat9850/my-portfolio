"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import the LottiePlayer
const LottiePlayer = dynamic(() => import("./LottiePlayer"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className={`w-full bg-gradient-to-br from-black via-zinc-900 to-neutral-950 min-h-screen flex flex-col items-center justify-center text-center px-4 relative mt-10`}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] to-[#1e293b] dark:from-[#0f172a] dark:to-[#0f172a]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
          Hi, I’m <span className="text-indigo-400">Hrishi</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-6">
          Full Stack Web Developer. I build clean, fast, and creative web experiences.
        </p>
        <Link
          href="#projects"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-medium transition duration-300"
        >
          View Projects
        </Link>
      </motion.div>

      {/* Lottie animation safely rendered on client only */}
      <LottiePlayer src="https://assets4.lottiefiles.com/packages/lf20_myejiggj.json" />
    </section>
  );
}
