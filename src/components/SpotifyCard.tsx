import { GlassCard } from "./ui/glass-card";
import { SkipBack, Play, SkipForward, Volume2, Music } from "lucide-react";

export function SpotifyCard() {
  return (
    <GlassCard className="p-5 group">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-emerald-800 to-teal-900 flex items-center justify-center">
          <Music className="w-5 h-5 text-primary/60" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground/90 truncate text-sm">Wildflower</p>
          <p className="text-xs text-muted-foreground truncate">Billie Eilish</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 pt-3">
        <button className="text-muted-foreground/50 hover:text-foreground transition-colors" aria-label="Volume">
          <Volume2 className="w-3.5 h-3.5" />
        </button>
        <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous track">
          <SkipBack className="w-4 h-4" />
        </button>
        <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:scale-105 transition-transform" aria-label="Play">
          <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
        </button>
        <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Next track">
          <SkipForward className="w-4 h-4" />
        </button>
      </div>
    </GlassCard>
  );
}
