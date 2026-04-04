import { expect, test } from "@playwright/test";

test.describe("Light mode style invariants", () => {
  test.use({ colorScheme: "light" });

  test("header and body colors", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    const headerBg = await page
      .locator("header.header")
      .evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(headerBg).toBe("rgb(250, 250, 250)");

    const bodyBg = await page.locator("body").evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(bodyBg).toBe("rgb(255, 255, 255)");

    const bodyColor = await page.locator("body").evaluate((el) => getComputedStyle(el).color);
    expect(bodyColor).toBe("rgb(34, 34, 34)");
  });
});

test.describe("Dark mode style invariants", () => {
  test.use({ colorScheme: "dark" });

  test("header and body colors", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    const headerBg = await page
      .locator("header.header")
      .evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(headerBg).toBe("rgb(27, 28, 29)");

    const bodyBg = await page.locator("body").evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(bodyBg).toBe("rgb(35, 36, 37)");

    const bodyColor = await page.locator("body").evaluate((el) => getComputedStyle(el).color);
    expect(bodyColor).toBe("rgb(169, 169, 179)");
  });
});

test.describe("Responsive behavior invariants", () => {
  test("desktop - menu trigger hidden", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    const menuTriggerDisplay = await page
      .locator(".menu-trigger")
      .evaluate((el) => getComputedStyle(el).display);
    expect(menuTriggerDisplay).toBe("none");
  });

  test("mobile - menu trigger visible", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const trigger = page.locator(".menu-trigger");
    await expect(trigger).toBeVisible();
  });
});
