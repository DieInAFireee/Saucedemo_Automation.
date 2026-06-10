import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';

describe('Checkout without products', () => {

    it('TC-9: user cannot checkout with empty cart', async () => {

        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(InventoryPage.inventoryList).toBeDisplayed();

        await InventoryPage.cartLink.click();
        await expect(CartPage.cartList).toBeDisplayed();

        // 🔍 перевірка що кошик порожній
        await expect(await CartPage.cartItems.length).toBe(0);

        // 👉 checkout все одно доступний
        await CartPage.checkoutButton.click();

        await expect(browser)
            .toHaveUrl(expect.stringContaining('checkout'));

        await expect(CheckoutPage.firstName)
            .toBeDisplayed();
    });

});