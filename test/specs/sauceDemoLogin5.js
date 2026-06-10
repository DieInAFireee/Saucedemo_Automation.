describe('Cart persistence after logout', () => {

    it('TC-5: cart should remain after logout and re-login', async () => {

        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        await expect($('.inventory_list')).toBeDisplayed();
        await $('.inventory_item button').click();
        await expect($('.shopping_cart_badge')).toHaveText('1');

        const cartItemName = await $('.inventory_item_name').getText();

        await $('#react-burger-menu-btn').click();
        await expect($('.bm-menu-wrap')).toBeDisplayed();
        await $('#logout_sidebar_link').click();
        await expect($('#login-button')).toBeDisplayed();
        await expect($('#user-name')).toHaveValue('');
        await expect($('#password')).toHaveValue('');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        await expect($('.inventory_list')).toBeDisplayed();
        await $('.shopping_cart_link').click();
        await expect($('.cart_list')).toBeDisplayed();
        await expect($('.inventory_item_name')).toHaveText(cartItemName);

    });

});