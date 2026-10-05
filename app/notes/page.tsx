"use client";

import { motion } from "framer-motion";
import { DEV_NOTES_DRAFTS } from "@/data/content";
import { WritingCard } from "@/components/shared/WritingCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotesPage() {
  return (
    <div className="flex flex-col gap-12 max-w-3xl mx-auto pt-12 md:pt-24">
      <div className="flex flex-col gap-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Dev Notes
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            Thoughts on software engineering, cloud architecture, and the things I learn along the way.
          </p>
        </motion.div>
      </div>
      
      <div className="flex flex-col mt-8">
        {DEV_NOTES_DRAFTS.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <WritingCard {...post} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
