import { Methods } from "../../methods";
import { chromium, type Browser, expect } from "@playwright/test";
import { EXPECTED_QUERY } from "../../../Data/constants";
import { EXPECTED_GERMANY_LINKS } from "../../../Data/DE/germanyExpectedLinks";
import { GERMANY_LINK } from "../../../Data/DE/germanyLinks";
import { qase } from "playwright-qase-reporter/playwright";
import { RegMethods1Step } from "../../regMethods1step";
import moment from "moment";




let browser: Browser

async function startBrowser() {
    if (!browser) {
        browser = await chromium.launch();
    }
    return browser;
  }

export default class RecursionsNegativeDE {
    constructor(){}

    async recursiveNegativeTestGoddesDE(wrongEmail: string, stageLink?: string): Promise<any> {

        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        const regMethods = new RegMethods1Step(page)

        await methods.sleep(1000)
        await methods.visitPage(stageLink || GERMANY_LINK)
        const baseCurrentUrl = await methods.formBaseLink()

        if (baseCurrentUrl === EXPECTED_GERMANY_LINKS.goddes){
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_LINKS.goddes, EXPECTED_GERMANY_LINKS.pharaoh)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expctedQueryDE)

            await page.waitForTimeout(1000)

            const currentUrl = await regMethods.page.url()
            const actualStag = await regMethods.extractStag(currentUrl);

            if(stageLink){
                const expectedStag = await regMethods.extractStag(stageLink);
                console.log('Expected stag:', expectedStag);
    
                const currentUrl = await regMethods.page.url()
                const actualStag = await regMethods.extractStag(currentUrl);
                expect(actualStag).toEqual(expectedStag)
                console.log('Actual stag:', actualStag);
                } else {
                    console.log('The test is for prod, not checking Stag')
                }

            const finalUrl = await regMethods.page.url()

            await regMethods.fillEmailPass({email: wrongEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${wrongEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n

                Actual btag: ${actualStag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_LINKS.goddes}\n${EXPECTED_GERMANY_LINKS.pharaoh}
                \n\n Expected parameters: ${EXPECTED_QUERY.expctedQueryDE}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${wrongEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)

            await ctx.close();

        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveNegativeTestGoddesDE(wrongEmail);
        }
    }

    async recursiveNegativeTestPharaohDE(wrongEmail: string, stageLink?: string): Promise<any> {

        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        const regMethods = new RegMethods1Step(page)

        await methods.sleep(1000)
        await methods.visitPage(stageLink || GERMANY_LINK)
        const baseCurrentUrl = await methods.formBaseLink()

        if (baseCurrentUrl === EXPECTED_GERMANY_LINKS.pharaoh){
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_GERMANY_LINKS.pharaoh, EXPECTED_GERMANY_LINKS.goddes)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expctedQueryDE)

            await page.waitForTimeout(1000)


            const currentUrl = await regMethods.page.url()
            const actualStag = await regMethods.extractStag(currentUrl);

            if(stageLink){
                const expectedStag = await regMethods.extractStag(stageLink);
                console.log('Expected stag:', expectedStag);
    
                const currentUrl = await regMethods.page.url()
                const actualStag = await regMethods.extractStag(currentUrl);
                expect(actualStag).toEqual(expectedStag)
                console.log('Actual stag:', actualStag);
                } else {
                    console.log('The test is for prod, not checking Stag')
                }

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm('section.main .btn')

            await regMethods.fillEmailPass({email: wrongEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${wrongEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n

                Actual btag: ${actualStag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_GERMANY_LINKS.pharaoh}\n${EXPECTED_GERMANY_LINKS.goddes}
                \n\n Expected parameters: ${EXPECTED_QUERY.expctedQueryDE}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${wrongEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            // console.log('Actual stag:', actualStag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)

            await ctx.close();

        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveNegativeTestPharaohDE(wrongEmail);
        }
    }
}