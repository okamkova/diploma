import { expect, type Locator, type Page} from '@playwright/test';
import { BasePage } from './basePage';
import { CASConsts } from '../utils/constants';
import { CASUrls } from '../utils/urls';
import * as helpers from '../helpers/common'

export class WebinarPage extends BasePage {
    readonly page: Page;
    public url: string;
    public titleText: string; 
    public registerNowBtn: Locator; 
    public speakerImg: Locator;


    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://www.cas.org/resources/webinar/cas-stnextr-coffee-lecture-meet-cas-stnext-database-pqscitech'; 
        //xpath
        this.titleText = '//h1'; 
        this.registerNowBtn = page.locator('//a[@href="#register"][@class="button w-button"]'); 
        this.speakerImg = page.locator('//img[@class="webinar__avatar"]');
    }


    async checkWebinarPageContent(text: string) {
        const TitleText = await this.page.locator(this.titleText).innerText();
        expect(TitleText).toBe(text);
        await expect(this.registerNowBtn).toBeEnabled();
        await expect(this.speakerImg).toBeVisible();

    }

    async checkUrlOfWebinarPage() {
        await helpers.checkUrlIsCorrect(this.page, this.titleText, CASUrls.webinarUrl);
    }

}