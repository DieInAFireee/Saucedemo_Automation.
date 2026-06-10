
describe('Product sorting remains correct after page refresh', () => {
    it('TC-11: sorting should remain after page refresh', async () => {

    
        await browser.url('https://www.saucedemo.com/')
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()

        const sortDropdown = await $('.product_sort_container')
        await sortDropdown.selectByVisibleText('Price (low to high)')
        const priceElementsBefore = await $$('.inventory_item_price')

        const pricesBefore = []

        for (const price of priceElementsBefore) {
            const text = await price.getText()
            pricesBefore.push(parseFloat(text.replace('$', '')))
        }
        await browser.refresh()

        const selectedOption = await sortDropdown.getValue()
        expect(selectedOption).toBe('lohi')

        const priceElementsAfter = await $$('.inventory_item_price')

        const pricesAfter = []

        for (const price of priceElementsAfter) {
            const text = await price.getText()
            pricesAfter.push(parseFloat(text.replace('$', '')))
        }

        expect(pricesAfter).toEqual(pricesBefore)

        const sortedPrices = [...pricesAfter].sort((a, b) => a - b)

        expect(pricesAfter).toEqual(sortedPrices)
    })
})