import { expect, type Locator, type Page} from '@playwright/test';
import { BasePage } from './basePage';
import { CASConsts } from '../utils/constants';

export class ContactPage extends BasePage {
    readonly page: Page;
    public url: string;
    public submitBtn: any;
    public mailBtn: Locator;
    public customerSalesHeader: Locator;
    public titleText: Locator;
    public emailAdrdressString: Locator;
    public firstNameString: Locator;
    public lastNameString: Locator;
    public phoneBtn: Locator;
    public emailError: Locator;
    public organizationError: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.url = 'https://www.cas.org/contact'; 
        //xpath
        this.mailBtn = page.locator('//a[@href="mailto:cas-pr@cas.org"]'); 
        this.customerSalesHeader = page.locator('//h3[contains(text(),"Customer")]'); 
        this.titleText = page.locator('//h1'); 
        this.emailAdrdressString = page.locator('//input[@data-name="emailAddress"]'); 
        this.firstNameString = page.locator('//input[@data-name="firstName"]'); 
        this.lastNameString = page.locator('//input[@data-name="lastName"]'); 
        this.submitBtn = page.locator('//input[@value="Submit"]'); 
        this.phoneBtn = page.locator('//input[@name="busPhone"]'); 
        this.emailError = page.locator('//span[contains(text(),"email")]'); 
        this.organizationError = page.locator('//span[contains(text(),"field")]'); 
    }

    async openPage() {
        await super.openPage(this.url);
    }

    async checkButtonsRepresentation(text: string) {
        expect(this.titleText).toHaveClass("promo-hero__title");
        const CustomerCenterHeaderText = await this.titleText.innerText();
        expect(CustomerCenterHeaderText).toBe(text);
        await expect(this.customerSalesHeader).toBeVisible();
        await expect(this.mailBtn).toBeEnabled();

    }

    async checkContactSupportLogin() {
        await this.emailAdrdressString.fill(CASConsts.emailStringfill);
        await this.firstNameString.fill(CASConsts.contactName);
        await this.lastNameString.fill(CASConsts.contactName);
        await this.submitBtn.click();
        await this.phoneBtn.scrollIntoViewIfNeeded();
        await this.phoneBtn.click();
    }

}