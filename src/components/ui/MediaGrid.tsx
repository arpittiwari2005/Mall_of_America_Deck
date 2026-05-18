"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionReveal from "../motion/SectionReveal";

interface MediaItem {
  id: string;
  src: string;
  alt: string;
  span?: "col-span-1" | "col-span-2" | "row-span-2";
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 50 }
  }
};

export default function MediaGrid({ images }: { images: MediaItem[] }) {
  return (
    <SectionReveal>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {images.map((img) => (
          <motion.div
            key={img.id}
            variants={item}
            className={`relative overflow-hidden rounded-xl group bg-white/5 ${img.span || "col-span-1"}`}
          >
            <div className="aspect-[4/3] w-full h-full">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionReveal>
  );
}
