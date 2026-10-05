import { SITE_METADATA } from "@/data/content";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between text-sm text-muted">
      <p>© {new Date().getFullYear()} {SITE_METADATA.name}. All rights reserved.</p>
      <div className="flex items-center gap-6 mt-4 md:mt-0 font-medium">
        <a href={SITE_METADATA.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        <a href={SITE_METADATA.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
        <a href={`mailto:${SITE_METADATA.email}`} className="hover:text-foreground transition-colors">Email</a>
      </div>
    </footer>
  );
}
