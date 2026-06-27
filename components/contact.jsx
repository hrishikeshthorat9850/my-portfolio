"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";

const emailAddress = "hrishikeshthorat9850@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell bg-[#f6f3ee] text-zinc-950">
      <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow mb-3">
            <span className="font-mono text-zinc-400">04</span> Contact
          </p>
          <h2 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
            Have a project, role, or{" "}
            <span className="text-gradient">collaboration</span> in mind?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-700">
            Send a short message and your email app will open with everything
            ready. You can also reach me directly through the links below.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="https://github.com/hrishikeshthorat9850"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-12 w-12 place-items-center rounded-full border border-zinc-300 bg-white text-zinc-950 transition hover:-translate-y-1 hover:border-amber-500 hover:text-amber-600"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/hrishithorat"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-12 w-12 place-items-center rounded-full border border-zinc-300 bg-white text-zinc-950 transition hover:-translate-y-1 hover:border-amber-500 hover:text-amber-600"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/hrishi__thorat"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-12 w-12 place-items-center rounded-full border border-zinc-300 bg-white text-zinc-950 transition hover:-translate-y-1 hover:border-amber-500 hover:text-amber-600"
              aria-label="Twitter profile"
            >
              <Twitter size={20} />
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="grid h-12 w-12 place-items-center rounded-full border border-zinc-300 bg-white text-zinc-950 transition hover:-translate-y-1 hover:border-amber-500 hover:text-amber-600"
              aria-label="Send email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-2xl shadow-zinc-900/10"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm font-black">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-950 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/15"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-950 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/15"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm font-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me what you want to build..."
              required
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-950 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/15"
            />
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3 font-black text-white shadow-lg shadow-zinc-900/20 transition hover:bg-zinc-800"
          >
            Send Message
            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
