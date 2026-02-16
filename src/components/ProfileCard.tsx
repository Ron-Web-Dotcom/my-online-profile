const PROFILE_IMG = "https://v3b.fal.media/files/b/0a8ec0ce/F_sxL0RRBVR4Q-KBPfnk4_oGiECqAh.png";

export function ProfileCard() {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10">
      <img
        src={PROFILE_IMG}
        alt="Ron Taylor portrait"
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
}
