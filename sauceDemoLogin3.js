describe('Login with locked out user', () => {

    it('TC-3: should block locked out user', async () => {

        await browser.url('https://www.saucedemo.com/');

        await $('#user-name').setValue('locked_out_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        await expect($('.error-button')).toBeDisplayed();

        await expect($('h3[data-test="error"]'))
            .toHaveTextContaining('locked out');
    });

});