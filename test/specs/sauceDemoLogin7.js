import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import FooterPage from '../pageobjects/footer.page.js';

describe('Footer social links', () => {

    it('TC-7: footer links open in new tabs', async () => {

        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(InventoryPage.inventoryList).toBeDisplayed();

        // TWITTER / X
        await FooterPage.openTwitter();

        let handles = await FooterPage.switchToNewTab();

        await expect(browser)
            .toHaveUrl(expect.stringContaining('x.com'));

        await browser.closeWindow();
        await FooterPage.switchBack(handles);

        // FACEBOOK
        await FooterPage.openFacebook();

        handles = await FooterPage.switchToNewTab();

        await expect(browser)
            .toHaveUrl(expect.stringContaining('facebook'));
    });

});