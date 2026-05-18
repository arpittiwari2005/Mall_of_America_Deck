"use client";

import { motion } from "framer-motion";

interface CinematicHeroProps {
  title: string;
  subtitle: string;
  videoSrc?: string;
  imageSrc?: string;
  backgroundImages?: string[];
}

export default function CinematicHero({ title, subtitle, videoSrc, imageSrc, backgroundImages }: CinematicHeroProps) {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {backgroundImages?.length ? (
        <div className="absolute inset-0 grid grid-cols-1 gap-4 p-6 md:grid-cols-3 z-0">
          {backgroundImages.map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
              <img
                src={src}
                alt={`Mall of America background ${index + 1}`}
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/95" />
        </div>
      ) : videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover brightness-[0.4] z-0"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.45] z-0"
          style={{ backgroundImage: imageSrc ? `url(${imageSrc})` : undefined }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05030A]/35 via-[#05030A]/15 to-[#05030A]/95 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,76,0.18),_transparent_40%)] opacity-80 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[0.7rem] md:text-[0.8rem] font-semibold tracking-[0.45em] uppercase text-[#C9A84C] mb-6"
        >
          Bloomington, Minnesota · Est. 1992
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-playfair text-6xl md:text-[5.5rem] lg:text-[6.5rem] leading-[0.92] tracking-[-0.03em] mb-6 text-white"
        >
          {title.split(" ").map((word, i, arr) =>
            i === arr.length - 2 || i === arr.length - 1 ? (
              <em key={i} className="text-[#C9A84C] italic pr-2">
                {word}{" "}
              </em>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-xl md:text-2xl text-[#D0C58A] font-light max-w-3xl mx-auto mb-12"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mx-auto mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <div className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.25em] text-white/70 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
            Luxury retail • Signature dining • Venue activations
          </div>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#9B97B2]">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 1.2, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#C9A84C] to-transparent origin-top"
        />
      </div>
    </section>
  );
}
