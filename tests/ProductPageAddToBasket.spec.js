import { test, expect } from "@playwright/test"

test("Product Page Add To Basket", async ({ page }) => {
    await page.goto("https://practice.automationtesting.in/");
    await page.getByRole('link', { name: 'Selenium Ruby Selenium Ruby ₹' }).click({ name: 'Selenium Ruby Selenium Ruby ₹' });
    await page.getByRole('button', { name: 'Add to basket' }).click({ name: 'Add to basket' });
    await expect(page.locator('a.wpmenucart-contents')).toHaveText('1 item₹500.00');
})