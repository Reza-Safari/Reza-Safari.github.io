import { expect, test } from "@playwright/test";

test.describe("Feed invariants", () => {
  test("RSS feed is accessible", async ({ page }) => {
    const response = await page.goto("/index.xml");
    expect(response.status()).toBe(200);

    const contentType = response.headers()["content-type"];
    expect(contentType).toContain("xml");
  });
});
