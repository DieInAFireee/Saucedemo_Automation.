import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';

describe('Valid Checkout flow', () => {

    it('TC-8: user can complete checkout successfully', async () => {

        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(InventoryPage.inventoryList).toBeDisplayed();

        await InventoryPage.firstAddToCartButton.click();
        await expect(InventoryPage.cartBadge).toHaveText('1');

        const productName = await InventoryPage.firstItemName.getText();
        const productPrice = await InventoryPage.firstItemPrice.getText();

        await InventoryPage.cartLink.click();
        await expect(CartPage.cartList).toBeDisplayed();

        await CartPage.checkoutButton.click();
        await expect(CheckoutPage.firstName).toBeDisplayed();

        await CheckoutPage.fillInfo('John', 'Doe', '12345');
        await CheckoutPage.continueButton.click();

        await expect(CheckoutPage.summaryContainer).toBeDisplayed();
        await expect(InventoryPage.firstItemName).toHaveText(productName);

        await CheckoutPage.finishButton.click();

        await expect(CheckoutPage.successMessage)
            .toHaveText('Thank you for your order!');

        await CheckoutPage.backToProducts.click();

        await expect(InventoryPage.inventoryList).toBeDisplayed();
        await expect(InventoryPage.cartBadge).not.toBeDisplayed();
    });

});