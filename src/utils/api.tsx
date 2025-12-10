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

// Leetcode Stats

export async function getLeetCodeStats(username?: string) {
  // Use Vercel Serverless Function proxy
  // Local: requires `vercel dev` or manual proxy config
  // Prod: /api/leetcode
  const endpoint = "/api/leetcode";

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(username ? { username } : {}),
    });

    if (!res.ok) {
      console.error("LeetCode API Proxy Error: ", res.status, res.statusText);
      return { totalSolved: 0, profileViews: 0 };
    }

    const json = await res.json();

    if (json.errors) {
      console.error("LeetCode GraphQL Errors:", json.errors);
      return { totalSolved: 0, profileViews: 0 };
    }

    const matchedUser = json.data?.matchedUser;
    if (!matchedUser) {
      return { totalSolved: 0, profileViews: 0 };
    }

    const submissions = matchedUser.submitStats.acSubmissionNum;
    const totalSolved = submissions.reduce((sum: number, item: { count: number }) => sum + item.count, 0);
    const profileViews = 0; // matchedUser.profile?.views; (Field removed from API)

    return {
      totalSolved,
      profileViews,
    };
  } catch (error) {
    console.error("Failed to fetch LeetCode stats:", error);
    return { totalSolved: 0, profileViews: 0 };
  }
}


export function useLeetCodeStats() {
  const username = import.meta.env.VITE_LEETCODE_USERNAME; // Might be undefined
  const [stats, setStats] = useState({
    totalSolved: 0,
    profileViews: 0,
  });

  useEffect(() => {
    async function load() {
      const data = await getLeetCodeStats(username);
      setStats(data);
    }
    load();
  }, [username]);

  return stats;
}
