import { GlassCard } from "./ui/glass-card";
import { GraduationCap } from "lucide-react";

export function EducationCard() {
  return (
    <GlassCard className="flex flex-col justify-between h-full group p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Education
        </span>
      </div>

      <div className="flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div className="space-y-1 flex-1">
          <h3 className="text-xl font-bold tracking-tight text-foreground/90 leading-tight">
            B. Tech CSE-AI
          </h3>
          <p className="text-sm text-muted-foreground">
            Amrita Vishwa Vidyapeetham, Coimbatore
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/5">
        <p className="text-xs font-mono text-muted-foreground/60 tracking-widest uppercase">
          2022 – 2027
        </p>
        <span className="text-xs font-bold text-primary-foreground bg-primary px-3 py-1 rounded-full">
          GPA: 8.34
        </span>
      </div>
    </GlassCard>
  );
}
