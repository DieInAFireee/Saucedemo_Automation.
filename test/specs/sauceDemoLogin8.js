describe('Valid Checkout flow', () => {

    it('TC-8: user can complete checkout successfully', async () => {
   
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        await expect($('.inventory_list')).toBeDisplayed();
        await $('.inventory_item button').click();
        await expect($('.shopping_cart_badge')).toHaveText('1');
        const productName = await $('.inventory_item_name').getText();
        const productPrice = await $('.inventory_item_price').getText();
        await $('.shopping_cart_link').click();
        await expect($('.cart_list')).toBeDisplayed();
        await $('#checkout').click();
        await expect($('#first-name')).toBeDisplayed();
        await $('#first-name').setValue('John');
        await $('#last-name').setValue('Doe');
        await $('#postal-code').setValue('12345');
        await $('#continue').click();
        await expect($('.checkout_summary_container')).toBeDisplayed();
        await expect($('.inventory_item_name')).toHaveText(productName);
        await $('#finish').click();
        await expect($('.complete-header'))
            .toHaveText('Thank you for your order!');

        await $('#back-to-products').click();
        await expect($('.inventory_list')).toBeDisplayed();
        await expect($('.shopping_cart_badge')).not.toBeDisplayed();

    });

});