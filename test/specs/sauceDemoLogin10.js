import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Product sorting remains correct after page refresh', () => {

    it('TC-10: sorting should remain after page refresh', async () => {

        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.sortBy('Price (low to high)');

        const pricesBefore = await InventoryPage.getPrices();

        await browser.refresh();

        const selectedOption = await InventoryPage.getSelectedSortValue();
        expect(selectedOption).toBe('lohi');

        const pricesAfter = await InventoryPage.getPrices();

        expect(pricesAfter).toEqual(pricesBefore);

        const sortedPrices = [...pricesAfter].sort((a, b) => a - b);

        expect(pricesAfter).toEqual(sortedPrices);
    });

});