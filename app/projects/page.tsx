import { ProjectCard } from "@/components/shared/ProjectCard";
import { PROJECTS } from "@/data/content";
import { FadeIn } from "@/components/shared/FadeIn";

export const metadata = {
  title: "Projects | Chethan H S",
  description: "A selection of projects focusing on Cloud Engineering, AI, and Full Stack Development.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 py-12 md:py-20">
      <FadeIn>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Projects</h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            I learn by building. Here are a few things I've built or am currently building, focusing on Cloud Engineering, AI, and Full Stack Development.
          </p>
        </div>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
