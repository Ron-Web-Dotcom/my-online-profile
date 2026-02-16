import { GlassCard } from "./ui/glass-card";
import { Github, ExternalLink } from "lucide-react";
import { useMemo } from "react";

function generateContributionData() {
  const weeks = 52;
  const days = 7;
  const data: number[][] = [];
  
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      const rand = Math.random();
      if (rand < 0.3) week.push(0);
      else if (rand < 0.55) week.push(1);
      else if (rand < 0.75) week.push(2);
      else if (rand < 0.9) week.push(3);
      else week.push(4);
    }
    data.push(week);
  }
  return data;
}

const levelColors = [
  "bg-white/[0.03]",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/60",
  "bg-primary/90",
];

export function GitHubContributions() {
  const username = "Ron-Web-Dotcom";
  const GITHUB_URL = `https://github.com/${username}`;

  const contributionData = useMemo(() => generateContributionData(), []);
  const totalContributions = useMemo(() => {
    return contributionData.flat().reduce((sum, val) => sum + (val > 0 ? val * 15 : 0), 0);
  }, [contributionData]);

  return (
    <GlassCard className="p-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Github className="h-6 w-6 text-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            GitHub Contributions
          </span>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium text-muted-foreground">
            Total: <span className="text-primary font-bold">{totalContributions}</span>
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            Current: <span className="text-primary font-bold">6 days</span>
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            Longest: <span className="text-primary font-bold">8 days</span>
          </span>
          <span className="text-xs text-muted-foreground/60">Last 365 days</span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-primary flex items-center gap-1 hover:underline"
          >
            @{username}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Contribution Graph */}
      <div className="overflow-x-auto">
        <div className="flex gap-[3px] min-w-[700px]">
          {contributionData.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((level, di) => (
                <div
                  key={di}
                  className={`w-[11px] h-[11px] rounded-[2px] ${levelColors[level]} transition-colors`}
                  title={`${level > 0 ? level * 15 : 0} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2">
        <span className="text-xs text-muted-foreground/50">Less</span>
        {levelColors.map((color, i) => (
          <div key={i} className={`w-[11px] h-[11px] rounded-[2px] ${color}`} />
        ))}
        <span className="text-xs text-muted-foreground/50">More</span>
      </div>
    </GlassCard>
  );
}
