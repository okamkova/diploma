import { expect, type Locator, type Page} from '@playwright/test';
import { BasePage } from './basePage';
import { CASConsts } from '../utils/constants';
import { CASUrls } from '../utils/urls';
import * as helpers from '../helpers/common'

export class InsightsPage extends BasePage {
    readonly page: Page;
    public url: string;
    public titleText: string; 
    public filtersTitle: Locator; 
    public filterShowingResults: Locator; 
    public boitechnologyCheckbox: Locator; 
    public materialsCheckbox: Locator; 
    public clearByTopicBtn: Locator; 
    public materialsBtn: string; 
    public biotechBtn: string; 
    public materialsArticle: string; 
    public consumerArticle: string; 

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://www.cas.org/resources/cas-insights'; 
        //xpath
        this.titleText = '//h1'; 
        this.filtersTitle = page.locator('//div[@class="cas-filters__heading"]'); 
        this.filterShowingResults = page.locator('//span[@fs-cmsfilter-element="results-count"]'); 
        this.boitechnologyCheckbox = page.locator('//span[text()="Biotechnology"]'); 
        this.materialsCheckbox = page.locator('//span[text()="Materials"]'); 
        this.clearByTopicBtn = page.locator('//div[text()="Clear"]').first(); 
        this.biotechBtn = '//div[text()="Biotechnology"][@fs-cmsfilter-element="tag-text"]'; 
        this.materialsBtn = '//div[text()="Materials"][@fs-cmsfilter-element="tag-text"]'; 
        this.materialsArticle = '//a[contains(text(),"Emerging")]'; 
        this.consumerArticle = '//a[contains(text(),"Evolving beauty")]'; 
    }

    async checkPageIsLoaded() {
        await helpers.checkUrlIsCorrect(this.page, this.titleText, CASUrls.insightsUrl);
        await expect(this.filtersTitle).toBeVisible();
    }

    async checkResultNumber(selector: string, text: string, resultSelector: string) {
        await this.page.waitForSelector(selector); 
        await this.page.waitForSelector(resultSelector);
        const filterResultNumberOfArticles = await this.filterShowingResults.innerText();
        expect(filterResultNumberOfArticles).toBe(text);
    }

    async filterSelection() {
        await this.boitechnologyCheckbox.check();
        await this.materialsCheckbox.check();
        await this.page.waitForSelector(this.materialsArticle);
    }

}