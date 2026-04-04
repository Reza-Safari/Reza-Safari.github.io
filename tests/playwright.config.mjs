import { defineConfig } from "@playwright/test";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

export default defineConfig({
  testDir: "specs",
  timeout: 30_000,
  reporter: [["list"], ["html", { outputFolder: "playwright-report", open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:4173",
    headless: true
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" }
    },
    {
      name: "firefox",
      use: { browserName: "firefox" }
    },
    {
      name: "webkit",
      use: { browserName: "webkit" }
    }
  ],
  webServer: {
    command: "python3 -m http.server 4173 --directory public",
    cwd: repoRoot,
    port: 4173,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  }
});
