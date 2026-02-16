import { Clock } from "./Clock";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export function StatusCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <GlassCard className="p-6 group relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl -z-10 group-hover:bg-primary/10 transition-colors" />
        
        <div className="flex items-center gap-2 mb-4">
          <div className="relative h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
            <span className="relative block h-2.5 w-2.5 rounded-full bg-primary"></span>
          </div>
          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
            Available for Projects
          </span>
        </div>
        <Clock />
      </GlassCard>
    </motion.div>
  );
}