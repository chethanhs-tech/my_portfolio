import Link from "next/link";
import { ArrowUpRight, Code2, Workflow, Database, Shield, Radio } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tech: string[];
  live?: string;
  github?: string;
  status?: "LIVE" | "BUILDING" | string;
  index?: number;
}

export function ProjectCard({ 
  id, 
  title, 
  description, 
  tech, 
  live, 
  github, 
  status
}: ProjectCardProps) {
  
  // Renders a high-quality, tasteful semantic visual icon/fragment for the project
  const renderProjectVisual = () => {
    switch (id) {
      case "nulltrace":
        return <Shield className="w-12 h-12 md:w-16 md:h-16 text-foreground/20 group-hover:text-foreground transition-colors duration-500" strokeWidth={1} />;
      case "tracxnlabs":
        return <Workflow className="w-12 h-12 md:w-16 md:h-16 text-foreground/20 group-hover:text-foreground transition-colors duration-500" strokeWidth={1} />;
      case "grozosphere":
        return <Database className="w-12 h-12 md:w-16 md:h-16 text-foreground/20 group-hover:text-foreground transition-colors duration-500" strokeWidth={1} />;
      case "nereid-x":
      case "guardian":
        return <Radio className="w-12 h-12 md:w-16 md:h-16 text-foreground/20 group-hover:text-foreground transition-colors duration-500" strokeWidth={1} />;
      default:
        return <Code2 className="w-12 h-12 md:w-16 md:h-16 text-foreground/20 group-hover:text-foreground transition-colors duration-500" strokeWidth={1} />;
    }
  };

  return (
    <div className="group flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-b border-border/50 hover:bg-white/[0.02] transition-colors -mx-6 px-6">
      {/* Semantic Icon Area */}
      <div className="hidden md:flex w-32 h-32 shrink-0 items-center justify-center bg-white/[0.02] border border-border/50 rounded-xl overflow-hidden group-hover:border-foreground/30 transition-colors">
        {renderProjectVisual()}
      </div>

      <div className="flex flex-col gap-4 flex-1 justify-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Link href={`/projects/${id}`} className="group/title">
              <h4 className="text-2xl font-medium text-foreground tracking-tight group-hover/title:text-accent transition-colors">
                {title}
              </h4>
            </Link>
            {status && (
              <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${status === 'LIVE' ? 'border-green-500/30 text-green-400 bg-green-500/10' : 'border-amber-500/30 text-amber-400 bg-amber-500/10'}`}>
                {status}
              </span>
            )}
          </div>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted/80">
            {tech.map((t) => (
              <li key={t} className="px-2 py-1 bg-white/5 border border-border/50 rounded">
                {t}
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 text-sm font-medium text-muted">
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
                Live <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
                GitHub <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
