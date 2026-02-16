import { Button } from "./ui/button";
import { FileText, Mail } from "lucide-react";
import { useState } from "react";
import { ResumeModal } from "./ResumeModal";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <GlassCard className="p-8 md:p-12 h-full overflow-hidden relative group">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-500" />
      
      <div className="flex flex-col md:flex-row md:items-center gap-10 h-full relative z-10">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-lg text-primary font-medium tracking-wide flex items-center gap-2">
              Hi <span className="w-8 h-[1px] bg-primary/30" />
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tighter leading-[1.1] text-foreground">
              I'm <span className="text-primary text-glow">Ron Taylor</span>
            </h1>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <p className="text-[11px] text-primary font-bold tracking-[0.2em] uppercase">
                Building digital experiences that matter
              </p>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Technical Support Engineer & Full-Stack Developer specializing in creating high-performance applications and secure IT infrastructure.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="rounded-xl px-8 bg-primary text-primary-foreground font-bold shadow-elegant hover:opacity-90 transition-smooth hover:scale-[1.05] active:scale-95"
              onClick={() => setResumeOpen(true)}
            >
              <FileText className="mr-2 h-5 w-4" />
              Read Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-8 border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-smooth hover:scale-[1.05]"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Mail className="mr-2 h-5 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Profile Image removed */}
      </div>

      <ResumeModal open={resumeOpen} onOpenChange={setResumeOpen} />
    </GlassCard>
  );
}
