class CheckoutPage {

    get firstName() {
        return $('#first-name');
    }

    get lastName() {
        return $('#last-name');
    }

    get postalCode() {
        return $('#postal-code');
    }

    get continueButton() {
        return $('#continue');
    }

    get finishButton() {
        return $('#finish');
    }

    get summaryContainer() {
        return $('.checkout_summary_container');
    }

    get successMessage() {
        return $('.complete-header');
    }

    get backToProducts() {
        return $('#back-to-products');
    }

    async fillInfo(first, last, zip) {
        await this.firstName.setValue(first);
        await this.lastName.setValue(last);
        await this.postalCode.setValue(zip);
    }
}

export default new CheckoutPage();