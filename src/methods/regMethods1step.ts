import { Page, expect} from "@playwright/test";
import { qase } from "playwright-qase-reporter/playwright";
import moment from "moment";
import fs from "fs";


export class RegMethods1Step {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async extractStag(url: string): Promise<any>{
        const parsedUrl = new URL(url)
        const stag = parsedUrl.searchParams.get('stag')
        console.log(stag)
        if (stag === null) {
            console.log('stag parameter is missing in the URL');
        }
        return stag || null;
    }

    async makeFullScreenshot({fullPage, path}: {fullPage: boolean, path: string}) {
        await this.page.screenshot({fullPage, path});
    }

    async openRegForm(regFormLocator: string){
        await this.page.locator(regFormLocator).click()
    }

    async fillEmailPass({email, pass,}: {email: string, pass: string}){
        await this.page.locator("input[type=email]").fill(email)
        await this.page.locator("input[type=password]").fill(pass)
    }

    async checkAdultCheckbox() {
        await this.page.locator("input[type=checkbox]").click()
    }

    async createAnAccount() {
        await this.page.locator("input[type=email]").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("input[type=password]").click()
        await this.page.waitForTimeout(1000)
        await this.page.locator("button[type=submit]").click()
    }

    async logActions(randomEmail: string, actualstag?: string, expectedstag?: string){
        const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        const finalUrl = this.page.url()

        qase.comment(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n\n
            Actual stag: ${actualstag}\n Expected stag: ${expectedstag}\n\n`)
        console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
        console.log('Actual stag:', actualstag);

        
        fs.appendFileSync('usedEmails.txt', `Used email: ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
    }

    async expectToBeVisible(locator: string, text: string) {
        await expect(this.page.locator(locator).filter({hasText: text})).toBeVisible()
        console.log(`Expected ${locator} to be visible`)
    }
}