"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#060607] px-4 py-10 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-black">
            Hrishikesh <span className="text-gradient">Thorat</span>
          </h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400">
            Full-stack web developer building fast, useful, and polished web
            experiences.
          </p>
        </div>

        <nav className="flex flex-wrap gap-3 text-sm font-bold text-zinc-300">
          <Link href="#projects" className="transition hover:text-amber-300">
            Work
          </Link>
          <Link href="#about" className="transition hover:text-amber-300">
            About
          </Link>
          <Link href="#skills" className="transition hover:text-amber-300">
            Stack
          </Link>
          <Link href="#contact" className="transition hover:text-amber-300">
            Contact
          </Link>
        </nav>

        <div className="flex gap-3">
          <a
            href="https://github.com/hrishikeshthorat9850"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-300"
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/hrishithorat"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-300"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://twitter.com/hrishi__thorat"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-300"
            aria-label="Twitter profile"
          >
            <Twitter size={18} />
          </a>
          <a
            href="mailto:hrishikeshthorat9850@gmail.com"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:border-amber-400/50 hover:text-amber-300"
            aria-label="Send email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} Hrishikesh Thorat. All rights reserved.
      </div>
    </footer>
  );
}
