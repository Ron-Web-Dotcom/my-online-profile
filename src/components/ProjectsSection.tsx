import { GlassCard } from "./ui/glass-card";
import { ExternalLink, Github, Monitor, CheckSquare, BarChart3, Bot } from "lucide-react";
import { motion } from "framer-motion";

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
    <GlassCard id="projects" className="p-8 md:p-12 space-y-10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
      
      <div className="space-y-2 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Selected <span className="text-primary text-glow">Projects</span>
        </h2>
        <p className="text-muted-foreground text-sm uppercase tracking-[0.3em] font-medium">
          Showcasing my work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 space-y-6 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500 group/project relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover/project:bg-primary/10 transition-colors" />
            
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${project.iconBg} group-hover/project:scale-110 transition-transform duration-500 shadow-sm`}>
              <project.icon className={`w-6 h-6 ${project.iconColor}`} />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-foreground group-hover/project:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg border ${project.tagColor}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href={project.liveUrl}
                className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-all group/link"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-primary/10 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
                Live Demo
              </a>
              <a
                href={project.sourceUrl}
                className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-all group/link"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-primary/10 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                Source
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}