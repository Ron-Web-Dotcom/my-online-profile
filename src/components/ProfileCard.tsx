import { GlassCard } from "./ui/glass-card";

const PROFILE_IMG = "https://v3b.fal.media/files/b/0a8ec0ce/F_sxL0RRBVR4Q-KBPfnk4_oGiECqAh.png";

export function ProfileCard() {
  return (
    <GlassCard className="flex items-center justify-center p-4 h-full">
      <div className="w-full aspect-square rounded-2xl overflow-hidden">
        <img
          src={PROFILE_IMG}
          alt="Ron Taylor portrait"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>
    </GlassCard>
  );
}
