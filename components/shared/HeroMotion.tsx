"use client";

import { motion } from "framer-motion";

export function HeroMotion() {
  return (
    <div className="relative w-full h-[55vh] min-h-[400px] flex flex-col items-center justify-center p-6 text-center border-b border-border/20 overflow-hidden bg-background">
      
      {/* 
        Aarab-style lightweight ambient background.
        GPU-accelerated subtle horizontal motion using CSS. 
        Replicating the streak/hyperspace effect cleanly.
      */}
      <style jsx global>{`
        @keyframes panLeftHero {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div 
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30 dark:opacity-60"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 80%)',
        }}
      >
        <div 
          className="absolute top-0 left-0 h-full w-[200%]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 0%, var(--foreground) 50%, transparent 100%),
              linear-gradient(90deg, transparent 0%, var(--foreground) 50%, transparent 100%),
              linear-gradient(90deg, transparent 0%, var(--foreground) 50%, transparent 100%),
              linear-gradient(90deg, transparent 0%, var(--foreground) 50%, transparent 100%)
            `,
            backgroundSize: '300px 1px, 200px 1px, 400px 1.5px, 250px 1px',
            backgroundPosition: '50px 30px, 180px 70px, 300px 120px, 80px 160px',
            backgroundRepeat: 'repeat',
            animation: 'panLeftHero 20s linear infinite'
          }}
        />
      </div>

      <div className="z-10 flex flex-col items-center gap-4 md:gap-5 px-4 max-w-4xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-sm md:text-base font-normal tracking-wide"
        >
          Treating every project as an excuse to learn a new paradigm.
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-foreground leading-[1.15] md:leading-[1.1] max-w-3xl"
        >
          I build things that think,<br className="hidden sm:block" /> connect, and scale.
        </motion.h1>
      </div>
    </div>
  );
}
