import LoginPage from '../pageobjects/login.page.js';

describe('Login with invalid password', () => {

    it('TC-2: should show error with invalid password', async () => {

        await LoginPage.open();

        await LoginPage.login(
            'standard_user',
            'wrong_password'
        );

        await expect(LoginPage.errorMessage)
            .toBeDisplayed();

    });

});