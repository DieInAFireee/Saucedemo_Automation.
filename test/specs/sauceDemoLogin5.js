import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';

describe('Cart persistence after logout', () => {

    it('TC-5: cart should remain after logout and re-login', async () => {

        await LoginPage.open();

        await LoginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await expect(
            InventoryPage.inventoryList
        ).toBeDisplayed();

        await InventoryPage.firstAddToCartButton.click();

        await expect(
            InventoryPage.cartBadge
        ).toHaveText('1');

        const cartItemName =
            await InventoryPage.firstItemName.getText();

        await InventoryPage.logout();

        await expect(
            LoginPage.loginButton
        ).toBeDisplayed();

        await LoginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await expect(
            InventoryPage.inventoryList
        ).toBeDisplayed();

        await InventoryPage.cartLink.click();

        await expect(
            CartPage.cartList
        ).toBeDisplayed();

        await expect(
            CartPage.itemName
        ).toHaveText(cartItemName);
    });

});