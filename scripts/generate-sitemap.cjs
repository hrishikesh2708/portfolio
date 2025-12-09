const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");

// __dirname works normally in CommonJS
const publicDir = path.resolve(__dirname, "../public");

const hostname = "https://www.hrishikeshthakur.com";

// Define routes
const links = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    { url: "/projects", changefreq: "weekly", priority: 0.8 },
    { url: "/contact", changefreq: "weekly", priority: 0.8 }
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
  `.trim();

    fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);

    console.log("Sitemap and robots.txt generated");
}

generate();
