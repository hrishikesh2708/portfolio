import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { SitemapStream, streamToPromise } from "sitemap";

// Get __dirname equivalent in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Absolute path to public folder
const publicDir = path.resolve(__dirname, "../public");

const hostname = "https://www.hrishikeshthakur.com";

// List of your website routes
const links = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    { url: "/projects", changefreq: "weekly", priority: 0.8 },
    { url: "/contact", changefreq: "weekly", priority: 0.8 },
];

async function generate() {
    const sitemap = new SitemapStream({ hostname });

    links.forEach((link) => sitemap.write(link));
    sitemap.end();

    const sitemapData = (await streamToPromise(sitemap)).toString();

    // Write sitemap.xml
    fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapData);

    // Write robots.txt
    const robots = `
User-agent: *
Disallow:

Sitemap: ${hostname}/sitemap.xml
`;
    fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);

    console.log("✅ Sitemap and robots.txt generated in public/");
}

generate();
