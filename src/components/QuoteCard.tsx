import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export function QuoteCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard className="p-10 md:p-14 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <span className="text-7xl leading-none text-primary/20 font-serif select-none h-10">&ldquo;</span>
          
          <p className="text-2xl md:text-3xl font-medium text-foreground leading-tight max-w-2xl mx-auto tracking-tight">
            Code is <span className="text-primary italic">poetry</span> written in logic.
          </p>
          
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-white/10" />
            <span className="text-sm font-bold text-muted-foreground/40 uppercase tracking-[0.3em]">
              Anonymous
            </span>
            <div className="h-[1px] w-8 bg-white/10" />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}