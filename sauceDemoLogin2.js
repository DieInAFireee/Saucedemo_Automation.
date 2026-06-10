import LoginPage from '../pageobjects/login.page.js';

await LoginPage.open();

await LoginPage.login(
    'standard_user',
    'wrong_password'
);

await expect(LoginPage.errorMessage)
    .toBeDisplayed();