"use client";

import { motion } from "framer-motion";

export function HeroMotion() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-background flex flex-col items-center justify-center p-6 text-center border-b border-border/50 overflow-hidden">
      {/* Animated subtle gradients/lights */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/[0.03] dark:bg-foreground/[0.02] blur-3xl rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/[0.03] dark:bg-muted/[0.02] blur-3xl rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
      </div>
      
      {/* Grid noise/pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="z-10 flex flex-col items-center gap-6 px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-border/50 text-xs font-mono text-muted uppercase tracking-wider mb-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Available for work
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]"
        >
          I build things that <span className="text-muted">think,</span> <br className="hidden md:block" />
          connect, <span className="text-muted">and scale.</span>
        </motion.h1>
      </div>
    </div>
  );
}
