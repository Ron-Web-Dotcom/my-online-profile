import { GlassCard } from "./ui/glass-card";

export function QuoteCard() {
  return (
    <GlassCard className="p-8 md:p-10">
      <div className="flex items-start gap-4">
        <span className="text-5xl leading-none text-primary/30 font-serif select-none">&ldquo;</span>
        <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <p className="text-lg md:text-xl italic text-muted-foreground leading-relaxed">
            Code is poetry written in logic.
          </p>
          <span className="text-sm text-muted-foreground/40 whitespace-nowrap">
            — Anonymous
          </span>
        </div>
      </div>
    </GlassCard>
  );
}
