"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function NavigationHUD() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "scale", "retail", "dining", "events", "venues", "audience"];
      let current = "hero";
      
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 300) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", label: "01. Intro" },
    { id: "scale", label: "02. Scale" },
    { id: "retail", label: "03. Retail" },
    { id: "dining", label: "04. Dining" },
    { id: "events", label: "05. Events" },
    { id: "venues", label: "06. Venues" },
    { id: "audience", label: "07. Audience" },
  ];

  return (
    <>
      {/* Sticky Top Header */}
      <motion.header 
        style={{ backgroundColor: `rgba(0, 0, 0, ${bgOpacity.get() * 0.8})` }}
        className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 backdrop-blur-md transition-colors duration-300"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollTo("hero")}>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-black font-playfair">M</div>
            <span className="font-bold tracking-[0.2em] uppercase text-xs">Mall of America</span>
          </div>
          
          <motion.div style={{ opacity }} className="hidden md:block">
            <span className="text-[#C9A84C] text-[10px] uppercase tracking-[0.3em] font-bold">Partner Experience Deck</span>
          </motion.div>
        </div>
      </motion.header>

      {/* Digideck Vertical Side Nav */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group flex items-center gap-4"
          >
            <div className={`w-1 transition-all duration-500 ${activeSection === item.id ? "h-8 bg-[#C9A84C]" : "h-2 bg-white/20 group-hover:bg-white/50"}`} />
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 transform origin-left ${activeSection === item.id ? "text-[#C9A84C] opacity-100 scale-110" : "text-white opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0"}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
