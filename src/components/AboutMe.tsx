import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <GlassCard className="p-8 md:p-12 space-y-10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
      
      <div className="space-y-2 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          About <span className="text-primary text-glow">Me</span>
        </h2>
        <p className="text-muted-foreground text-sm uppercase tracking-[0.3em] font-medium">
          My technical journey
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto"
      >
        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
          I'm a <span className="text-foreground font-semibold">Software Engineer & System Admin</span> with 10+ years of hands-on experience across IT infrastructure, cloud systems, and web/API development.
        </p>
        <p>
          I specialize in <span className="text-foreground font-semibold">Windows Server environments</span>, <span className="text-foreground font-semibold">RESTful API development</span>, and automation. I enjoy solving complex technical puzzles and building systems that enhance operational efficiency.
        </p>
        <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-primary uppercase tracking-widest">
            10+ Years Experience
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-primary uppercase tracking-widest">
            Full-Stack Dev
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-primary uppercase tracking-widest">
            Cloud Solutions
          </div>
        </div>
      </motion.div>
    </GlassCard>
  );
}
