import { GlassCard } from "./ui/glass-card";
import { ExternalLink, Github, Monitor, Star, GitFork } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Project {
  id: string | number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  stargazers_count: number;
  forks_count: number;
  language?: string;
  topics?: string[];
}

export function ProjectsSection() {
  const username = "Ron-Web-Dotcom";
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const data = await response.json();
        const filteredData = Array.isArray(data) 
          ? data.filter((repo: Project) => repo.name !== "my-online-profile")
          : [];
        
        // Add manual projects
        const manualProjects: Project[] = [
          {
            id: "flashmind-ai",
            name: "Flashmind Ai",
            description: "Advanced AI-powered productivity tool designed to enhance learning and mental focus through cutting-edge large language models.",
            html_url: "https://github.com/Ron-Web-Dotcom/flashmind-ai",
            stargazers_count: 0,
            forks_count: 0,
            language: "TypeScript",
            topics: ["AI", "React", "LLM"]
          },
          {
            id: "system-automation",
            name: "Enterprise Automation Suite",
            description: "A comprehensive suite of automation tools for Windows Server environments, optimizing system management and monitoring tasks.",
            html_url: "https://github.com/Ron-Web-Dotcom/enterprise-automation",
            stargazers_count: 0,
            forks_count: 0,
            language: "PowerShell",
            topics: ["Automation", "Windows Server", "IT"]
          },
          {
            id: "mec-tms-v2",
            name: "Mec Tms V2",
            description: "A sophisticated Task Management System version 2, built with TypeScript to streamline workflows and improve organizational efficiency.",
            html_url: "https://github.com/Ron-Web-Dotcom/mec-tms-v2",
            stargazers_count: 0,
            forks_count: 0,
            language: "TypeScript",
            topics: ["Management", "TypeScript", "V2"]
          }
        ];
        
        setProjects([...manualProjects, ...filteredData]);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [username]);

  return (
    <GlassCard id="projects" className="p-8 md:p-12 space-y-10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
      
      <div className="space-y-2 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Latest <span className="text-primary text-glow">Projects</span>
        </h2>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-64 rounded-3xl bg-white/5 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 space-y-6 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500 group/project relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover/project:bg-primary/10 transition-colors" />
              
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 group-hover/project:scale-110 transition-transform duration-500 shadow-sm">
                <Monitor className="w-6 h-6 text-primary" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground group-hover/project:text-primary transition-colors capitalize">
                  {project.name.replace(/-/g, ' ')}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed line-clamp-2 min-h-[3rem]">
                  {project.description || "No description provided for this repository."}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {project.language && (
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg border border-primary/20 bg-primary/5 text-primary">
                    {project.language}
                  </span>
                )}
                {project.topics?.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg border border-white/10 bg-white/5 text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-6">
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-all group/link"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-primary/10 transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    Source
                  </a>
                </div>
                
                <div className="flex items-center gap-4 text-muted-foreground/40">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span className="text-xs">{project.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    <span className="text-xs">{project.forks_count}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
