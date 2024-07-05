import { type Page} from '@playwright/test';
import { BasePage } from "./basePage";
import { LibraryPage } from "./libraryPage";
import { ContactPage } from "./contactPage";
import { MainPage } from './mainPage';
import { InsightsPage } from "./insightsPage";
import { TrainingPage } from "./trainingPage";
import { FAQsPage } from "./faqsPage";
import { WebinarPage } from './webinarPage';

export class PageFactory {
    static getPage(pageName: string, page: Page): any {
        switch (pageName) {
            case "Library":
                return new LibraryPage(page); 
            case "Contact":
                return new ContactPage(page);
            case "Insights":
                return new InsightsPage(page); 
            case "Training":
                return new TrainingPage(page); 
            case "FAQs":
                return new FAQsPage(page);
            case "Webinar":
                return new WebinarPage(page);
            default:
                return new MainPage(page);
        }
    }
}