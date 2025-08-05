"use client";

import dynamic from "next/dynamic";

// 👇 Dynamically import the Player component with SSR disabled
const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

export default function LottieAnimation() {
  return (
    <LottiePlayer
      autoplay
      loop
      src="https://assets2.lottiefiles.com/packages/lf20_x62chJ.json"
      style={{ height: "300px", width: "300px" }}
    />
  );
}
