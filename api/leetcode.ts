/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function handler(req: any, res: any) {
  // Allow CORS
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

  // Handle both JSON body (POST) and Query params (GET/POST)
  let username = req.query.username;
  if (!username && req.body) {
    // If req.body is a string (sometimes happens with raw bodies), parse it
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    username = body.username;
  }

  if (!username) {
    username = process.env.LEETCODE_USERNAME;
  }

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  const query = `
    query getStats($username: String!) {
      matchedUser(username: $username) {
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }

      }
    }
  `;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com", // Often required by LeetCode
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("LeetCode API Error:", response.status, text);
      return res.status(response.status).send(text);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error: any) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: error.message });
  }
}
