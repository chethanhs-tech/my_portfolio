"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Command, Moon, Sun } from "lucide-react";
import { SITE_METADATA } from "@/data/content";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border/50 py-4">
      <div className="flex items-center justify-between">
        <Link 
          href="/" 
          className="text-lg font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          Chethan.
        </Link>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link 
              href="/" 
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`transition-colors hover:text-foreground ${pathname === "/" ? "text-foreground" : "text-muted"}`}
            >
              Home
            </Link>
            <Link 
              href="/#work" 
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '/#work');
                }
              }}
              className={`transition-colors hover:text-foreground ${pathname === "/#work" ? "text-foreground" : "text-muted"}`}
            >
              Work
            </Link>
            <Link 
              href="/notes" 
              className={`transition-colors hover:text-foreground ${pathname.startsWith("/notes") ? "text-foreground" : "text-muted"}`}
            >
              Notes
            </Link>
            <Link 
              href="/#contact" 
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '/#contact');
                }
              }}
              className={`transition-colors hover:text-foreground ${pathname === "/#contact" ? "text-foreground" : "text-muted"}`}
            >
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link 
              href={SITE_METADATA.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground hover:opacity-80 transition-opacity hidden md:block border border-border/50 px-3 py-1.5 rounded-md"
            >
              Resume
            </Link>
            
            <button 
              onClick={() => document.dispatchEvent(new CustomEvent('open-command-palette'))}
              className="flex items-center justify-center w-10 h-10 md:w-8 md:h-8 rounded-md bg-white/5 border border-border/50 hover:bg-white/10 transition-colors group"
              aria-label="Open Command Palette (Cmd+K)"
            >
              <Command className="w-5 h-5 md:w-4 md:h-4 text-muted group-hover:text-foreground transition-colors" />
            </button>
            
            {mounted ? (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center justify-center w-10 h-10 md:w-8 md:h-8 rounded-md bg-white/5 border border-border/50 hover:bg-white/10 transition-colors group"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 md:w-4 md:h-4 text-muted group-hover:text-foreground transition-colors" />
                ) : (
                  <Moon className="w-5 h-5 md:w-4 md:h-4 text-muted group-hover:text-foreground transition-colors" />
                )}
              </button>
            ) : (
              <div className="w-8 h-8 rounded-md bg-white/5 border border-border/50" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
