import { GlassCard } from "./ui/glass-card";
import { Github, ExternalLink, Star, GitFork, Users, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  stars: number;
}

export function GitHubContributions() {
  const username = "Ron-Web-Dotcom";
  const GITHUB_URL = `https://github.com/${username}`;
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const reposData = await reposRes.json();
        
        const totalStars = reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);

        setStats({
          publicRepos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          stars: totalStars,
        });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [username]);

  return (
    <GlassCard className="p-6 md:p-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Github className="h-6 w-6 text-primary" />
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Latest Projects
            </span>
            <h3 className="text-xl font-bold text-foreground">Real-time Stats</h3>
          </div>
        </div>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
        >
          <span className="text-sm font-bold text-muted-foreground group-hover/link:text-primary transition-colors">
            @{username}
          </span>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Repositories", value: stats?.publicRepos, icon: BookOpen },
          { label: "Followers", value: stats?.followers, icon: Users },
          { label: "Following", value: stats?.following, icon: GitFork },
          { label: "Total Stars", value: stats?.stars, icon: Star },
        ].map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 group/stat hover:border-primary/20 transition-colors"
          >
            <div className="flex items-center justify-between">
              <item.icon className="w-4 h-4 text-primary" />
              {loading ? (
                <div className="w-8 h-4 bg-white/10 animate-pulse rounded" />
              ) : (
                <span className="text-xl font-bold text-foreground">{item.value}</span>
              )}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="pt-4 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
            Activity Heatmap
          </span>
        </div>
        <div className="w-full overflow-hidden rounded-xl border border-white/5 bg-white/5 p-4">
          <img 
            src={`https://ghchart.rshah.org/primary/${username}`} 
            alt={`${username}'s GitHub contribution chart`}
            className="w-full filter invert dark:invert-0 opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </GlassCard>
  );
}
