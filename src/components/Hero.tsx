import { Button } from "./ui/button";
import { FileText, Mail } from "lucide-react";
import { useState } from "react";
import { ResumeModal } from "./ResumeModal";
import { GlassCard } from "./ui/glass-card";
import { ProfileCard } from "./ProfileCard";

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <GlassCard className="p-8 md:p-10 h-full">
      <div className="flex flex-col md:flex-row md:items-center gap-8 h-full">
        {/* Text Content */}
        <div className="flex-1 space-y-5">
          <div className="space-y-3">
            <p className="text-base text-muted-foreground font-medium" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              नमस्ते
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tighter leading-[1.1]">
              I'm <span className="text-primary">Ron Taylor</span>
            </h1>
            <div className="inline-block px-3.5 py-1 rounded-full bg-white/5 border border-white/10">
              <p className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">
                Building digital experiences that matter
              </p>
            </div>
            <p className="text-lg text-muted-foreground">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              className="rounded-xl px-6 bg-primary text-primary-foreground hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95"
              onClick={() => setResumeOpen(true)}
            >
              <FileText className="mr-2 h-4 w-4" />
              Read Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-6 border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20 transition-all"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-44 h-44 md:w-52 md:h-52 flex-shrink-0 mx-auto md:mx-0">
          <ProfileCard />
        </div>
      </div>

      <ResumeModal open={resumeOpen} onOpenChange={setResumeOpen} />
    </GlassCard>
  );
}
