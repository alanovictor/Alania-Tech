"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Header } from "./Header";
import { basePath } from "@/lib/basePath";

const HERO_IMAGE = "https://picsum.photos/id/60/1600/1000";

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink-900 md:min-h-screen">
      {/* Fallback image — always rendered underneath. Visible only until the
          video is actually ready to play; once the video takes over, this
          fades fully out so it never mixes/blends with the video on top. */}
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover mix-blend-luminosity transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-[0.55]"
        }`}
      />

      {/* Background video — only becomes visible once it's actually able to
          play; until then it stays fully transparent and the image above
          does the job. Shown near its original color (no blend/tint), just
          full opacity. Drop the real file at /public/videos/hero-bg.mp4
          (and an optional .webm) to activate it. */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        poster={HERO_IMAGE}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
        onError={() => setVideoReady(false)}
      >
        <source src={`${basePath}/videos/hero-bg.webm`} type="video/webm" />
        <source src={`${basePath}/videos/hero-bg.mp4`} type="video/mp4" />
      </video>

      {/* Darkening overlays: strong while the fallback image + headline are
          showing (for text contrast), much lighter once the video takes
          over (video should read close to its real color, just a soft
          bottom vignette so it blends into the next section). */}
      <div
        className={`absolute inset-0 bg-brand-deep/30 mix-blend-color transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/35 to-ink-900 transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,7,12,0.55)_70%,rgba(5,7,12,0.85)_100%)] transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-r from-ink-900/70 via-transparent to-ink-900/70 transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* subtle bottom fade, kept even over the video so it meets the next section cleanly */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-ink-900" />

      <Header />

      {/* signature inverted triangle — part of the fallback look, hidden once the video takes over */}
      <svg
        viewBox="0 0 400 400"
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[70%] max-w-[560px] -translate-x-1/2 -translate-y-[46%] transition-opacity duration-500 md:h-[130%] ${
          videoReady ? "opacity-0" : "opacity-90"
        }`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroTri" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1c8dff" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#4fd7f5" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <path
          d="M20 40 L380 40 L200 360 Z"
          fill="url(#heroTri)"
          stroke="#7fd4ff"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
      </svg>

      <div
        className={`relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center transition-opacity duration-500 md:pt-16 ${
          videoReady ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <p className="font-display text-[11px] font-semibold tracking-widest2 text-brand-cyan md:text-xs">
          TECNOLOGIA &middot; INOVAÇÃO &middot; IA &middot; ESTRATÉGIA
        </p>
        <h1 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[1.08] text-white sm:text-5xl md:text-6xl">
          Tecnologia que
          <br />
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Transforma
          </span>{" "}
          negócios
        </h1>
      </div>
    </section>
  );
}
