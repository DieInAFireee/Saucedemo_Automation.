describe('Login with invalid password', () => {

    it('TC-2: invalid password shows error', async () => {

        // Precondition
        await browser.url('https://www.saucedemo.com/');

        // Step 1: enter login
        await $('#user-name').setValue('standard_user');

        // Step 2: enter invalid password
        await $('#password').setValue('wrong_password_123');

        // Step 3: click login
        await $('#login-button').click();

        // Expected: error icon
        await expect($('.error-button')).toBeDisplayed();

        // Expected: error message
        await expect($('h3[data-test="error"]'))
            .toHaveTextContaining('Username and password do not match');
    });

});