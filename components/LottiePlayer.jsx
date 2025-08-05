// components/LottiePlayer.jsx
"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function LottiePlayer({ src, height = 250, width = 250 }) {
  return (
    <Player
      autoplay
      loop
      src={src}
      style={{ height, width, marginTop: "2rem" }}
    />
  );
}
