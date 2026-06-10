describe('Logout functionality', () => {

    it('TC-4: user can logout successfully', async () => {

        await browser.url('https://www.saucedemo.com/');

        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        await expect($('.inventory_list')).toBeDisplayed();

        
        await $('#react-burger-menu-btn').click();
        await expect($('.bm-menu-wrap')).toBeDisplayed();
        await $('#logout_sidebar_link').click();

        await expect($('#login-button')).toBeDisplayed();
        await expect($('#user-name')).toHaveValue('');
        await expect($('#password')).toHaveValue('');
    });

});