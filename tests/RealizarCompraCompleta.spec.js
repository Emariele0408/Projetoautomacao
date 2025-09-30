import { test, expect } from "@playwright/test"
import { ProductsPage } from "../page-objects/ProductsPage.js"

test.only("RealizarCompraCompleta", async ({ page }) => {
    const productsPage = new ProductsPage(page)
    await productsPage.visit()
    await productsPage.addProductToBasket(0)
    await productsPage.addProductToBasket(1)
    await productsPage.addProductToBasket(2)

    // Valida que o carrinho tem 3 itens no final
    const finalBasketCount = await productsPage.getBasketCount()
    expect(finalBasketCount).toBe(3)
})
