class CartPage {

    get checkoutButton() {
        return $('#checkout');
    }

    get cartItems() {
        return $$('.cart_item');
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }
}

export default new CartPage();