class InventoryPage {

    get inventoryList() {
        return $('.inventory_list');
    }

    get burgerMenuButton() {
        return $('#react-burger-menu-btn');
    }

    get menuWrap() {
        return $('.bm-menu-wrap');
    }

    get logoutButton() {
        return $('#logout_sidebar_link');
    }

    async logout() {
        await this.burgerMenuButton.click();
        await this.menuWrap.waitForDisplayed();
        await this.logoutButton.click();
    }
}

export default new InventoryPage();