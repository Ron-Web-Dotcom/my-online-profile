import { GlassCard } from "./ui/glass-card";
import { GraduationCap } from "lucide-react";

export function EducationCard() {
  return (
    <GlassCard className="p-5 group">
      <div className="flex items-center gap-2 mb-3">
        <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Education
        </span>
      </div>

      <h3 className="text-lg font-bold tracking-tight text-primary leading-tight">
        B. Tech CSE-AI
      </h3>
      <p className="text-sm text-muted-foreground mt-1">
        Amrita Vishwa Vidyapeetham, Coimbatore
      </p>

      <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/5">
        <p className="text-xs font-mono text-muted-foreground/50 tracking-widest">
          2022 – 2027
        </p>
        <span className="text-[11px] font-bold text-primary-foreground bg-primary px-2.5 py-0.5 rounded-full">
          GPA: 8.34
        </span>
      </div>
    </GlassCard>
  );
}
