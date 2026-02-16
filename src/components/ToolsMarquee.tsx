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
} from "lucide-react";

const tools = [
  { name: "C++", icon: Cpu },
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
];

export function ToolsMarquee() {
  return (
    <section className="py-16 space-y-10">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center">
        Tools & Technologies Experienced With
      </h2>

      <div className="relative overflow-hidden py-8" role="marquee" aria-label="Tools and technologies">
        <div className="marquee-content gap-10 px-5" aria-hidden="true">
          {[...tools, ...tools, ...tools].map((tool, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                <tool.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
