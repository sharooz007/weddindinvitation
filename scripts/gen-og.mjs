import puppeteer from "puppeteer-core";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dir = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dir, "..", "og.html");
const outPath  = join(__dir, "..", "og.png");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });

/* wait for fonts.ready signal */
await page.waitForSelector("[data-ready='1']", { timeout: 10000 }).catch(() => {});
await new Promise(r => setTimeout(r, 600));

await page.screenshot({ path: outPath, type: "png", clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();

console.log("og.png written →", outPath);
