class CartPage {

    get cartList() {
        return $('.cart_list');
    }

    get checkoutButton() {
        return $('#checkout');
    }

    get itemName() {
        return $('.inventory_item_name');
    }
    get cartList() {
        return $('.cart_list');
    }

    get cartItems() {
        return $$('.cart_item');
    }

    get checkoutButton() {
        return $('#checkout');
    }
}

export default new CartPage();