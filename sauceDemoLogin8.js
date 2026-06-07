describe('Valid Checkout flow', () => {

    it('TC-8: user can complete checkout successfully', async () => {

        // =====================
        // PRECONDITION: login
        // =====================
        await browser.url('https://www.saucedemo.com/');

        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        await expect($('.inventory_list')).toBeDisplayed();

        // =====================
        // STEP 1: Add to cart
        // =====================
        await $('.inventory_item button').click();

        await expect($('.shopping_cart_badge')).toHaveText('1');

        const productName = await $('.inventory_item_name').getText();
        const productPrice = await $('.inventory_item_price').getText();

        // =====================
        // STEP 2: Go to cart
        // =====================
        await $('.shopping_cart_link').click();

        await expect($('.cart_list')).toBeDisplayed();

        // =====================
        // STEP 3: Checkout
        // =====================
        await $('#checkout').click();

        await expect($('#first-name')).toBeDisplayed();

        // =====================
        // STEP 4-6: Fill form
        // =====================
        await $('#first-name').setValue('John');
        await $('#last-name').setValue('Doe');
        await $('#postal-code').setValue('12345');

        // =====================
        // STEP 7: Continue
        // =====================
        await $('#continue').click();

        await expect($('.checkout_summary_container')).toBeDisplayed();

        // verify product still exists
        await expect($('.inventory_item_name')).toHaveText(productName);

        // =====================
        // STEP 8: Finish
        // =====================
        await $('#finish').click();

        await expect($('.complete-header'))
            .toHaveText('Thank you for your order!');

        // =====================
        // STEP 9: Back Home
        // =====================
        await $('#back-to-products').click();

        await expect($('.inventory_list')).toBeDisplayed();

        // cart should be empty
        await expect($('.shopping_cart_badge')).not.toBeDisplayed();

    });

});