import { GlassCard } from "./ui/glass-card";

export function AboutMe() {
  return (
    <GlassCard className="space-y-6 h-full p-8 group">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-foreground/90 flex items-center gap-3">
          About Me
          <div className="h-1 w-12 bg-primary rounded-full opacity-50 group-hover:w-20 transition-all duration-500" />
        </h2>
      </div>
      
      <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
        <p>
          I'm a <span className="text-foreground font-medium">Multi-skilled Technical Support Engineer & Full-Stack Developer</span> with 10+ years of hands-on experience across IT infrastructure, cloud systems, and web/API development.
        </p>
        <p>
          I specialize in <span className="text-foreground font-medium">Windows Server environments</span>, <span className="text-foreground font-medium">RESTful API development</span>, and automation. I enjoy solving complex technical puzzles and building systems that enhance operational efficiency.
        </p>
      </div>
    </GlassCard>
  );
}
