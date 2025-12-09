import { useEffect, useState } from "react";

// github stats
export async function getTotalRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`, // for Vite
    },
  });

  const data = await res.json();
  return data.length;
}

export async function getTotalContributions(username: string) {
  const query = {
    query: `
      {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `,
  };

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
    body: JSON.stringify(query),
  });

  const data = await res.json();

  return data.data.user.contributionsCollection.contributionCalendar.totalContributions;
}


export function useGithubStats() {
  const [stats, setStats] = useState({
    contributions: 0,
    repos: 0,
  });

  const username = import.meta.env.VITE_GITHUB_USERNAME;

  useEffect(() => {
    async function fetchStats() {
      const repos = await getTotalRepos(username);
      const contributions = await getTotalContributions(username);

      setStats({ repos, contributions });
    }

    fetchStats();
  }, []);

  return stats;
}

// Leetcode Stats

export async function getLeetCodeStats(username: string) {
  // Use Vercel Serverless Function proxy
  // Local: requires `vercel dev` or manual proxy config
  // Prod: /api/leetcode
  const endpoint = "/api/leetcode";

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
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
  const username = import.meta.env.VITE_LEETCODE_USERNAME;
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
  }, []);

  return stats;
}
