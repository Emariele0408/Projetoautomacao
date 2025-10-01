export class Navigation {
    constructor(page) {
        this.page = page;
        this.basketLink = page.locator(".wpmenucart-contents")
        this.checkoutButton = page.locator(".checkout-button")
    }

    goToCheckout = async () => {
        await this.basketLink.waitFor()
        await this.basketLink.click()
        await this.checkoutButton.waitFor()
        await this.checkoutButton.click()
        await this.page.locator("#billing_first_name").waitFor({ timeout: 60000 });
    }
}
