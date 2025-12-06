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
  const endpoint = "https://leetcode.com/graphql";

  // 1) Stats Query
  const statsQuery = {
    query: `
      query getStats($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            views
          }
        }
      }
    `,
    variables: { username }
  };

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(statsQuery),
  });

  const json = await res.json();

  const submissions = json.data.matchedUser.submitStats.acSubmissionNum;

  const totalSolved = submissions.reduce((sum: number, item: any) => sum + item.count, 0);

  const profileViews = json.data.matchedUser.profile.views;

  return {
    totalSolved,
    profileViews,
  };
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
