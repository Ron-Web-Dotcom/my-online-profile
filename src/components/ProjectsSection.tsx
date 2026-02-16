import { GlassCard } from "./ui/glass-card";
import { ExternalLink, Github, Monitor, CheckSquare, BarChart3, Bot } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    icon: Monitor,
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    tags: ["React", "Node.js", "MongoDB"],
    tagColor: "text-emerald-400 border-emerald-500/25 bg-emerald-500/5",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Task Management App",
    description: "Intuitive task manager with real-time collaboration",
    icon: CheckSquare,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    tagColor: "text-blue-400 border-blue-500/25 bg-blue-500/5",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization and reporting tool",
    icon: BarChart3,
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    tags: ["React", "D3.js", "Express"],
    tagColor: "text-orange-400 border-orange-500/25 bg-orange-500/5",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "AI Chatbot",
    description: "ML-powered conversational assistant",
    icon: Bot,
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    tags: ["Python", "TensorFlow", "FastAPI"],
    tagColor: "text-purple-400 border-purple-500/25 bg-purple-500/5",
    liveUrl: "#",
    sourceUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <GlassCard id="projects" className="p-6 md:p-8 space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-4 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300 group"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${project.iconBg}`}>
              <project.icon className={`w-5 h-5 ${project.iconColor}`} />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-foreground/90 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${project.tagColor}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-1">
              <a
                href={project.liveUrl}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
              <a
                href={project.sourceUrl}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
