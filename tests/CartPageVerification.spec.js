import {test} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage'; 

test.only('Verify the Cart Page', async({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.openApplication();
    await loginPage.logintoApplication("standard_user","secret_sauce");
})