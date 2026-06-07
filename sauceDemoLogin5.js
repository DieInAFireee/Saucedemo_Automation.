describe('Cart persistence after logout', () => {

    it('TC-5: cart should remain after logout and re-login', async () => {

        // PRECONDITION: login
        await browser.url('https://www.saucedemo.com/');

        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        // ensure inventory page
        await expect($('.inventory_list')).toBeDisplayed();

        // STEP 1: add product to cart
        await $('.inventory_item button').click(); // first product

        // verify cart badge = 1
        await expect($('.shopping_cart_badge')).toHaveText('1');

        const cartItemName = await $('.inventory_item_name').getText();

        // STEP 2: open burger menu
        await $('#react-burger-menu-btn').click();
        await expect($('.bm-menu-wrap')).toBeDisplayed();

        // STEP 3: logout
        await $('#logout_sidebar_link').click();

        // verify login page
        await expect($('#login-button')).toBeDisplayed();
        await expect($('#user-name')).toHaveValue('');
        await expect($('#password')).toHaveValue('');

        // STEP 4: login again
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        await expect($('.inventory_list')).toBeDisplayed();

        // STEP 5: open cart
        await $('.shopping_cart_link').click();

        // verify cart page
        await expect($('.cart_list')).toBeDisplayed();

        // verify same product exists
        await expect($('.inventory_item_name')).toHaveText(cartItemName);

    });

});