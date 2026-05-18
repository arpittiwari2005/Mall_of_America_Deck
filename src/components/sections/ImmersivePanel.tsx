"use client";

import { motion } from "framer-motion";

interface ImmersivePanelProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  alignment?: "left" | "right" | "center";
}

export default function ImmersivePanel({
  imageSrc,
  title,
  subtitle,
  description,
  alignment = "left",
}: ImmersivePanelProps) {
  const alignClass =
    alignment === "left"
      ? "md:items-start md:text-left text-center"
      : alignment === "right"
      ? "md:items-end md:text-right text-center ml-auto"
      : "items-center text-center mx-auto";

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: alignment === "right" ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`max-w-2xl flex flex-col ${alignClass}`}
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#C9A84C] mb-4 block">
            {subtitle}
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl text-white mb-6">
            {title}
          </h2>
          <p className="text-[#9B97B2] text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
