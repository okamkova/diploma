import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pageObjects/mainPage';
import { PageFactory } from '../src/pageObjects/pageFactory';
import { ContactPage } from '../src/pageObjects/contactPage';
import { CASConsts } from '../src/utils/constants';
import { CASUrls } from '../src/utils/urls'; 
import { LibraryPage } from '../src/pageObjects/libraryPage';
import { InsightsPage } from '../src/pageObjects/insightsPage';
import { TrainingPage } from '../src/pageObjects/trainingPage';
import { FAQsPage } from '../src/pageObjects/faqsPage';
import { WebinarPage } from '../src/pageObjects/webinarPage';
import * as helpers from '../src/helpers/common'

test.describe.configure( {mode: "parallel", retries:0, timeout: 100000}); //serial
test.expect({ timeout: 10000 });

test.describe('CAS main UI Tests', () => {
    test.beforeEach( async ({page}) => {
        await page.setViewportSize({ width: 1920, height: 1080});
        //await page.context().clearCookies();
        const mainPage = PageFactory.getPage("Main", page) as MainPage;
        await mainPage.openPage();
    });

    test('1. Switch to Spanish Language', async ({page}) => {
        const mainPage = PageFactory.getPage("Main", page) as MainPage;
    
        await mainPage.checkWhichLanguageIsOn(CASConsts.englishLan);
        await mainPage.selectSpanishLanguageToBeShown();
        await mainPage.checkWhichLanguageIsOn(CASConsts.spainLan);
    });

    test('2. Check Search String work', async ({page}) => {
        const mainPage = PageFactory.getPage("Main", page) as MainPage;
        
        await mainPage.performSearchInString(); 
    });

    test('3. Check Contact Us work', async ({page}) => {
        const mainPage = PageFactory.getPage("Main", page) as MainPage;
        const contactPage = PageFactory.getPage("Contact", page) as ContactPage;

        await mainPage.clickOnContactUsButton();
        await contactPage.checkButtonsRepresentation(CASConsts.CustomerCenterText);
        
    });

    test('4. Check Contact Us login', async ({page}) => {
        const contactPage = PageFactory.getPage("Contact", page) as ContactPage;

        await contactPage.openPage();
        await contactPage.checkContactSupportLogin();
        expect(contactPage.emailError).toBeVisible();
        const organizationErrorText = await contactPage.organizationError.innerText();
        expect (organizationErrorText).toBe(CASConsts.organizationError);
        
    });

    test('5. Check Pistoia Safety Library', async ({page}) => {
        const mainPage = PageFactory.getPage("Main", page) as MainPage;
        const libraryPage = PageFactory.getPage("Library", page) as LibraryPage;

        await mainPage.resourcesButton.click();
        await mainPage.pistoiaButton.click();
        //await libraryPage.checkUrlIsCorrect(libraryPage.titleText, CASUrls.libraryUrl);
        await libraryPage.checkLibraryPageContent(CASConsts.libraryHeader);
        
    });

    test('6. Check CAS Insights filter', async ({page}) => {
        const mainPage = PageFactory.getPage("Main", page) as MainPage;
        const insightsPage = PageFactory.getPage("Insights", page) as InsightsPage;

        await mainPage.resourcesButton.click();
        await mainPage.casInsightsButton.click();
       // await insightsPage.checkUrlIsCorrect(insightsPage.titleText, CASUrls.insightsUrl);
       // await expect(insightsPage.filtersTitle).toBeVisible();
       await insightsPage.checkPageIsLoaded();
        await insightsPage.filterSelection();
        await insightsPage.checkResultNumber(insightsPage.materialsArticle,'21', CASConsts.resultNumber21);
        await (insightsPage.clearByTopicBtn).click();
        await insightsPage.checkResultNumber(insightsPage.consumerArticle,'100', CASConsts.resultNumber100);

    });

    test('7. Check Training button work', async ({page}) => {
        const mainPage = PageFactory.getPage("Main", page) as MainPage;
        const trainingPage = PageFactory.getPage("Training", page) as TrainingPage;

        await (mainPage.trainingButton).click();
        //await trainingPage.checkUrlIsCorrect(trainingPage.titleText, trainingPage.url);
        await trainingPage.performQuickSearch(CASConsts.trainingSearchMessage, CASConsts.trainingErrorMessage);
        
    });

    test('8. Check work of CAS logo', async ({page}) => {
        const mainPage = PageFactory.getPage("Main", page) as MainPage;
        const trainingPage = PageFactory.getPage("Training", page) as TrainingPage;

        await (mainPage.trainingButton).click();
        await trainingPage.turnToMainPage();
        await mainPage.checkUrlOfMainPage();
       // await trainingPage.checkUrlIsCorrect(trainingPage.titleText, trainingPage.url);
       // await (page.locator(CASConsts.casImage)).click();
       // await mainPage.checkUrlIsCorrect(mainPage.aboutButton, mainPage.url);
        
    });

    test('9. Check FAQs page', async ({page}) => {
        const mainPage = PageFactory.getPage("Main", page) as MainPage;
        const faqsPage = PageFactory.getPage("FAQs", page) as FAQsPage;

        await page.locator(mainPage.aboutButton).click();
        await (mainPage.faqsButton).click();
        await faqsPage.checkUrlOfFAQsPage();
        //await faqsPage.checkUrlIsCorrect(faqsPage.titleText, CASUrls.faqsUrl);
        await faqsPage.checkAnswerRepresentation();
        
    });

    test('10. Check work of Register now button', async ({page}) => {
        const mainPage = PageFactory.getPage("Main", page) as MainPage;
        const webinarPage = PageFactory.getPage("Webinar", page) as WebinarPage;

        await mainPage.registerNowButton.click();
        await webinarPage.checkUrlOfWebinarPage();
        //await webinarPage.checkUrlIsCorrect(webinarPage.titleText, CASUrls.webinarUrl);
        await webinarPage.checkWebinarPageContent(CASConsts.webinarTitleText);
        
    });


    test.afterAll( async ({browser}) => {
        await browser.close();
    }); 
});