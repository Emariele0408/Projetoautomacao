import { test, expect } from "@playwright/test";
import { ProductsPage } from "../page-objects/ProductsPage.js";
import { Navigation } from "../page-objects/Navigation.js";
import { CheckoutPage } from "../page-objects/CheckoutPage.js";

test("RealizarCompraCompleta", async ({ page }) => {

    const productsPage = new ProductsPage(page)
    await productsPage.visit()
    await productsPage.addProductToBasket(0)
    await productsPage.addProductToBasket(1)
    await productsPage.addProductToBasket(2)
    const finalBasketCount = await productsPage.getBasketCount()
    expect(finalBasketCount).toBe(3)
    const navigation = new Navigation(page)
    await navigation.goToCheckout()
    const checkout = new CheckoutPage(page)
    await checkout.fillBillingDetails({
        firstName: "EMARIELE",
        lastName: "SOUZA",
        email: "emariele@test.com",
        phone: "48999588578",
        address: "Rua Teste, 123",
        city: "Distrito Federal",
        postcode: "88815-310",
        state: "Federal District"
    });
});
