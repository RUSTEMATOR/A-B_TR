import { Methods } from "../../methods";
import { chromium, type Browser, expect } from "@playwright/test";
import { ERROR_TEXT, EXPECTED_QUERY } from "../../../Data/constants";
import { EXPECTED_AUSTRALIA_LINKS } from "../../../Data/AU/expectedAustraliaLinks";
import { AUSTRALIA_LINK } from "../../../Data/AU/australiaLinks";
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

export default class RecursionsNegativeAU {
    constructor(){}

    async recursiveNegativeTestGoddesAU(wrongEmail: string, stageLink?: string): Promise<any> {

        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        const regMethods = new RegMethods1Step(page)

        await methods.sleep(1000)
        await methods.visitPage(stageLink || AUSTRALIA_LINK)
        const baseCurrentUrl = await methods.formBaseLink()

        if (baseCurrentUrl === EXPECTED_AUSTRALIA_LINKS.goddes){
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRALIA_LINKS.goddes, EXPECTED_AUSTRALIA_LINKS.pharaoh)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expctedQueryAU)

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

                Actual stag: ${actualStag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_LINKS.goddes}\n${EXPECTED_AUSTRALIA_LINKS.pharaoh}
                \n\n Expected parameters: ${EXPECTED_QUERY.expctedQueryAU}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${wrongEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            

            await regMethods.createAnAccount()
            await regMethods.expectToBeVisible('.warning', ERROR_TEXT.EN)
            await regMethods.page.waitForTimeout(10000)
            

            await ctx.close();

        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveNegativeTestGoddesAU(wrongEmail);
        }
    }

    async recursiveNegativeTestPharaohAU(wrongEmail: string, stageLink?: string): Promise<any> {

        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        const regMethods = new RegMethods1Step(page)

        await methods.sleep(1000)
        await methods.visitPage(stageLink || AUSTRALIA_LINK)
        const baseCurrentUrl = await methods.formBaseLink()

        if (baseCurrentUrl === EXPECTED_AUSTRALIA_LINKS.pharaoh){
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRALIA_LINKS.pharaoh, EXPECTED_AUSTRALIA_LINKS.goddes)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expctedQueryAU)

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

                Actual stag: ${actualStag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRALIA_LINKS.pharaoh}\n${EXPECTED_AUSTRALIA_LINKS.goddes}
                \n\n Expected parameters: ${EXPECTED_QUERY.expctedQueryAU}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${wrongEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            // console.log('Actual stag:', actualStag);

            await regMethods.createAnAccount()
            await regMethods.expectToBeVisible('.warning', ERROR_TEXT.EN)
            await regMethods.page.waitForTimeout(10000)

            await ctx.close();

        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveNegativeTestPharaohAU(wrongEmail);
        }
    }
}