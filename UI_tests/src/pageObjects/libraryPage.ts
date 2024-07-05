import { expect, type Locator, type Page} from '@playwright/test';
import { BasePage } from './basePage';
import { CASUrls } from '../utils/urls';
import * as helpers from '../helpers/common'

export class LibraryPage extends BasePage {
    readonly page: Page;
    public url: string;
    public titleText: string;
    public secondTitle: Locator;
    public libraryLogin: Locator;
    public pistoiaLink: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://www.cas.org/contact'; 
        //css
        this.titleText = 'h1:nth-child(1)';
        this.secondTitle = page.locator('h2:nth-child(1)');
        this.libraryLogin = page.locator('a[href*="safescience"]');
        this.pistoiaLink = page.locator('a[href*="pistoiaalliance"]');
    }


    async checkLibraryPageContent(text: string) {
        await helpers.checkUrlIsCorrect(this.page, this.titleText, CASUrls.libraryUrl);
        const secondTitleText = await this.secondTitle.innerText();
        expect(secondTitleText).toBe(text);
        await expect(this.libraryLogin).not.toBeDisabled();
        expect(this.pistoiaLink).toBeTruthy();

    }
}