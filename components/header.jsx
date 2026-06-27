"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Work", href: "#projects", id: "projects" },
  { name: "About", href: "#about", id: "about" },
  { name: "Stack", href: "#skills", id: "skills" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Header({ darkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", ...navLinks.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 py-3 sm:px-5">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 text-white backdrop-blur-2xl transition-all duration-300 ${
          scrolled
            ? "bg-black/70 px-4 py-2 shadow-2xl shadow-black/40"
            : "bg-black/45 px-4 py-3 shadow-xl shadow-black/10"
        }`}
      >
        <Link href="#hero" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-amber-400 text-sm font-black text-black shadow-lg shadow-amber-500/30 transition group-hover:scale-105">
            HT
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold sm:text-base">
              Hrishikesh Thorat
            </span>
            <span className="hidden text-xs text-zinc-300 sm:block">
              Full-stack developer
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] p-1 text-sm font-semibold md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`rounded-full px-4 py-2 transition ${
                active === link.id
                  ? "bg-amber-400 text-black"
                  : "text-zinc-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-lg transition hover:bg-white/12"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-amber-300 md:inline-flex"
          >
            Let's talk
          </a>
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-xl transition hover:bg-white/12 md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-black/90 p-2 text-white shadow-2xl backdrop-blur-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-xl px-4 py-3 font-semibold transition ${
                active === link.id
                  ? "bg-amber-400/15 text-amber-300"
                  : "hover:bg-white/10"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-1 block rounded-xl bg-amber-400 px-4 py-3 text-center font-bold text-black"
          >
            Let's talk
          </a>
        </div>
      )}
    </header>
  );
}
