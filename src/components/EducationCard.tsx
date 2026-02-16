import { GlassCard } from "./ui/glass-card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export function EducationCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <GlassCard className="p-6 group relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl -z-10 group-hover:bg-primary/10 transition-colors" />
        
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-4 w-4 text-primary" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
            Education
          </span>
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            BSc. MIS
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Portmore Community College, Kingston
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5">
          <p className="text-xs font-mono text-muted-foreground/40 tracking-widest">
            Graduated 2019
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}