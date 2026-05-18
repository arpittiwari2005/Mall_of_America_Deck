"use client";

import { motion } from "framer-motion";
import SectionReveal from "../motion/SectionReveal";
import { Award, Sparkles, CalendarDays, ArrowRight } from "lucide-react";

const platformHighlights = [
  {
    title: "Global activations",
    description: "World-class brands launch limited-time experiences to captive audiences of 40M+ annual visitors.",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: "Venue scale",
    description: "From broadcast-worthy arenas to flexible expo halls, every activation lands with professional production value.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    title: "Sponsorship reach",
    description: "Integrated audience touchpoints across retail, entertainment and digital channels extend every campaign beyond the mall floor.",
    icon: <CalendarDays className="w-5 h-5" />,
  },
];

export default function EventPlatform() {
  return (
    <SectionReveal className="py-32 bg-[#05030A] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="space-y-8">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C9A84C]">
              Events & Platform
            </span>
            <h2 className="font-playfair text-5xl md:text-6xl text-white max-w-2xl">
              More than a venue. An activation engine.
            </h2>
            <p className="text-[#9B97B2] text-lg leading-relaxed max-w-2xl">
              MOA is built for large-scale moments — concerts, premieres, conventions, and branded launches that command attention, drive commerce, and create lifelong fan loyalty.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {platformHighlights.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#C9A84C]/10 text-[#C9A84C] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-[#9B97B2] text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="font-playfair text-3xl text-white mb-4">Book the high-impact stage</h3>
              <p className="text-[#9B97B2] mb-6">Prospective partners can tap into premium sponsorship packages, branded pop-ups, and arena-scale entertainment programming.</p>
              <button className="inline-flex items-center gap-3 rounded-full bg-[#C9A84C] px-8 py-4 text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#d4c56f] transition-colors">
                Request Venue Access
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-black">
            <img
              src="/assets/events.png"
              alt="Mall event activation"
              className="w-full h-full object-cover min-h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A84C] mb-3 inline-block">Showcase</span>
              <h3 className="font-playfair text-4xl text-white">Concerts, conventions, and brand-first activations.</h3>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
