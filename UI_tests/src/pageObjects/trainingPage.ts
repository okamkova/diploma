import { expect, type Locator, type Page} from '@playwright/test';
import { BasePage } from './basePage';
import { CASUrls } from '../utils/urls';
import * as helpers from '../helpers/common'

export class TrainingPage extends BasePage {
    readonly page: Page;
    public url: string;
    public titleText: string; 
    public searchString: Locator; 
    public searchResultMessage: string; 
    public searchErrorMessage: string; 
    public casImage: Locator;



    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://www.cas.org/training'; 
        //css
        this.titleText = 'h1:nth-child(1)'; 
        this.searchString = page.locator('input[class*="bar-2"]'); 
        this.searchResultMessage = 'div.w-form-done > div'; 
        this.searchErrorMessage = 'div.w-form-fail > div'; 
        this.casImage = page.locator('[src*="CAS"][loading="lazy"]');
    }


    async performQuickSearch(text: string, textError: string) {
        await helpers.checkUrlIsCorrect(this.page, this.titleText, CASUrls.trainingUrl);
        await this.searchString.pressSequentially('Benzene');
        await this.searchString.press('Enter');
        if(await this.page.locator(this.searchResultMessage).isVisible()) {
        await this.page.waitForSelector(this.searchResultMessage);
        const searchResultMessageText = await (this.page.locator(this.searchResultMessage)).innerText();
        expect(searchResultMessageText).toBe(text); 
        } else if (await this.page.locator(this.searchErrorMessage).isVisible()) {
            await this.page.waitForSelector(this.searchErrorMessage);
            const searchErrorMessageText = await (this.page.locator(this.searchErrorMessage)).innerText();
            expect(searchErrorMessageText).toBe(textError);
        }
    }

    async turnToMainPage () {
        await helpers.checkUrlIsCorrect(this.page, this.titleText, CASUrls.trainingUrl);
        await this.casImage.click();
    }

}