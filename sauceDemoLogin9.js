describe('Checkout without products', () => {

    it('TC-9: user cannot checkout with empty cart', async () => {

        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        await expect($('.inventory_list')).toBeDisplayed();
        await $('.shopping_cart_link').click();
        await expect($('.cart_list')).toBeDisplayed();
      
        const cartItems = await $$('.cart_item');
        await expect(cartItems.length).toBe(0);

        const checkoutBtn = await $('#checkout');
        await checkoutBtn.click();
        await expect(browser).toHaveUrl(expect.stringContaining('checkout'));
    
        const firstNameField = await $('#first-name');
        await expect(firstNameField).toBeDisplayed();

    });

});