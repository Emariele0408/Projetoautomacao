import { test } from "@playwright/test"

test("Google page Search", async ({ page }) => {
    await page.goto("https://www.google.com");
    await page.getByRole('combobox', { name: 'Pesquisar' }).fill("teste");
    await page.getByRole('button', { name: 'Pesquisa Google' }).first().click();
})