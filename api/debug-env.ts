export default function handler(_req: any, res: any) {
    const envVars = [
        "GITHUB_USERNAME",
        "GITHUB_TOKEN",
        "EMAILJS_SERVICE_ID",
        "EMAILJS_TEMPLATE_ID",
        "EMAILJS_PUBLIC_KEY",
        "EMAILJS_PRIVATE_KEY",
        "LEETCODE_USERNAME",
        "VERCEL_OIDC_TOKEN"
    ];

    const status: Record<string, string> = {};

    envVars.forEach((key) => {
        const value = process.env[key];
        if (!value) {
            status[key] = "MISSING";
        } else {
            // Show first 4 chars and length for safety
            status[key] = `PRESENT (${value.substring(0, 4)}... length=${value.length})`;
        }
    });

    res.status(200).json(status);
}
