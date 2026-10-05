import { 
  SiC, SiMysql, SiVite, SiTypescript, SiFastapi, 
  SiPostgresql, SiSupabase, SiVercel, SiGooglegemini
} from "react-icons/si";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, 
  FaNodeJs, FaAws, FaGithub, FaChrome, FaGitAlt 
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Brain, Cpu, Database, Network, Terminal, Wand2, Cloud, LayoutTemplate, Zap, Server } from "lucide-react";
import { motion } from "framer-motion";

const TECHNOLOGIES = [
  // Languages & Core
  { name: "HTML5", icon: FaHtml5, color: "group-hover:text-[#E34F26]" },
  { name: "CSS3", icon: FaCss3Alt, color: "group-hover:text-[#1572B6]" },
  { name: "JavaScript", icon: FaJs, color: "group-hover:text-[#F7DF1E]" },
  { name: "Python", icon: FaPython, color: "group-hover:text-[#3776AB]" },
  { name: "C", icon: SiC, color: "group-hover:text-[#A8B9CC]" },
  { name: "SQL", icon: Database, color: "group-hover:text-[#336791]" },
  
  // Frameworks & Backend
  { name: "React", icon: FaReact, color: "group-hover:text-[#61DAFB]" },
  { name: "Vite", icon: SiVite, color: "group-hover:text-[#646CFF]" },
  { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-[#3178C6]" },
  { name: "Node.js", icon: FaNodeJs, color: "group-hover:text-[#339933]" },
  { name: "FastAPI", icon: SiFastapi, color: "group-hover:text-[#009688]" },
  { name: "REST APIs", icon: Server, color: "group-hover:text-[#FF5722]" },

  // Databases
  { name: "PostgreSQL", icon: SiPostgresql, color: "group-hover:text-[#4169E1]" },
  { name: "MySQL", icon: SiMysql, color: "group-hover:text-[#4479A1]" },
  { name: "Supabase", icon: SiSupabase, color: "group-hover:text-[#3ECF8E]" },

  // AI & GenAI
  { name: "Gemini", icon: SiGooglegemini, color: "group-hover:text-[#8E75B2]" },
  { name: "Gemini API", icon: Zap, color: "group-hover:text-[#8E75B2]" },
  { name: "Generative AI", icon: Brain, color: "group-hover:text-[#FF9800]" },
  { name: "Prompt Engineering", icon: Wand2, color: "group-hover:text-[#9C27B0]" },

  // Cloud & Deployment
  { name: "AWS", icon: FaAws, color: "group-hover:text-[#FF9900]" },
  { name: "Vercel", icon: SiVercel, color: "group-hover:text-black dark:group-hover:text-white" },

  // Tools & Others
  { name: "Git", icon: FaGitAlt, color: "group-hover:text-[#F05032]" },
  { name: "GitHub", icon: FaGithub, color: "group-hover:text-black dark:group-hover:text-white" },
  { name: "VS Code", icon: VscVscode, color: "group-hover:text-[#007ACC]" },
  { name: "Lovable AI", icon: LayoutTemplate, color: "group-hover:text-[#FFD700]" },
  { name: "Antigravity", icon: Cloud, color: "group-hover:text-[#00E5FF]" },
  { name: "Chrome Extensions", icon: FaChrome, color: "group-hover:text-[#4285F4]" },

  // Foundations
  { name: "DSA", icon: Terminal, color: "group-hover:text-[#4CAF50]" },
  { name: "DBMS", icon: Database, color: "group-hover:text-[#03A9F4]" },
  { name: "Operating Systems", icon: Cpu, color: "group-hover:text-[#795548]" },
  { name: "Computer Networks", icon: Network, color: "group-hover:text-[#9E9E9E]" },
  { name: "Computer Organization", icon: Cpu, color: "group-hover:text-[#607D8B]" },
];

export function TechChips() {
  return (
    <div className="flex flex-wrap gap-3">
      {TECHNOLOGIES.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.03 }}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-border/40 bg-surface hover:bg-foreground/5 hover:border-border/80 transition-all duration-300 hover:-translate-y-[1px]"
        >
          <tech.icon className={`w-4 h-4 text-muted transition-colors duration-300 ${tech.color}`} />
          <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
