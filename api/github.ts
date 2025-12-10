export default async function handler(req: any, res: any) {
    // Add CORS headers
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    const { type, username } = req.query;
    const targetUsername = username || process.env.GITHUB_USERNAME; // Helper usage, though usually passed from frontend

    if (!process.env.GITHUB_TOKEN) {
        return res.status(500).json({ error: "Missing GITHUB_TOKEN" });
    }

    try {
        if (type === "repos") {
            const response = await fetch(
                `https://api.github.com/users/${targetUsername}/repos?per_page=100`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                    },
                }
            );
            if (!response.ok) throw new Error("Failed to fetch repos");
            const data: any = await response.json();
            return res.status(200).json({ count: data.length });
        }

        if (type === "contributions") {
            const query = {
                query: `
              {
                user(login: "${targetUsername}") {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                    }
                  }
                }
              }
            `,
            };
            const response = await fetch("https://api.github.com/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                },
                body: JSON.stringify(query),
            });

            if (!response.ok) throw new Error(`Failed to fetch contributions: ${response.status} ${response.statusText}`);
            const data: any = await response.json();

            const user = data.data?.user;
            if (!user) {
                console.error("GitHub API: User not found or error in response", JSON.stringify(data));
                return res.status(404).json({ error: "User not found" });
            }

            const contributions = user.contributionsCollection?.contributionCalendar?.totalContributions || 0;
            return res.status(200).json({ count: contributions });
        }

        return res.status(400).json({ error: "Invalid type parameter" });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}
