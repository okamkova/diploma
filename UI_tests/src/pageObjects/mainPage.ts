import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';
import { CASConsts } from '../utils/constants';
import { CASUrls } from '../utils/urls';
import * as helpers from '../helpers/common'


export class MainPage extends BasePage {
    readonly page: Page; 
    public url: string; 
    public chooseLanguageDropdown: Locator; 
    public spanishLanguageButton: Locator; 
    public solutionsButton: Locator; 
    public SearchString: Locator; 
    public contactUsButton: Locator; 
    public resourcesButton: Locator; 
    public pistoiaButton: Locator; 
    public casInsightsButton: Locator; 
    public trainingButton: Locator; 
    public aboutButton: string; 
    public faqsButton: Locator; 
    public registerNowButton: Locator; 
    public searchButton: Locator; 
    public dinamicHeader: string; 
    public casImage: string;


    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://www.cas.org/';
        //css locators
        this.chooseLanguageDropdown = page.locator('div[class*="n--p"]');
        this.spanishLanguageButton = page.locator('[hreflang*="es" ][class*="ge"]');
        this.solutionsButton = page.locator('[aria-controls*= "t-1"] > div:not([class*="w"])');
        this.SearchString = page.locator('input[id="search"]');
        this.contactUsButton = page.locator('[href="/contact"][class*="is"]');
        this.resourcesButton = page.locator('div[id*="toggle-3"]');
        this.pistoiaButton = page.locator('a[href*="safety"]');
        this.casInsightsButton = page.locator('[href*="cas-insights"][class*="nav"]');
        this.trainingButton = page.locator('a[href*="training"][class*="nav"]');
        this.aboutButton = 'div[id*="toggle-4"]';
        this.faqsButton = page.locator('a[href*="faqs"]');
        this.registerNowButton = page.locator('//div[@class="banner__text"]');
        this.searchButton = page.locator('input[type="submit"]:not([class*="mobile"])');
        this.dinamicHeader = 'a[href*="computer-interfaces"]';
        this.casImage = '[src*="CAS"][loading="lazy"]';
    }

    async openPage() {
        await super.openPage(this.url);
    }

    async selectSpanishLanguageToBeShown() {
        await this.chooseLanguageDropdown.click();
        await this.spanishLanguageButton.click();
    }

    async checkWhichLanguageIsOn(text: string) {
        const solutionsBtnText = await this.solutionsButton.innerText();
        expect(solutionsBtnText).toBe(text);
    }

    async performSearchInString() {
        await this.SearchString.fill('Benzene'); 
        await this.page.waitForSelector(this.dinamicHeader);
        await this.searchButton.click();
        await this.page.waitForSelector(CASConsts.searchResultSecondString);
        await helpers.checkUrlIsCorrect(this.page, CASConsts.casImage, CASUrls.searchResultUrl);
        await expect(this.page.locator(CASConsts.searchResOrganicSections)).toBeVisible();
    }


    async clickOnContactUsButton() {
        await helpers.clickOnButton(this.contactUsButton, this.page, this.casImage);
    }

    async checkUrlOfMainPage() {
        await helpers.checkUrlIsCorrect(this.page, this.aboutButton, CASUrls.mainUrl);
    }
}
