const {test,expect } = require('@playwright/test')

test.skip("verify the Application title", async({page})=> {

    await page.goto('https://google.com')
    await expect(page).toHaveTitle("Google")
})