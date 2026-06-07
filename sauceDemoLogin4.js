describe('Logout functionality', () => {

    it('TC-4: user can logout successfully', async () => {

        // Precondition: login first
        await browser.url('https://www.saucedemo.com/');

        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        // Ensure user is on inventory page
        await expect($('.inventory_list')).toBeDisplayed();

        // Step 1: click Burger menu
        await $('#react-burger-menu-btn').click();

        // Expected: menu is expanded
        await expect($('.bm-menu-wrap')).toBeDisplayed();

        // Step 2: click Logout
        await $('#logout_sidebar_link').click();

        // Expected: redirected to login page
        await expect($('#login-button')).toBeDisplayed();

        // Expected: fields are empty
        await expect($('#user-name')).toHaveValue('');
        await expect($('#password')).toHaveValue('');
    });

});