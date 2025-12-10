// api/github.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Minimal CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    if (!username || !token) {
        return res.status(500).json({ error: "Missing GitHub credentials" });
    }

    try {
        // Fetch total repos
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const reposData: any = await reposRes.json();

        // Check Link header for pagination
        const linkHeader = reposRes.headers.get("Link");
        const totalRepos =
            linkHeader?.match(/&page=(\d+)>; rel="last"/)?.[1] || reposData.length || 0;

        // Fetch total contributions using GitHub GraphQL
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
            `
        };

        const graphRes = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(query),
        });

        if (!graphRes.ok) throw new Error("Failed to fetch contributions via GraphQL");

        const graphData: any = await graphRes.json();
        const totalContributions = graphData.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions || 0;

        return res.status(200).json({
            repos: Number(totalRepos),
            contributions: totalContributions,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to fetch GitHub stats" });
    }
}
