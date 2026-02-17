import { GlassCard } from "./ui/glass-card";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <GlassCard id="contact" className="p-8 md:p-12 space-y-12 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
      
      <div className="space-y-2 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Let's <span className="text-primary text-glow">Connect</span>
        </h2>
        <p className="text-muted-foreground text-sm uppercase tracking-[0.3em] font-medium">
          Get in touch
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-4 p-4 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] group/email hover:border-primary/20 transition-all duration-300">
            <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs uppercase tracking-widest text-muted-foreground/50 font-bold mb-1">Email Me</span>
              <a 
                href="mailto:rontaylor_23@hotmail.com" 
                className="text-lg md:text-2xl font-bold text-foreground hover:text-primary transition-colors break-all"
              >
                rontaylor_23@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
