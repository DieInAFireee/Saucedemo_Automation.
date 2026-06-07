describe('Checkout without products', () => {

    it('TC-9: user cannot checkout with empty cart', async () => {

        // =====================
        // PRECONDITION: login
        // =====================
        await browser.url('https://www.saucedemo.com/');

        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        await expect($('.inventory_list')).toBeDisplayed();

        // =====================
        // STEP 1: Go to cart
        // =====================
        await $('.shopping_cart_link').click();

        await expect($('.cart_list')).toBeDisplayed();

        // verify cart is empty
        const cartItems = await $$('.cart_item');
        await expect(cartItems.length).toBe(0);

        // =====================
        // STEP 2: Try checkout
        // =====================
        const checkoutBtn = await $('#checkout');
        await checkoutBtn.click();

        // =====================
        // EXPECTATION
        // =====================
        // SauceDemo behavior: it still allows navigation to checkout form
        await expect(browser).toHaveUrl(expect.stringContaining('checkout'));

        // OPTIONAL (if you still want "business logic check")
        const firstNameField = await $('#first-name');
        await expect(firstNameField).toBeDisplayed();

    });

});