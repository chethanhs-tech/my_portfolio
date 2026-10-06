"use client";

import { motion } from "framer-motion";

export function HeroMotion() {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] bg-background flex flex-col items-center justify-center p-6 text-center border-b border-border/10 overflow-hidden">
      
      {/* 
        Aarab-style lightweight ambient background.
        Using extremely performant CSS radial gradients instead of heavy DOM nodes, 
        particles, or continuous JS calculations.
      */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% -20%, rgba(150,150,150,0.15) 0%, transparent 70%)'
        }}
      />

      <div className="z-10 flex flex-col items-center gap-6 px-4 max-w-4xl mx-auto mt-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted text-sm sm:text-base md:text-lg font-medium tracking-wide"
        >
          Treating every project as an excuse to learn a new paradigm.
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.15]"
        >
          I build things that think, connect, and scale.
        </motion.h1>
      </div>
    </div>
  );
}
