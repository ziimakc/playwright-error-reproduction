import { defineConfig, devices, type Config } from "@playwright/test";

const baseURL = `http://localhost`;

/** @see https://playwright.dev/docs/test-configuration. */
const config: Config = {
  testDir: "./src",
  fullyParallel: true,
  reporter: [
    ["html", { outputFolder: "./src/testing/integration/playwright-report" }],
  ],
  testMatch: "*.integration.test.ts",
  timeout: 5_000, // 5 seconds
  expect: {
    timeout: 1_000, // 1 second
  },
  use: {
    baseURL,
  },
  outputDir: "./src/testing/integration/test-results",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};

export default defineConfig(config);
