"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Images,
  X,
} from "lucide-react";

const projects = [
  {
    title: "BAU AI",
    description:
      "An AI-powered construction management platform that streamlines project scheduling, resource optimization, and on-site documentation for construction teams.",
    image: "/bauai.png",
    url: "https://bauaiapp.de/",
    live: true,
    tags: ["Next.js", "AI/ML", "SaaS", "Cloud"],
    type: "AI construction SaaS",
  },
  {
    title: "DairyWebApp",
    description:
      "A milk collection center app for managing farmers, daily entries, rates, and collection records.",
    image: "/dairywebapp.png",
    github: "https://github.com/hrishikeshthorat9850/milk-collection-center",
    tags: ["Node.js", "Express", "MongoDB"],
    type: "Full-stack dashboard",
  },
  {
    title: "Todo App",
    description:
      "A focused task manager with authentication, task organization, and a responsive dashboard interface.",
    image: "/TodoApp.png",
    github: "https://github.com/hrishikeshthorat9850/TodoApp",
    tags: ["React", "Supabase", "Tailwind"],
    type: "Productivity app",
  },
  {
    title: "AgroPeer",
    description:
      "A smart farming companion app with AI crop advice, market price insights, weather, and a farmer community feed — published on the Google Play Store.",
    image: "/agropeer/main.jpg",
    url: "https://play.google.com/store/apps/details?id=com.hrishikesh.agrogram",
    live: true,
    tags: ["React Native", "AI", "Supabase"],
    type: "Agri-tech app",
    gallery: [
      "/agropeer/shot-1.jpg",
      "/agropeer/shot-2.jpg",
      "/agropeer/shot-3.jpg",
      "/agropeer/shot-4.jpg",
      "/agropeer/shot-5.jpg",
      "/agropeer/shot-6.jpg",
      "/agropeer/shot-7.jpg",
    ],
  },
];

function Lightbox({ images, title, index, setIndex, onClose }) {
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length, setIndex]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length, setIndex]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [next, prev, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Close gallery"
      >
        <X size={20} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
        aria-label="Previous screenshot"
      >
        <ChevronLeft size={22} />
      </button>

      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          className="max-h-[82vh] w-auto rounded-2xl border border-white/10 shadow-2xl"
        />
      </motion.div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
        aria-label="Next screenshot"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/50 px-4 py-1.5 text-sm font-bold text-white">
        {index + 1} / {images.length}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  // { images, title, index } when open, otherwise null
  const [lightbox, setLightbox] = useState(null);

  const openGallery = (project, startIndex = 0) =>
    setLightbox({ images: project.gallery, title: project.title, index: startIndex });

  const setIndex = (updater) =>
    setLightbox((lb) =>
      lb ? { ...lb, index: typeof updater === "function" ? updater(lb.index) : updater } : lb
    );

  return (
    <section
      id="projects"
      className="section-shell overflow-hidden bg-white text-zinc-950 dark:bg-[#0b0b0c] dark:text-white"
    >
      <div className="aurora aurora-amber -right-20 top-10 h-64 w-64 opacity-20 dark:opacity-30" />
      <div className="section-inner">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3">
              <span className="font-mono text-zinc-500">01</span> Selected Work
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Projects that show product thinking, not just UI screens.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Each project focuses on a practical workflow, clear data, and
            responsive implementation.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => {
            const href = project.live ? project.url : project.github;
            const LinkIcon = project.live ? ExternalLink : Github;
            const linkLabel = project.live ? "Visit site" : "View repository";
            const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className={`card-surface card-hover group overflow-hidden rounded-2xl ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "h-72" : "h-56"}`}>
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <p className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    {project.type}
                  </p>
                  {hasGallery && (
                    <button
                      onClick={() => openGallery(project, 0)}
                      className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-xs font-bold text-white backdrop-blur transition hover:bg-amber-400 hover:text-black"
                    >
                      <Images size={14} />
                      {project.gallery.length} screenshots
                    </button>
                  )}
                </div>

                <div className="p-5">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black">{project.title}</h3>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-900 transition hover:rotate-6 hover:bg-amber-400 hover:text-black dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
                      aria-label={`${project.title} — ${linkLabel}`}
                    >
                      <LinkIcon size={18} />
                    </Link>
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-bold text-zinc-600 dark:border-white/10 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {hasGallery && (
                    <div className="mt-5 grid grid-cols-4 gap-2">
                      {project.gallery.slice(0, 4).map((src, i) => {
                        const remaining = project.gallery.length - 4;
                        const isLast = i === 3 && remaining > 0;
                        return (
                          <button
                            key={src}
                            onClick={() => openGallery(project, i)}
                            className="group/thumb relative aspect-square overflow-hidden rounded-lg border border-zinc-200 dark:border-white/10"
                            aria-label={`Open screenshot ${i + 1}`}
                          >
                            <Image
                              src={src}
                              alt={`${project.title} thumbnail ${i + 1}`}
                              fill
                              sizes="120px"
                              className="object-cover transition duration-500 group-hover/thumb:scale-110"
                            />
                            {isLast && (
                              <span className="absolute inset-0 grid place-items-center bg-black/60 text-sm font-black text-white">
                                +{remaining}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-black text-amber-600 transition hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-200"
                  >
                    {linkLabel}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            title={lightbox.title}
            index={lightbox.index}
            setIndex={setIndex}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
