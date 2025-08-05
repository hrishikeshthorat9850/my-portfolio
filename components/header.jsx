"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";
// Dynamically import Lottie Player for client-side only
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

export default function Header({darkMode,toggleTheme}) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/70 backdrop-blur-md shadow-lg text-white">      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center relative">
        {/* Logo with animation */}
        <div className="flex items-center gap-2">
            <div className="flex flex-col items-center text-center mt-10 md:mt-0 ">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x transition-transform hover:scale-105 duration-300">
                TEst NAme
              </h1>
              <p className="hidden md:block mt-2 text-sm sm:text-base text-white-600 dark:text-gray-300 font-medium">
                Full-Stack Web Developer • Next.js • Supabase • React.js
              </p>
            </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-500 dark:hover:text-cyan-400 transition-all relative group"
            >
              {link.name}
              <span className="block h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="text-xl hover:text-yellow-400"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme}>
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white p-6 space-y-4 transition-all animate-fadeInDown">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
