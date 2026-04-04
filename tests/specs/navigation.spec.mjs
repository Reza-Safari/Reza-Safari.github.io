import { expect, test } from "@playwright/test";

const CRITICAL_ROUTES = [
  { path: "/", canonical: "http://127.0.0.1:4173/" },
  { path: "/writings/", canonical: "http://127.0.0.1:4173/writings/" },
  {
    path: "/writings/essays/t-shaped_data_professional/",
    canonical: "http://127.0.0.1:4173/writings/essays/t-shaped_data_professional/"
  }
];

test.describe("Navigation invariants", () => {
  test("menu links are correct", async ({ page }) => {
    await page.goto("/");

    const menuLinks = await page.locator(".menu__inner a").evaluateAll((links) =>
      links.map((link) => ({
        text: link.textContent.trim(),
        href: link.getAttribute("href")
      }))
    );

    expect(menuLinks.length).toBeGreaterThan(0);

    for (const link of menuLinks) {
      expect(link.text).toBeTruthy();
      expect(link.href).toBeTruthy();
    }
  });

  test("mobile menu toggle behavior", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const trigger = page.locator(".menu-trigger");
    const menu = page.locator("nav.menu");

    await expect(trigger).toBeVisible();
    await expect(menu).toHaveClass(/hidden/);

    await trigger.click();
    await expect(menu).not.toHaveClass(/hidden/);
  });

  for (const route of CRITICAL_ROUTES) {
    test(`canonical URL for ${route.path}`, async ({ page }) => {
      await page.goto(route.path);

      const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
      expect(canonical).toBe(route.canonical);
    });
  }
});
