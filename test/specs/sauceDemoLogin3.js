import LoginPage from '../pageobjects/login.page.js';

describe('Login with locked out user', () => {

    it('TC-3: should block locked out user', async () => {

        await LoginPage.open();

        await LoginPage.login(
            'locked_out_user',
            'secret_sauce'
        );

        await expect(LoginPage.errorButton).toBeDisplayed();

        await expect(LoginPage.errorMessage)
            .toHaveTextContaining('locked out');
    });

});