"use client";

import CinematicHero from "@/components/cinematic/CinematicHero";
import MetricCounter from "@/components/motion/MetricCounter";
import ImmersivePanel from "@/components/sections/ImmersivePanel";
import DiningLifestyle from "@/components/sections/DiningLifestyle";
import EventPlatform from "@/components/sections/EventPlatform";
import VenueExplorer from "@/components/sections/VenueExplorer";
import { useState, useEffect } from "react";
import AudienceStats from "@/components/sections/AudienceStats";
import FloatingCTA from "@/components/ui/FloatingCTA";
import MediaGrid from "@/components/ui/MediaGrid";
import SectionReveal from "@/components/motion/SectionReveal";
import NavigationHUD from "@/components/navigation/NavigationHUD";
import CinematicSequence from "@/components/cinematic/CinematicSequence";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // Lock body scroll while intro is playing
    if (!introFinished) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [introFinished]);

  return (
    <main className="min-h-screen bg-[#000000] text-white selection:bg-[#C9A84C] selection:text-black">
      {!introFinished && <CinematicSequence onComplete={() => setIntroFinished(true)} />}
      
      <NavigationHUD />
      <FloatingCTA />
      
      <div id="hero">
        <CinematicHero 
          title="Experience The Extraordinary" 
          subtitle="North America's premier destination for retail, dining, and world-class entertainment."
          backgroundImages={["/assets/hero.png", "/assets/retail.png", "/assets/events.png"]}
        />
      </div>

      <div id="scale">
        <SectionReveal className="py-32 bg-[#000000] border-y border-white/5">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 divide-y md:divide-y-0 md:divide-x divide-white/5">
          <MetricCounter target={40} label="Million Annual Visitors" suffix="M+" />
          <MetricCounter target={520} label="World-Class Retailers" suffix="+" />
          <MetricCounter target={2} label="Billion Economic Impact" prefix="$" suffix="B" />
        </div>
      </SectionReveal>
      </div>

      <div id="retail">
        <ImmersivePanel 
          imageSrc="/assets/retail.png"
          title="Elevated Retail"
          subtitle="The Luxury Collection"
          description="Join the world's most prestigious brands in our newly expanded North Wing. Designed for flagship experiences and high-net-worth clientele."
          alignment="left"
        />

        <SectionReveal className="py-32">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-16">
              <h2 className="font-playfair text-5xl md:text-7xl text-white mb-6">Curated Experiences</h2>
              <p className="text-[#9B97B2] text-xl max-w-2xl font-light">A snapshot of the moments that define the property.</p>
            </div>
          <MediaGrid 
            images={[
              { id: "1", src: "/assets/events.png", alt: "Concert", span: "row-span-2" },
              { id: "2", src: "/assets/retail.png", alt: "Retail", span: "col-span-1" },
              { id: "3", src: "/assets/hero.png", alt: "Aerial", span: "col-span-1" },
            ]} 
          />
        </div>
        </SectionReveal>
      </div>

      <div id="dining">
        <DiningLifestyle />
      </div>

      <div id="events">
        <EventPlatform />
      </div>

      <div id="venues">
        <VenueExplorer />
      </div>
      
      <div id="audience">
        <AudienceStats />
      </div>

    </main>
  );
}
