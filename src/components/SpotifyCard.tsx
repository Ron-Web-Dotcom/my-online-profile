import { GlassCard } from "./ui/glass-card";
import { SkipBack, Play, SkipForward, Volume2 } from "lucide-react";

export function SpotifyCard() {
  return (
    <GlassCard className="flex flex-col justify-between h-full p-6 group">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center overflow-hidden flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-br from-emerald-700 to-teal-900 flex items-center justify-center">
            <span className="text-2xl">🎵</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground/90 truncate text-sm">Wildflower</p>
          <p className="text-xs text-muted-foreground truncate">Billie Eilish</p>
        </div>
        <div className="flex items-center gap-1">
          <Volume2 className="w-3.5 h-3.5 text-muted-foreground/50" />
          <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-primary/50 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 pt-4">
        <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous track">
          <SkipBack className="w-4 h-4" />
        </button>
        <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-105 transition-transform" aria-label="Play">
          <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
        </button>
        <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Next track">
          <SkipForward className="w-4 h-4" />
        </button>
      </div>
    </GlassCard>
  );
}
