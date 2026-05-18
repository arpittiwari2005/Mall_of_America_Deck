"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../motion/SectionReveal";
import { MapPin, Users, Music } from "lucide-react";

const venues = [
  {
    id: "concert",
    name: "The Arena",
    capacity: "25,000",
    icon: <Music className="w-5 h-5" />,
    description: "Our premier indoor stadium built for global touring acts and broadcast events.",
    image: "/assets/events.png"
  },
  {
    id: "expo",
    name: "Expo Center",
    capacity: "10,000",
    icon: <MapPin className="w-5 h-5" />,
    description: "A flexible, pillar-less hall perfect for conventions, pop-ups, and massive brand activations.",
    image: "/assets/hero.png" // Placeholder
  },
  {
    id: "luxury",
    name: "North Wing",
    capacity: "Premium",
    icon: <Users className="w-5 h-5" />,
    description: "Intimate, high-end environment for VIP galas, private brand dinners, and exclusive unveilings.",
    image: "/assets/retail.png" // Placeholder
  }
];

export default function VenueExplorer() {
  const [active, setActive] = useState(venues[0]);

  return (
    <SectionReveal className="py-24 bg-[#05030A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C9A84C] mb-4 block">Interactive Maps</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-white">Explore The Venues</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Navigation */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {venues.map((venue) => (
              <button
                key={venue.id}
                onClick={() => setActive(venue)}
                className={`flex items-center gap-6 p-8 rounded-xl border text-left transition-all duration-500 overflow-hidden relative group ${
                  active.id === venue.id
                    ? "bg-[#05030A] border-[#C9A84C] shadow-[0_0_40px_rgba(201,168,76,0.2)]"
                    : "bg-white/5 border-white/5 hover:bg-white/10"
                }`}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#C9A84C]/10 to-transparent opacity-0 transition-opacity duration-500 ${active.id === venue.id ? "opacity-100" : "group-hover:opacity-10"}`} />
                
                <div className={`p-4 rounded-full relative z-10 transition-colors duration-500 ${active.id === venue.id ? "bg-[#C9A84C] text-black shadow-[0_0_20px_rgba(201,168,76,0.4)]" : "bg-white/5 text-white/50 group-hover:text-white"}`}>
                  {venue.icon}
                </div>
                <div className="relative z-10">
                  <h3 className={`font-bold text-2xl mb-1 transition-colors duration-500 ${active.id === venue.id ? "text-[#C9A84C]" : "text-white/80 group-hover:text-white"}`}>
                    {venue.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-white/40 group-hover:text-white/60 transition-colors">Capacity: {venue.capacity}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Display */}
          <div className="w-full lg:w-2/3">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={active.name}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`desc-${active.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="font-playfair text-3xl text-white mb-2">{active.name}</h4>
                    <p className="text-[#9B97B2] max-w-xl">{active.description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
