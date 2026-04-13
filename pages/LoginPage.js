export class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator("id=user-name");
        this.password = page.locator("id=password");
        this.loginButton = page.locator("id=login-button");
    }

    async openApplication() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async logintoApplication(userNameval, passwordval) {
        await this.userName.fill(userNameval);
        await this.password.fill(passwordval);
        await this.loginButton.click();
    }
}