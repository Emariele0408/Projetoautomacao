import { expect } from '@playwright/test';

export class ProductsPage {
    constructor(page) {
        this.page = page
        this.addButtons = page.locator('a.add_to_cart_button')
        this.basketCounter = page.locator('span.cartcontents')
    }

    visit = async () => {
        await this.page.goto("https://practice.automationtesting.in/", {
            timeout: 60000,  
            waitUntil: "load" 
        });
    }

    getBasketCount = async () => {
        await this.basketCounter.waitFor()
        const text = await this.basketCounter.innerText()
        const match = text.match(/\d+/) 
        return match ? parseInt(match[0], 10) : 0
    }
    
    addProductToBasket = async (index) => {
        const specificAddButton = this.addButtons.nth(index)
        await specificAddButton.waitFor()
        await expect(specificAddButton).toHaveText(/Add to basket/i)

        const basketCountBeforeAdding = await this.getBasketCount()

        await Promise.all([
            specificAddButton.click(),
            expect(this.basketCounter).not.toHaveText(new RegExp(`\\b${basketCountBeforeAdding}\\b`))
        ])

        const basketCountAfterAdding = await this.getBasketCount()
        expect(basketCountAfterAdding).toBeGreaterThan(basketCountBeforeAdding)
    }
}

