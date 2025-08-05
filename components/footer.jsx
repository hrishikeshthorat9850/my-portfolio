"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black/70 text-white backdrop-blur-sm py-10 px-4 mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold">Hrishikesh Thorat</h3>
          <p className="mt-2 text-sm text-gray-400">Full-Stack Web Developer</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg mb-1">Navigate</h4>
          <Link href="#about" className="hover:text-cyan-400 transition">About</Link>
          <Link href="#skills" className="hover:text-cyan-400 transition">Skills</Link>
          <Link href="#projects" className="hover:text-cyan-400 transition">Projects</Link>
          <Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-semibold text-lg mb-2">Connect</h4>
          <div className="flex gap-4 text-2xl">
            <a href="https://github.com/hrishikeshthorat9850" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/hrishithorat" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/hrishi__thorat" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Hrishikesh Thorat. All rights reserved.
      </div>
    </footer>
  );
}
