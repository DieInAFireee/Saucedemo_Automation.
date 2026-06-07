import { expect } from '@wdio/globals'

describe('Product sorting remains correct after page refresh', () => {
    it('TC-11: sorting should remain after page refresh', async () => {

        // Login
        await browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()

        // Select "Price (low to high)"
        const sortDropdown = await $('.product_sort_container')
        await sortDropdown.selectByVisibleText('Price (low to high)')

        // Get prices before refresh
        const priceElementsBefore = await $$('.inventory_item_price')

        const pricesBefore = []

        for (const price of priceElementsBefore) {
            const text = await price.getText()
            pricesBefore.push(parseFloat(text.replace('$', '')))
        }

        // Refresh page
        await browser.refresh()

        // Verify selected sorting option
        const selectedOption = await sortDropdown.getValue()
        expect(selectedOption).toBe('lohi')

        // Get prices after refresh
        const priceElementsAfter = await $$('.inventory_item_price')

        const pricesAfter = []

        for (const price of priceElementsAfter) {
            const text = await price.getText()
            pricesAfter.push(parseFloat(text.replace('$', '')))
        }

        // Compare order before and after refresh
        expect(pricesAfter).toEqual(pricesBefore)

        // Additional verification: prices are sorted ascending
        const sortedPrices = [...pricesAfter].sort((a, b) => a - b)

        expect(pricesAfter).toEqual(sortedPrices)
    })
})