describe('Product sorting', () => {

    it('TC-6: sorting options work correctly', async () => {

        // PRECONDITION: login
        await browser.url('https://www.saucedemo.com/');

        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        await expect($('.inventory_list')).toBeDisplayed();

        const sortSelect = $('.product_sort_container');

        // =========================
        // 1. NAME A → Z
        // =========================
        await sortSelect.selectByVisibleText('Name (A to Z)');

        let namesAZ = await $$('.inventory_item_name').map(el => el.getText());
        let sortedAZ = [...namesAZ].sort();

        await expect(namesAZ).toEqual(sortedAZ);

        // =========================
        // 2. NAME Z → A
        // =========================
        await sortSelect.selectByVisibleText('Name (Z to A)');

        let namesZA = await $$('.inventory_item_name').map(el => el.getText());
        let sortedZA = [...namesAZ].sort().reverse();

        await expect(namesZA).toEqual(sortedZA);

        // =========================
        // 3. PRICE LOW → HIGH
        // =========================
        await sortSelect.selectByVisibleText('Price (low to high)');

        let pricesLow = await $$('.inventory_item_price').map(async el =>
            parseFloat((await el.getText()).replace('$', ''))
        );

        pricesLow = await Promise.all(pricesLow);
        let sortedLow = [...pricesLow].sort((a, b) => a - b);

        await expect(pricesLow).toEqual(sortedLow);

        // =========================
        // 4. PRICE HIGH → LOW
        // =========================
        await sortSelect.selectByVisibleText('Price (high to low)');

        let pricesHigh = await $$('.inventory_item_price').map(async el =>
            parseFloat((await el.getText()).replace('$', ''))
        );

        pricesHigh = await Promise.all(pricesHigh);
        let sortedHigh = [...pricesLow].sort((a, b) => b - a);

        await expect(pricesHigh).toEqual(sortedHigh);

    });

});