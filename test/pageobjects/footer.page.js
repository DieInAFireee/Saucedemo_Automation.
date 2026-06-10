class FooterPage {

    get twitterLink() {
        return $('a[href*="twitter"], a[href*="x.com"]');
    }

    get facebookLink() {
        return $('a[href*="facebook"]');
    }

    async openTwitter() {
        await this.twitterLink.scrollIntoView();
        await this.twitterLink.waitForClickable();
        await this.twitterLink.click();
    }

    async openFacebook() {
        await this.facebookLink.scrollIntoView();
        await this.facebookLink.waitForClickable();
        await this.facebookLink.click();
    }

    async switchToNewTab() {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        return handles;
    }

    async switchBack(handles) {
        await browser.switchToWindow(handles[0]);
    }
}

export default new FooterPage();