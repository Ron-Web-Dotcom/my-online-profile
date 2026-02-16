import { GlassCard } from "./ui/glass-card";

export function AboutMe() {
  return (
    <GlassCard className="p-8 md:p-10 space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
        About Me
      </h2>

      <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
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
