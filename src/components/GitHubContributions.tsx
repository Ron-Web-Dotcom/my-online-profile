import { GlassCard } from "./ui/glass-card";
import { Github, ExternalLink } from "lucide-react";
import { useMemo } from "react";
import { motion } from "framer-motion";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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

function getMonthLabels() {
  const labels: { label: string; col: number }[] = [];
  const now = new Date();
  const startDate = new Date(now);
  startDate.setDate(startDate.getDate() - 364);

  let lastMonth = -1;
  for (let w = 0; w < 52; w++) {
    const d = new Date(startDate);
    d.setDate(d.getDate() + w * 7);
    const month = d.getMonth();
    if (month !== lastMonth) {
      labels.push({ label: MONTHS[month], col: w });
      lastMonth = month;
    }
  }
  return labels;
}

const levelColors = [
  "bg-white/[0.05]",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/70",
  "bg-primary",
];

export function GitHubContributions() {
  const username = "Ron-Web-Dotcom";
  const GITHUB_URL = `https://github.com/${username}`;

  const contributionData = useMemo(() => generateContributionData(), []);
  const monthLabels = useMemo(() => getMonthLabels(), []);
  const totalContributions = useMemo(() => {
    return contributionData.flat().reduce((sum, val) => sum + (val > 0 ? val * 15 : 0), 0);
  }, [contributionData]);

  return (
    <GlassCard className="p-6 md:p-8 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Github className="h-5 w-5 text-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            GitHub Contributions
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50">Total</span>
              <span className="text-sm font-bold text-primary">{totalContributions}</span>
            </div>
            <div className="flex flex-col border-l border-white/5 pl-4">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50">Current</span>
              <span className="text-sm font-bold text-primary">0 days</span>
            </div>
            <div className="flex flex-col border-l border-white/5 pl-4">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50">Longest</span>
              <span className="text-sm font-bold text-primary">8 days</span>
            </div>
          </div>
          
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
          >
            <span className="text-xs font-bold text-muted-foreground group-hover/link:text-primary transition-colors">
              @{username}
            </span>
            <ExternalLink className="w-3 h-3 text-muted-foreground group-hover/link:text-primary transition-colors" />
          </a>
        </div>
      </div>

      {/* Contribution Graph */}
      <div className="overflow-x-auto pb-2 scrollbar-hide">
        <div className="min-w-[700px]">
          {/* Month labels */}
          <div className="flex gap-[4px] mb-2 pl-0">
            {Array.from({ length: 52 }).map((_, wi) => {
              const monthLabel = monthLabels.find((m) => m.col === wi);
              return (
                <div key={wi} className="w-[12px] flex-shrink-0">
                  {monthLabel && (
                    <span className="text-[10px] font-medium text-muted-foreground/50">
                      {monthLabel.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          {/* Graph grid */}
          <div className="flex gap-[4px]">
            {contributionData.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[4px]">
                {week.map((level, di) => (
                  <motion.div
                    key={di}
                    whileHover={{ scale: 1.3, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`w-[12px] h-[12px] rounded-[3px] ${levelColors[level]} cursor-pointer`}
                    title={`${level > 0 ? level * 15 : 0} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2">
        <span className="text-[10px] text-muted-foreground/40">Less</span>
        {levelColors.map((color, i) => (
          <div key={i} className={`w-[11px] h-[11px] rounded-[2px] ${color}`} />
        ))}
        <span className="text-[10px] text-muted-foreground/40">More</span>
      </div>
    </GlassCard>
  );
}
