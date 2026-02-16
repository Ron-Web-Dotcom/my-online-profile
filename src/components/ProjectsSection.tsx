import { GlassCard } from "./ui/glass-card";
import { ExternalLink, Github, Monitor, CheckSquare, BarChart3, Bot } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    icon: Monitor,
    iconColor: "bg-emerald-500/20 text-emerald-400",
    tags: ["React", "Node.js", "MongoDB"],
    tagColor: "text-emerald-400 border-emerald-400/20",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Task Management App",
    description: "Intuitive task manager with real-time collaboration",
    icon: CheckSquare,
    iconColor: "bg-blue-500/20 text-blue-400",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    tagColor: "text-blue-400 border-blue-400/20",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization and reporting tool",
    icon: BarChart3,
    iconColor: "bg-orange-500/20 text-orange-400",
    tags: ["React", "D3.js", "Express"],
    tagColor: "text-orange-400 border-orange-400/20",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "AI Chatbot",
    description: "ML-powered conversational assistant",
    icon: Bot,
    iconColor: "bg-purple-500/20 text-purple-400",
    tags: ["Python", "TensorFlow", "FastAPI"],
    tagColor: "text-purple-400 border-purple-400/20",
    liveUrl: "#",
    sourceUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-10 py-16" aria-label="Projects">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <GlassCard key={project.title} className="p-8 space-y-5 group">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${project.iconColor}`}>
              <project.icon className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground/90 group-hover:text-primary transition-colors">
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
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${project.tagColor}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
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
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
