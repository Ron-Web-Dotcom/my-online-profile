import { Clock } from "./Clock";
import { GlassCard } from "./ui/glass-card";

export function StatusCard() {
  return (
    <GlassCard className="flex flex-col justify-between h-full group p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
            <span className="relative block h-2.5 w-2.5 rounded-full bg-primary"></span>
          </div>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
            Online
          </span>
        </div>
      </div>
      
      <div className="pt-6">
        <Clock />
      </div>
    </GlassCard>
  );
}
