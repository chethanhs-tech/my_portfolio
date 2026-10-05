import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface WritingCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
}

export function WritingCard({ id, title, description, date, readingTime, category }: WritingCardProps) {
  return (
    <Link 
      href={`/notes/${id}`}
      className="group flex flex-col gap-4 py-8 border-b border-border/50 hover:bg-white/[0.02] transition-colors -mx-6 px-6"
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
        <h4 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors leading-tight">
          {title}
        </h4>
        <div className="flex items-center gap-3 shrink-0 text-xs font-mono text-muted uppercase tracking-wider">
          <span>{date}</span>
          <span className="hidden md:inline-block">·</span>
          <span>{readingTime}</span>
        </div>
      </div>
      
      <p className="text-base text-muted max-w-3xl leading-relaxed">
        {description}
      </p>

      <div className="flex items-center gap-4 mt-2">
        <span className="text-xs font-mono px-2 py-1 bg-white/5 border border-border/50 rounded text-muted">
          {category}
        </span>
        <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors flex items-center gap-1 ml-auto">
          Read <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </span>
      </div>
    </Link>
  );
}
