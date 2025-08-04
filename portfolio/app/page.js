"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import AboutMe from "@/components/about";
import Skills from "@/components/skills";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

function AppContent() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`font-sans flex flex-col min-h-screen w-full ${
        darkMode
          ? "bg-black text-white"
          : "bg-gradient-to-br from-black via-zinc-900 to-neutral-950 text-white"
      }`}
    >
      {/* Fixed Header */}
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-28 space-y-24">
        <section id="hero" className="scroll-mt-28">
          <Hero />
        </section>
        <section id="projects" className="scroll-mt-28">
          <Projects />
        </section>
        <section id="about" className="scroll-mt-28">
          <AboutMe />
        </section>
        <section id="skills" className="scroll-mt-28">
          <Skills />
        </section>
        <section id="contact" className="scroll-mt-28">
          <ContactForm />
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-24">
        <Footer />
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
