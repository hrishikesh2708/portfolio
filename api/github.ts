// api/github.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Minimal CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    if (!username || !token) {
        return res.status(500).json({ error: "Missing GitHub credentials" });
    }

    try {
        // Fetch total repos (using headers to get last page count if more than 100)
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=1`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const reposData = await reposRes.json();

        // Check Link header for pagination
        const linkHeader = reposRes.headers.get("Link");
        const totalRepos =
            linkHeader?.match(/&page=(\d+)>; rel="last"/)?.[1] || reposData.length || 0;

        // Fetch contributions (approximation via recent public events)
        const eventsRes = await fetch(`https://api.github.com/users/${username}/events/public`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        const eventsData = await eventsRes.json();
        const totalContributions = Array.isArray(eventsData) ? eventsData.length : 0;

        return res.status(200).json({
            repos: Number(totalRepos),
            contributions: totalContributions,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to fetch GitHub stats" });
    }
}
