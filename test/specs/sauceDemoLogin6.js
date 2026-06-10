import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Product sorting', () => {

    it('TC-6: sorting options work correctly', async () => {

        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(InventoryPage.inventoryList).toBeDisplayed();


        await InventoryPage.sortBy('Name (A to Z)');

        let namesAZ = await InventoryPage.getNamesText();
        let sortedAZ = [...namesAZ].sort();

        await expect(namesAZ).toEqual(sortedAZ);

    
        await InventoryPage.sortBy('Name (Z to A)');

        let namesZA = await InventoryPage.getNamesText();
        let sortedZA = [...namesAZ].sort().reverse();

        await expect(namesZA).toEqual(sortedZA);

        await InventoryPage.sortBy('Price (low to high)');

        let pricesLow = await InventoryPage.getPricesNumbers();
        let sortedLow = [...pricesLow].sort((a, b) => a - b);

        await expect(pricesLow).toEqual(sortedLow);

        await InventoryPage.sortBy('Price (high to low)');

        let pricesHigh = await InventoryPage.getPricesNumbers();
        let sortedHigh = [...pricesHigh].sort((a, b) => b - a);

        await expect(pricesHigh).toEqual(sortedHigh);
    });

});