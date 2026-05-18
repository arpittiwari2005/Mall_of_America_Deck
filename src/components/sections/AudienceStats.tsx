"use client";

import { motion } from "framer-motion";
import SectionReveal from "../motion/SectionReveal";

const demographics = [
  { label: "Local (0-50 mi)", value: 45, color: "#6B21A8" },
  { label: "Regional (50-200 mi)", value: 25, color: "#C9A84C" },
  { label: "National/Intl", value: 30, color: "#F0D080" },
];

const incomeStats = [
  { label: "$100k+", percentage: 65 },
  { label: "$75k - $99k", percentage: 20 },
  { label: "Other", percentage: 15 },
];

export default function AudienceStats() {
  return (
    <SectionReveal className="py-24 bg-gradient-to-b from-[#05030A] to-[#0a0514]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C9A84C] mb-4 block">The Audience</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-white mb-6">Who Are You Reaching?</h2>
          <p className="text-[#9B97B2] max-w-2xl mx-auto text-lg">
            Our visitors aren&apos;t just passing through. They travel further, stay longer, and spend more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Chart 1: Demographics */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="font-bold text-xl text-white mb-8 border-b border-white/10 pb-4">Origin of Visitor</h3>
            <div className="flex h-12 rounded-full overflow-hidden mb-8">
              {demographics.map((demo, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${demo.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                  style={{ backgroundColor: demo.color }}
                  className="h-full flex items-center justify-center relative group"
                >
                  <span className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-black text-white text-xs px-2 py-1 rounded transition-opacity whitespace-nowrap">
                    {demo.value}%
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm justify-between">
              {demographics.map((demo, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: demo.color }} />
                  <span className="text-white/70">{demo.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 2: Income */}
          <div>
            <h3 className="font-bold text-xl text-white mb-8">Household Income</h3>
            <div className="space-y-6">
              {incomeStats.map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white font-medium">{stat.label}</span>
                    <span className="text-[#C9A84C] font-bold">{stat.percentage}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.2), ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#C9A84C] to-[#F0D080]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
