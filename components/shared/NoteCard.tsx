import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface NoteCardProps {
  title: string;
  excerpt?: string;
  date: string;
  readingTime: string;
  category: string;
  slug: string;
}

export function NoteCard({ title, excerpt, date, readingTime, category, slug }: NoteCardProps) {
  return (
    <Link href={`/notes/${slug}`} className="group flex flex-col gap-2 p-5 rounded-xl border border-transparent hover:border-border hover:bg-white/[0.02] transition-colors">
      <div className="flex items-center gap-3 text-xs font-mono text-muted">
        <span>{date}</span>
        <span className="w-1 h-1 rounded-full bg-border"></span>
        <span>{readingTime}</span>
        <span className="w-1 h-1 rounded-full bg-border"></span>
        <span className="text-accent">{category}</span>
      </div>
      <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors flex items-center justify-between">
        {title}
        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
      </h4>
      {excerpt && <p className="text-sm text-muted line-clamp-2">{excerpt}</p>}
    </Link>
  );
}
