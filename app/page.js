"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import AboutMe from "@/components/about";
import Skills from "@/components/skills";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import { useTheme } from "@/context/ThemeContext";

function AppContent() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`font-sans flex min-h-screen w-full flex-col overflow-hidden ${
        darkMode
          ? "bg-[#060607] text-white"
          : "bg-[#f6f3ee] text-zinc-950"
      }`}
    >
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />

      <main className="w-full pt-24">
        <section id="hero" className="scroll-mt-28">
          <Hero />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="about" className="scroll-mt-24">
          <AboutMe />
        </section>
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="contact" className="scroll-mt-24">
          <ContactForm />
        </section>
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default function Home() {
  return <AppContent />;
}
