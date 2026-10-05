"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Code, FileText, Briefcase, Mail, Link as LinkIcon, Home } from "lucide-react";
import { Command } from "cmdk";
import { SITE_METADATA } from "@/data/content";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[15vh]">
      <div 
        className="fixed inset-0 z-0" 
        onClick={() => setOpen(false)}
      />
      <div className="relative z-10 w-full max-w-xl rounded-xl border border-border bg-background shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <Command
          className="w-full h-full flex flex-col"
          loop
        >
          <Command.Input 
            autoFocus
            className="w-full border-b border-border bg-transparent px-4 py-4 text-sm outline-none placeholder:text-muted focus:ring-0" 
            placeholder="Type a command or search..." 
          />
          <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
            <Command.Empty className="py-6 text-center text-sm text-muted">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="text-xs font-medium text-muted/80 px-2 py-1.5">
              <Command.Item
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground hover:bg-white/5 rounded-md cursor-pointer aria-selected:bg-white/5"
                onSelect={() => runCommand(() => router.push("/"))}
              >
                <Home className="w-4 h-4 text-muted" /> Home
              </Command.Item>
              <Command.Item
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground hover:bg-white/5 rounded-md cursor-pointer aria-selected:bg-white/5"
                onSelect={() => runCommand(() => {
                  router.push("/");
                  setTimeout(() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }), 100);
                })}
              >
                <Briefcase className="w-4 h-4 text-muted" /> Work
              </Command.Item>
              <Command.Item
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground hover:bg-white/5 rounded-md cursor-pointer aria-selected:bg-white/5"
                onSelect={() => runCommand(() => router.push("/notes"))}
              >
                <FileText className="w-4 h-4 text-muted" /> Dev Notes
              </Command.Item>
            </Command.Group>

            <Command.Separator className="h-px bg-border my-1" />
            
            <Command.Group heading="Connect" className="text-xs font-medium text-muted/80 px-2 py-1.5">
              <Command.Item
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground hover:bg-white/5 rounded-md cursor-pointer aria-selected:bg-white/5"
                onSelect={() => runCommand(() => window.open(SITE_METADATA.github, "_blank"))}
              >
                <LinkIcon className="w-4 h-4 text-muted" /> GitHub
              </Command.Item>
              <Command.Item
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground hover:bg-white/5 rounded-md cursor-pointer aria-selected:bg-white/5"
                onSelect={() => runCommand(() => window.open(SITE_METADATA.linkedin, "_blank"))}
              >
                <LinkIcon className="w-4 h-4 text-muted" /> LinkedIn
              </Command.Item>
              <Command.Item
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground hover:bg-white/5 rounded-md cursor-pointer aria-selected:bg-white/5"
                onSelect={() => runCommand(() => window.location.href = `mailto:${SITE_METADATA.email}`)}
              >
                <Mail className="w-4 h-4 text-muted" /> Email
              </Command.Item>
              <Command.Item
                className="flex items-center gap-2 px-2 py-2.5 text-sm text-foreground hover:bg-white/5 rounded-md cursor-pointer aria-selected:bg-white/5"
                onSelect={() => runCommand(() => window.open(SITE_METADATA.resume, "_blank"))}
              >
                <FileText className="w-4 h-4 text-muted" /> View Resume
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
