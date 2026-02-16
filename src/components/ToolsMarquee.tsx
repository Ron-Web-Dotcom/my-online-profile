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

const tools = [
  { name: "Node.js", icon: Terminal },
  { name: "Python", icon: FileCode },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "VS Code", icon: Layout },
  { name: "React", icon: Code },
  { name: "Tailwind CSS", icon: Wind },
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
    <GlassCard className="py-8 px-6 md:px-8 space-y-6 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
        Tools & Technologies Experienced With
      </h2>

      <div className="relative overflow-hidden py-4" role="marquee" aria-label="Tools and technologies">
        <div className="marquee-content gap-8 px-4" aria-hidden="true">
          {[...tools, ...tools, ...tools].map((tool, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2.5 group cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                <tool.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-[10px] font-bold text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/[0.03] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/[0.03] to-transparent z-10 pointer-events-none" />
      </div>
    </GlassCard>
  );
}
