"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicSequence({ onComplete }: { onComplete?: () => void }) {
  const [frame, setFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    // Sequence timings
    const timings = [
      3000, // Frame 0: “Some places...”
      3500, // Frame 1: “This attracts...”
      3500, // Frame 2: Montage
      3000, // Frame 3: 40M+
      4000, // Frame 4: CTA
    ];

    if (frame < timings.length) {
      const timer = setTimeout(() => {
        setFrame((prev) => prev + 1);
      }, timings[frame]);
      return () => clearTimeout(timer);
    }

    const finishTimer = setTimeout(() => {
      setIsPlaying(false);
      if (onComplete) onComplete();
    }, 0);

    return () => clearTimeout(finishTimer);
  }, [frame, isPlaying, onComplete]);

  const handleSkip = () => {
    setIsPlaying(false);
    if (onComplete) onComplete();
  };

  if (!isPlaying) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="https://cdn.coverr.co/videos/coverr-shopping-mall-interior-5553/1080p.mp4" type="video/mp4" />
      </video>
      <button 
        onClick={handleSkip}
        className="absolute top-8 right-8 z-50 text-white/80 hover:text-white uppercase tracking-[0.2em] text-xs font-bold bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 transition-colors"
      >
        Skip ↓
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#C9A84C] to-[#6B21A8] w-full origin-left" style={{ animation: "progress 17s linear forwards" }} />
      <style dangerouslySetInnerHTML={{ __html: `@keyframes progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }` }} />

      <AnimatePresence mode="wait">
        {/* FRAME 0 */}
        {frame === 0 && (
          <motion.div
            key="f0"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-45">
              <source src="https://cdn.coverr.co/videos/coverr-shopping-mall-interior-5553/1080p.mp4" type="video/mp4" />
            </video>
            <motion.div
              initial={{ letterSpacing: "0.5em" }}
              animate={{ letterSpacing: "0.1em" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-10 text-white text-2xl md:text-4xl font-light font-outfit"
            >
              “Some places attract shoppers.”
            </motion.div>
          </motion.div>
        )}

        {/* FRAME 1 */}
        {frame === 1 && (
          <motion.div
            key="f1"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-65 blur-[2px]">
              <source src="https://cdn.coverr.co/videos/coverr-shopping-mall-interior-5553/1080p.mp4" type="video/mp4" />
            </video>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative z-10 text-white text-4xl md:text-6xl font-playfair italic text-center"
            >
              “This attracts the world.”
            </motion.div>
          </motion.div>
        )}

        {/* FRAME 2: Montage */}
        {frame === 2 && (
          <motion.div
            key="f2"
            className="absolute inset-0 flex items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60 blur-[1px]">
              <source src="https://cdn.coverr.co/videos/coverr-shopping-mall-interior-5553/1080p.mp4" type="video/mp4" />
            </video>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 text-[#C9A84C] text-sm md:text-lg font-bold tracking-[0.4em] uppercase bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm"
            >
              Retail · Entertainment · Culture
            </motion.div>
          </motion.div>
        )}

        {/* FRAME 3: Metric */}
        {frame === 3 && (
          <motion.div
            key="f3"
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[#050310]/80 z-0" />
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-screen">
              <source src="https://cdn.coverr.co/videos/coverr-shopping-mall-interior-5553/1080p.mp4" type="video/mp4" />
            </video>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 12, delay: 0.2 }}
              className="relative z-10 text-[6rem] md:text-[12rem] font-black leading-none bg-gradient-to-br from-[#C9A84C] via-[#F0D080] to-[#C9A84C] text-transparent bg-clip-text"
            >
              40M+
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative z-10 text-white/80 tracking-[0.3em] uppercase text-sm md:text-base font-bold mt-4"
            >
              Annual Visitors · #1 Destination
            </motion.div>
          </motion.div>
        )}

        {/* FRAME 4: CTA */}
        {frame === 4 && (
          <motion.div
            key="f4"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-45">
              <source src="https://cdn.coverr.co/videos/coverr-shopping-mall-interior-5553/1080p.mp4" type="video/mp4" />
            </video>
            
            <div className="relative z-10 text-center px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[#C9A84C] text-xs font-bold tracking-[0.4em] uppercase mb-6"
              >
                Mall of America
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white text-5xl md:text-7xl font-playfair mb-6"
              >
                Explore<br />The Opportunity
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-white/80 text-lg md:text-xl font-light mb-12"
              >
                The most visited destination in the United States<br />is ready for its next great partner.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                onClick={handleSkip}
                className="bg-gradient-to-r from-[#C9A84C] to-[#F0D080] text-black px-10 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform"
              >
                Enter the Experience →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
