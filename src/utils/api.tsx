import { useEffect, useState } from "react";

// github stats
export function useGithubStats() {
  const [stats, setStats] = useState({ repos: 0, contributions: 0 });

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setStats({
          repos: data.repos || 0,
          contributions: data.contributions || 0,
        });
      } catch (err) {
        console.error(err);
      }
    }

    fetchStats();
  }, []);

  return stats;
}
