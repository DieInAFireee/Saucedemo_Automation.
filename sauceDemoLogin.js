import { expect } from '@wdio/globals'

describe('login test', () => {
    it('should login', async () => {
        await browser.url('https://the-internet.herokuapp.com/login')

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        const flash = await $('#flash').getText()
        expect(flash).toContain('You logged into a secure area!')
    })
})