class InventoryPage {

    get pageTitle() {
        return $('.title');
    }

    get firstAddToCartButton() {
        return $('button[data-test^="add-to-cart"]');
    }

    get shoppingCartBadge() {
        return $('.shopping_cart_badge');
    }

    async addFirstProductToCart() {
        await this.firstAddToCartButton.click();
    }
}

export default new InventoryPage();