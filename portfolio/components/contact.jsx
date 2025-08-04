"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-6 py-20 bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Get in Touch
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 max-w-xl mx-auto"
        >
          <div className="flex flex-col text-left">
            <label htmlFor="name" className="mb-1 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-1 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="message" className="mb-1 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex justify-center gap-6 text-2xl"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
