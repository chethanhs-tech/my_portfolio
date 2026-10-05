"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Link as LinkIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { 
  SITE_METADATA, 
  FOCUS,
  PROJECTS, 
  DEV_NOTES_DRAFTS, 
  SKILLS, 
  JOURNEY 
} from "@/data/content";
import { TechChips } from "@/components/shared/TechChips";
import { ContactSection } from "@/components/shared/ContactSection";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { WritingCard } from "@/components/shared/WritingCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-24">
      
      {/* HERO SECTION (BANNER + PROFILE) */}
      <section className="flex flex-col w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] -mx-6 md:-mx-12">
        {/* Banner Area */}
        <div className="relative w-full h-[250px] md:h-[320px] bg-surface flex flex-col items-center justify-center p-6 text-center border-b border-border/50">
          {/* Subtle star-like/noise background effect */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-foreground/5 via-background to-background"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10 flex flex-col items-center gap-2 md:gap-4 px-4"
          >
            <p className="text-muted/80 text-sm md:text-xl font-medium tracking-wide">
              Everyone is building a version of themselves to be seen.
            </p>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground max-w-4xl leading-snug md:leading-tight">
              I am building the version that refuses to be seen and still wins.
            </h1>
          </motion.div>
        </div>

        {/* Profile Area */}
        <div className="relative w-full bg-background px-6 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="shrink-0 relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-border/30 bg-muted"
          >
            <Image
              src="/profile.jpg"
              alt="Chethan H S"
              fill
              sizes="(max-width: 768px) 160px, 224px"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Profile Info */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start gap-1 md:gap-2 w-full md:mt-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              {SITE_METADATA.name}
            </h2>
            <div className="text-muted text-lg md:text-2xl font-medium mt-1">
              Developing Cloud Engineer & AI Enthusiast
            </div>
            <div className="text-muted/80 text-sm md:text-lg font-mono mt-2">
              20, {SITE_METADATA.location}
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <a 
                href={`mailto:${SITE_METADATA.email}`}
                className="px-6 py-2.5 bg-foreground text-background text-sm font-semibold rounded-lg hover:bg-foreground/90 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href={SITE_METADATA.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-background border border-border/80 text-foreground text-sm font-semibold rounded-lg hover:bg-white/5 transition-colors"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* EDITORIAL SEPARATOR (STRIPED) */}
        <div className="w-full h-8 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)] border-y border-border/30" />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="flex flex-col gap-8 px-4 md:px-0">
        <div className="flex items-center gap-4 border-b border-border/50 pb-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted">A Little About Me</h2>
        </div>
        
        <div className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-p:text-muted/90 prose-li:text-muted/90 prose-li:marker:text-muted/50">
          <ul className="space-y-4">
            <li>I'm a Computer Science & Engineering student at BIET who builds full-stack applications with intelligent systems at their core.</li>
            <li>I work across React, Node.js, Python, and SQL, building scalable interfaces and backend architectures that are reliable and fast.</li>
            <li>I enjoy working with modern cloud primitives and applying GenAI to practical software problems — from real-time state synchronization to AI-assisted proctoring.</li>
            <li>My philosophy is "learning by building" — every project I tackle is an excuse to master a new paradigm and turn messy problems into clean, functional code.</li>
          </ul>
        </div>
      </section>


      {/* 2. WORK / PROJECTS SECTION */}
      <section id="work" className="flex flex-col gap-8">
        <div className="flex items-baseline justify-between border-b border-border/50 pb-6">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
            Selected Work
          </h2>
          <span className="text-sm font-mono text-muted uppercase tracking-wider">01</span>
        </div>
        
        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </div>
      </section>

      
      {/* 3. THINGS I KNOW (SKILLS) */}
      <section id="skills" className="flex flex-col gap-8">
        <div className="flex items-baseline justify-between border-b border-border/50 pb-6">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
            Things I Know
          </h2>
          <span className="text-sm font-mono text-muted uppercase tracking-wider">02</span>
        </div>
        
        <TechChips />
      </section>


      {/* 4. JOURNEY / EXPERIENCE */}
      <section id="journey" className="flex flex-col gap-8">
        <div className="flex items-baseline justify-between border-b border-border/50 pb-6">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
            Journey
          </h2>
          <span className="text-sm font-mono text-muted uppercase tracking-wider">03</span>
        </div>
        
        <div className="flex flex-col border-l border-border/50 ml-2 md:ml-4">
          {JOURNEY.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 py-8 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-10 w-2 h-2 bg-border -translate-x-[5px] rounded-full group-hover:bg-foreground group-hover:scale-150 transition-all duration-300" />
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-mono text-muted uppercase tracking-wider">
                  {exp.year}
                </span>
                <h3 className="text-xl md:text-2xl font-medium text-foreground">
                  {exp.title}
                </h3>
                {exp.description && (
                  <p className="text-muted mt-2 max-w-2xl leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* 5. DEV NOTES / WRITING */}
      <section id="notes" className="flex flex-col gap-8">
        <div className="flex items-baseline justify-between border-b border-border/50 pb-6">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
            Dev Notes
          </h2>
          <span className="text-sm font-mono text-muted uppercase tracking-wider">04</span>
        </div>
        
        <div className="flex flex-col">
          {DEV_NOTES_DRAFTS.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WritingCard {...post} />
            </motion.div>
          ))}
        </div>
      </section>


      {/* 6. CONTACT SECTION */}
      <ContactSection />

    </div>
  );
}
