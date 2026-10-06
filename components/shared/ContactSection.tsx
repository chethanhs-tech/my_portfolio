"use client";

import { useState } from "react";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_METADATA } from "@/data/content";

const STEPS = [
  { id: 1, title: "What's your name?", placeholder: "Your name or team", name: "name" },
  { id: 2, title: "What's your email?", placeholder: "Your email", name: "email" },
  { id: 3, title: "What are you working on?", placeholder: "Tell me a little about it", name: "project" },
  { id: 4, title: "Your message?", placeholder: "Write your message", name: "message" },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SITE_METADATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleNext = () => {
    const currentField = STEPS[currentStep - 1].name;
    if (!formData[currentField as keyof typeof formData].trim()) {
      setError("Please fill out this field.");
      return;
    }
    
    // basic email validation
    if (currentField === "email" && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    if (currentStep < STEPS.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit via mailto
      const subject = `New Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.project}\n\nMessage:\n${formData.message}`;
      window.location.href = `mailto:${SITE_METADATA.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Reset form after a brief delay
      setTimeout(() => {
        setCurrentStep(1);
        setFormData({ name: "", email: "", project: "", message: "" });
      }, 1000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section id="contact" className="flex flex-col gap-0 border-t border-border/50">
      
      {/* 1. Header */}
      <div className="py-12 md:py-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground">
          Let's Talk
        </h2>
      </div>

      <div className="w-full h-8 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)] border-y border-border/30" />

      {/* 2. Direct Inbox */}
      <div className="py-12 md:py-20 flex flex-col gap-6 relative group">
        <span className="text-sm font-mono text-muted uppercase tracking-wider">Direct Inbox</span>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <a 
            href={`mailto:${SITE_METADATA.email}`}
            className="text-[clamp(1.75rem,5vw,3.5rem)] lg:text-[clamp(2.5rem,4vw,4.5rem)] font-bold tracking-tighter text-foreground hover:text-muted transition-colors break-words"
          >
            {SITE_METADATA.email}
          </a>
          <button 
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-muted hover:text-foreground transition-colors md:pb-2 shrink-0"
          >
            {copied ? (
              <><Check className="w-4 h-4" /> COPIED</>
            ) : (
              <>COPY <ArrowUpRight className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-border/50" />

      {/* 3. Drop a Line (Form) */}
      <div className="py-12 md:py-20 flex flex-col gap-12">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-mono text-muted uppercase tracking-wider">Drop A Line</span>
          <span className="text-sm font-mono text-muted uppercase tracking-wider">
            {String(currentStep).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}
          </span>
        </div>

        <div className="relative min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col gap-6"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                {STEPS[currentStep - 1].title}
              </h3>
              
              <div className="relative flex items-center border-b border-border/50 focus-within:border-foreground/50 transition-colors pb-4">
                {currentStep === 4 ? (
                  <textarea
                    value={formData[STEPS[currentStep - 1].name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [STEPS[currentStep - 1].name]: e.target.value })}
                    onKeyDown={handleKeyDown}
                    placeholder={STEPS[currentStep - 1].placeholder}
                    className="w-full bg-transparent text-lg md:text-xl text-foreground placeholder:text-muted/50 focus:outline-none resize-none h-12"
                  />
                ) : (
                  <input
                    type={currentStep === 2 ? "email" : "text"}
                    value={formData[STEPS[currentStep - 1].name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [STEPS[currentStep - 1].name]: e.target.value })}
                    onKeyDown={handleKeyDown}
                    placeholder={STEPS[currentStep - 1].placeholder}
                    className="w-full bg-transparent text-lg md:text-xl text-foreground font-mono placeholder:text-muted/50 focus:outline-none"
                  />
                )}
                
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 shrink-0 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-md transition-colors ml-4"
                >
                  <ArrowRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
              {error && <span className="text-red-400/80 text-sm">{error}</span>}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full h-[1px] bg-border/50" />

      {/* 4. Connect */}
      <div className="py-12 md:py-20 flex flex-col gap-8">
        <span className="text-sm font-mono text-muted uppercase tracking-wider">Connect</span>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a 
            href={SITE_METADATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-muted hover:text-foreground transition-colors"
          >
            <FaGithub className="w-5 h-5 group-hover:-translate-y-[1px] transition-transform" />
            <span className="font-mono text-sm">/ chethanhs-tech</span>
          </a>
          
          <a 
            href={SITE_METADATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 text-muted hover:text-foreground transition-colors"
          >
            <FaLinkedin className="w-5 h-5 group-hover:-translate-y-[1px] transition-transform" />
            <span className="font-mono text-sm">/ Chethan H S</span>
          </a>

          <a 
            href={`mailto:${SITE_METADATA.email}`}
            className="group flex items-center gap-4 text-muted hover:text-foreground transition-colors"
          >
            <FaEnvelope className="w-5 h-5 group-hover:-translate-y-[1px] transition-transform" />
            <span className="font-mono text-sm">/ chethanhs.tech@gmail.com</span>
          </a>
        </div>
      </div>

    </section>
  );
}
