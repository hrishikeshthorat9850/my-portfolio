"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import LottieAnimation from "./LottieAnimation";
export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        fullScreen: false,
        background: {
          color: { value: "#0f172a" },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#888",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
