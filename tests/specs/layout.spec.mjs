import { expect, test } from "@playwright/test";

const CRITICAL_ROUTES = [
  { path: "/", name: "homepage" },
  { path: "/writings/", name: "writings list" },
  { path: "/writings/essays/t-shaped_data_professional/", name: "single page" }
];

test.describe("Layout structure invariants", () => {
  for (const route of CRITICAL_ROUTES) {
    test(`header structure on ${route.name}`, async ({ page }) => {
      await page.goto(route.path);

      await expect(page.locator("header.header")).toHaveCount(1);
      await expect(page.locator(".logo__text")).toHaveText("sudo Reza-Safari/home/");
    });

    test(`footer structure on ${route.name}`, async ({ page }) => {
      await page.goto(route.path);

      await expect(page.locator("footer.footer")).toHaveCount(1);

      const footerChildren = await page
        .locator("footer.footer")
        .evaluate((el) => el.querySelectorAll(":scope > *").length);
      expect(footerChildren).toBe(0);
    });

    test(`navigation structure on ${route.name}`, async ({ page }) => {
      await page.goto(route.path);

      await expect(page.locator(".menu .menu__inner")).toHaveCount(1);
      await expect(page.locator(".menu-trigger")).toHaveCount(1);
    });

    test(`page title on ${route.name}`, async ({ page }) => {
      await page.goto(route.path);

      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(0);
    });
  }
});

test.describe("Asset invariants", () => {
  test("main CSS asset exists and is fingerprinted", async ({ page }) => {
    await page.goto("/");

    const mainCss = await page
      .locator('link[rel="stylesheet"][href*="main."]')
      .first()
      .getAttribute("href");

    expect(mainCss).toBeTruthy();
    expect(mainCss).toMatch(/\/main\.[a-f0-9]+\.css$/i);
  });
});
