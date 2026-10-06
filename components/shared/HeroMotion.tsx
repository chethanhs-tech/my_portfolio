"use client";

import { motion } from "framer-motion";

export function HeroMotion() {
  return (
    <div className="relative w-full h-[55vh] min-h-[400px] flex flex-col items-center justify-center p-6 text-center border-b border-border/20 overflow-hidden bg-background">
      
      {/* 
        Aarab-style actual motion:
        - Zooming/perspective warp effect (no particles, pure CSS).
        - No spotlight/mesh gradient.
      */}
      <style jsx global>{`
        @keyframes warpZoom {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          20% {
            opacity: 0.3;
          }
          80% {
            opacity: 0.3;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
        .warp-layer {
          position: absolute;
          inset: -100%;
          background-image: radial-gradient(circle at center, var(--foreground) 1px, transparent 1.5px);
          background-size: 100px 100px;
          background-position: center;
          opacity: 0;
          pointer-events: none;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        {/* Layer 1 */}
        <div 
          className="warp-layer"
          style={{ animation: 'warpZoom 8s linear infinite', backgroundSize: '150px 150px' }}
        />
        {/* Layer 2 */}
        <div 
          className="warp-layer"
          style={{ animation: 'warpZoom 8s linear infinite -2.66s', backgroundSize: '200px 200px', transformOrigin: 'center' }}
        />
        {/* Layer 3 */}
        <div 
          className="warp-layer"
          style={{ animation: 'warpZoom 8s linear infinite -5.33s', backgroundSize: '120px 120px', transformOrigin: '40% 60%' }}
        />
      </div>

      <div className="z-10 flex flex-col items-center gap-4 md:gap-5 px-4 max-w-4xl mx-auto w-full">
        {/* Both texts fade in smoothly with NO Y-axis movement and NO delay between them */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-muted-foreground text-sm md:text-base font-normal tracking-wide"
        >
          Treating every project as an excuse to learn a new paradigm.
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-foreground leading-[1.15] md:leading-[1.1] max-w-3xl"
        >
          I build things that think,<br className="hidden sm:block" /> connect, and scale.
        </motion.h1>
      </div>
    </div>
  );
}

