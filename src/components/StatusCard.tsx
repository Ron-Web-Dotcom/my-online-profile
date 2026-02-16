import { Clock } from "./Clock";
import { GlassCard } from "./ui/glass-card";

export function StatusCard() {
  return (
    <GlassCard className="p-5 group">
      <div className="flex items-center gap-2 mb-3">
        <div className="relative h-2 w-2">
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
          <span className="relative block h-2 w-2 rounded-full bg-primary"></span>
        </div>
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
          Online
        </span>
      </div>
      <Clock />
    </GlassCard>
  );
}
