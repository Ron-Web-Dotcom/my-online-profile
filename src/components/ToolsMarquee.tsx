import { GlassCard } from "./ui/glass-card";
import {
  FileCode,
  Layout,
  Terminal,
  Cpu,
  GitBranch,
  Github,
  Globe,
  Palette,
  Layers,
  Code,
  Wind,
  Database,
  Server,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";

const tools = [
  { name: "Node.js", icon: Terminal },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "VS Code", icon: Layout },
  { name: "React", icon: Code },
  { name: "HTML5", icon: Globe },
  { name: "CSS", icon: Palette },
  { name: "Java", icon: Layers },
  { name: "C++", icon: Cpu },
  { name: "MongoDB", icon: Database },
  { name: "Azure", icon: Cloud },
  { name: "Go", icon: Server },
];

export function ToolsMarquee() {
  return (
    <GlassCard className="py-12 px-6 md:px-10 space-y-10 overflow-hidden relative group">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
      
      <div className="space-y-2 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Tools & <span className="text-primary text-glow">Technologies</span>
        </h2>
        <p className="text-muted-foreground text-sm uppercase tracking-[0.3em] font-medium">
          Experienced With
        </p>
      </div>

      <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" role="marquee" aria-label="Tools and technologies">
        <div className="marquee-content gap-12 px-4" aria-hidden="true">
          {[...tools, ...tools].map((tool, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-sm hover:shadow-primary/20">
                <tool.icon className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-all duration-500" />
              </div>
              <span className="text-[10px] font-bold text-muted-foreground/60 group-hover:text-primary transition-colors uppercase tracking-[0.2em] whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
