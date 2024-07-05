import { expect, type Locator, type Page} from '@playwright/test';
import { BasePage } from './basePage';
import { CASConsts } from '../utils/constants';
import { CASUrls } from '../utils/urls';
import * as helpers from '../helpers/common'

export class FAQsPage extends BasePage {
    readonly page: Page;
    public url: string;
    public titleText: string; 
    public firstAnswer: Locator; 
    public allAnswers: Locator; 
    public firstQuestion: Locator;
    public allQuestions: Locator; 

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://www.cas.org/about/faqs'; 
        //xpath
        this.titleText = '//h1'; 
        this.firstAnswer = page.locator('//div[@itemprop="acceptedAnswer"]').first(); 
        this.allAnswers = page.locator('//div[@itemprop="acceptedAnswer"]'); 
        this.firstQuestion = page.locator('//h3[@itemprop="name"][contains(text(),"What is CAS")]'); 
        this.allQuestions = page.locator('//h3[@itemprop="name"][contains(text(),"What is CAS")]'); 
    }

    async checkAnswerRepresentation() {
        await expect(this.firstAnswer).toHaveAttribute('style', CASConsts.firstAnswerHiddenStyle);
        await this.firstQuestion.click();
        await expect(this.firstAnswer).toBeVisible();
        await expect(this.firstAnswer).toHaveAttribute('style', CASConsts.firstAnswerVisibleStyle);
    }

    async checkUrlOfFAQsPage() {
        await helpers.checkUrlIsCorrect(this.page, this.titleText, CASUrls.faqsUrl);
    }

}