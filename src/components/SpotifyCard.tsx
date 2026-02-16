import { GlassCard } from "./ui/glass-card";
import { SkipBack, Play, SkipForward, Volume2, Music } from "lucide-react";
import { motion } from "framer-motion";

export function SpotifyCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <GlassCard className="p-6 group relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl -z-10 group-hover:bg-primary/10 transition-colors" />
        
        <div className="flex items-center gap-4">
          <div className="relative group/cover">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-secondary flex items-center justify-center relative">
              <img 
                src="https://pardheev.online/assets/images/WildFlower.webp" 
                alt="Wildflower Album Art" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Music className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] animate-pulse">
                Now Playing
              </span>
              <div className="flex gap-0.5 items-end h-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ["20%", "100%", "20%"] }}
                    transition={{ duration: 0.5 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                    className="w-0.5 bg-primary"
                  />
                ))}
              </div>
            </div>
            <p className="font-bold text-foreground truncate text-lg">Wildflower</p>
            <p className="text-sm text-muted-foreground truncate">Billie Eilish</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "65%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full bg-primary"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Previous track">
                <SkipBack className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-glow" aria-label="Play">
                <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Next track">
                <SkipForward className="w-5 h-5" />
              </button>
            </div>
            <button className="text-muted-foreground/50 hover:text-primary transition-colors" aria-label="Volume">
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}