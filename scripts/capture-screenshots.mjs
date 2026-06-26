import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const shots = [
  { url: "https://www.celpipace.ca", file: "celpipace.png" },
  { url: "https://rekart.ae", file: "rekart-ae.png" },
  { url: "https://scalify.ae", file: "scalify.png", waitUntil: "domcontentloaded" },
  { url: "https://celeson-website.vercel.app/", file: "celeson.png", waitUntil: "domcontentloaded" },
  { url: "https://vibewithgannu.vercel.app/", file: "ganesh.png", waitUntil: "domcontentloaded" },
  { url: "https://winklmayrsalesdashboard.vercel.app", file: "dashboard.png" },
  { url: "https://leo-website-kohl.vercel.app/", file: "leo-india.png", waitUntil: "domcontentloaded" },
  { url: "https://demo.gaurabbhandari.com/", file: "gaurab-bhandari.png", waitUntil: "domcontentloaded" },
];

const browser = await chromium.launch();
const outDir = path.join(__dirname, "../public/projects");

for (const { url, file, waitUntil = "networkidle" } of shots) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    await page.goto(url, { waitUntil, timeout: 60000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: path.join(outDir, file) });
    console.log("OK", file);
  } catch (err) {
    console.error("FAIL", file, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();
