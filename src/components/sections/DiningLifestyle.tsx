"use client";

import { motion } from "framer-motion";
import SectionReveal from "../motion/SectionReveal";
import MediaGrid from "../ui/MediaGrid";

export default function DiningLifestyle() {
  return (
    <SectionReveal className="py-32 bg-[#05030A] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C9A84C] mb-4 inline-block">
              Dining & Lifestyle
            </span>
            <h2 className="font-playfair text-5xl md:text-6xl text-white mb-6">
              Food, fashion, and culture converge.
            </h2>
            <p className="text-[#9B97B2] text-lg leading-relaxed mb-8">
              At Mall of America, dining is part of the destination. From celebrity chef concepts to immersive food halls, every meal is an opportunity to keep guests on-property longer and lift spend across retail, entertainment and events.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#C9A84C] mb-3">Daily Footfall</p>
                <p className="text-3xl font-bold text-white">100K+</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#C9A84C] mb-3">Prime F&B Positioning</p>
                <p className="text-3xl font-bold text-white">Lifestyle-first</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <MediaGrid
              images={[
                { id: "d1", src: "/assets/events.png", alt: "Signature dining destination" },
                { id: "d2", src: "/assets/hero.png", alt: "High-end lifestyle activation", span: "row-span-2" },
                { id: "d3", src: "/assets/retail.png", alt: "Social food hall" },
              ]}
            />
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
