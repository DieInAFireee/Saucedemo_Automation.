import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Logout functionality', () => {

    it('TC-4: user can logout successfully', async () => {

        await LoginPage.open();

        await LoginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await expect(
            InventoryPage.inventoryList
        ).toBeDisplayed();

        await InventoryPage.logout();

        await expect(
            LoginPage.loginButton
        ).toBeDisplayed();

        await expect(
            LoginPage.usernameInput
        ).toHaveValue('');

        await expect(
            LoginPage.passwordInput
        ).toHaveValue('');
    });

});