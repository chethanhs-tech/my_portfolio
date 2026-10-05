import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DEV_NOTES_DRAFTS } from "@/data/content";

export function generateStaticParams() {
  return DEV_NOTES_DRAFTS.map((post) => ({
    id: post.id,
  }));
}

export default async function NotePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = DEV_NOTES_DRAFTS.find((p) => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-12 max-w-3xl mx-auto pt-12 md:pt-24">
      <div className="flex flex-col gap-8 border-b border-border/50 pb-12">
        <Link 
          href="/notes" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Notes
        </Link>
        
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex items-center gap-4 text-sm font-mono text-muted uppercase tracking-wider">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
            <span>·</span>
            <span className="px-2 py-1 bg-white/5 border border-border/50 rounded">{post.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted leading-relaxed">
            {post.description}
          </p>
        </div>
      </div>
      
      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:text-foreground prose-a:underline-offset-4 hover:prose-a:text-muted prose-p:leading-relaxed prose-p:text-muted/90">
        {post.content ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <div>
            <p>{post.description}</p>
            <p className="italic text-muted mt-8">Full post coming soon...</p>
          </div>
        )}
      </div>
    </article>
  );
}
