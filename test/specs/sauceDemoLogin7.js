describe('Footer social links', () => {

    it('TC-7: footer links open in new tabs', async () => {

        await browser.url('https://www.saucedemo.com/');

        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        await $('.inventory_list').waitForDisplayed();
        const twitter = $('a[href*="twitter"]');
        await twitter.scrollIntoView();
        await twitter.waitForClickable();
        await twitter.click();

        let handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);

        await expect(browser).toHaveUrl(expect.stringContaining('x.com'));

        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);

        const facebook = $('a[href*="facebook"]');
        await facebook.scrollIntoView();
        await facebook.waitForClickable();
        await facebook.click();

        handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);

        await expect(browser).toHaveUrl(expect.stringContaining('facebook'));

    });

});