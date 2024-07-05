import { expect, type Locator, type Page} from '@playwright/test';

export async function checkUrlIsCorrect(page: Page, selector: string, expectedUrl: string) { 
    await page.waitForSelector(selector);
    await expect(page).toHaveURL(expectedUrl);
}

export async function clickOnButton(locator: Locator, page: Page, selector: string) { 
    await locator.click();
    await page.waitForSelector(selector);
}