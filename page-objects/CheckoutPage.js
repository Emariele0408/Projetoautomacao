import { expect } from "@playwright/test";

export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.getByRole('textbox', { name: 'First Name *' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name *' });
        this.email = page.getByRole('textbox', { name: 'Email Address *' });
        this.phone = page.getByRole('textbox', { name: 'Phone *' });
        this.address = page.getByRole('textbox', { name: 'Address *', exact: true });
        this.city = page.getByRole('textbox', { name: 'Town / City *' });
        this.postcode = page.locator("#billing_postcode");
        this.countryDropdown = page.getByRole('link', { name: 'Select an option…' }); // abre o dropdown
        this.paymentCash = page.locator("#payment_method_cod");
        this.placeOrderButton = page.getByRole('button', { name: 'Place order' });
    }

    fillBillingDetails = async (details) => {
        await this.firstName.fill(details.firstName);
        expect(await this.firstName.inputValue()).toBe(details.firstName);
        await this.lastName.fill(details.lastName);
        expect(await this.lastName.inputValue()).toBe(details.lastName);
        await this.email.fill(details.email);
        expect(await this.email.inputValue()).toBe(details.email);
        await this.phone.fill(details.phone);
        expect(await this.phone.inputValue()).toBe(details.phone);
        await this.address.fill(details.address);
        expect(await this.address.inputValue()).toBe(details.address);
        await this.city.fill(details.city);
        expect(await this.city.inputValue()).toBe(details.city);
        await this.postcode.scrollIntoViewIfNeeded();
        await this.postcode.waitFor({ state: 'visible' });
        await this.postcode.fill(details.postcode);
        await this.postcode.press('Tab');
        expect(await this.postcode.inputValue()).toBe(details.postcode);
    }
}
