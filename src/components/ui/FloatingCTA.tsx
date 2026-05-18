"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, X } from "lucide-react";

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
    }, 2500);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="fixed bottom-8 right-8 z-50 flex flex-col gap-3"
      >
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-white text-black font-bold uppercase tracking-wider text-xs px-6 py-4 rounded-full shadow-[0_10px_40px_rgba(201,168,76,0.3)] transition-all duration-300 transform hover:-translate-y-1 group"
        >
          Inquire Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <a 
          href="/assets/media-kit.pdf"
          download
          className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold uppercase tracking-wider text-[10px] px-6 py-3 rounded-full transition-all duration-300"
        >
          <Download className="w-3 h-3" />
          Media Kit
        </a>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#0a0514] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="font-playfair text-3xl text-white mb-2">Let&apos;s Talk</h3>
                    <p className="text-[#9B97B2] text-sm">Fill out the form below and our partnerships team will be in touch within 24 hours.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-[#C9A84C] mb-2">Name</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-[#C9A84C] mb-2">Company</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="Brand Inc." />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider uppercase text-[#C9A84C] mb-2">Email</label>
                      <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="john@company.com" />
                    </div>
                    <button type="submit" className="w-full bg-[#C9A84C] hover:bg-white text-black font-bold uppercase tracking-wider text-xs px-6 py-4 rounded-lg mt-4 transition-all duration-300">
                      Submit Inquiry
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#C9A84C]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ArrowRight className="w-8 h-8 text-[#C9A84C]" />
                  </div>
                  <h3 className="font-playfair text-3xl text-white mb-2">Received.</h3>
                  <p className="text-[#9B97B2]">We&apos;ll be in touch shortly.</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
