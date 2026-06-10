import LoginPage from '../pageobjects/login.page.js';

describe('Login test', () => {

    it('TC-1', async () => {

        await LoginPage.open();

        await LoginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await expect(browser)
            .toHaveUrlContaining('inventory.html');

    });

});