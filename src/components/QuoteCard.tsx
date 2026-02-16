import { GlassCard } from "./ui/glass-card";
import { Quote } from "lucide-react";

export function QuoteCard() {
  return (
    <GlassCard className="flex items-center h-full p-8 group">
      <div className="flex items-start gap-4 w-full">
        <Quote className="w-8 h-8 text-primary/40 flex-shrink-0 mt-1" />
        <div className="flex-1 flex items-center justify-between gap-4">
          <p className="text-lg italic text-muted-foreground leading-relaxed">
            Code is poetry written in logic.
          </p>
          <span className="text-sm text-muted-foreground/50 whitespace-nowrap">
            — Anonymous
          </span>
        </div>
      </div>
    </GlassCard>
  );
}
