import { Methods } from "../../methods";
import { chromium, type Browser, expect } from "@playwright/test";
import { EXPECTED_QUERY } from "../../../Data/constants";
import { EXPECTED_AUSTRIA_LINKS } from "../../../Data/AT/expectedAustriaLinks";
import { AUSTRALIA_LINK } from "../../../Data/AU/australiaLinks";
import { qase } from "playwright-qase-reporter/playwright";
import { RegMethods1Step } from "../../regMethods1step";
import moment from "moment";
import { AUSTRIA_LINK } from "../../../Data/AT/austriaLinks";


let browser: Browser

async function startBrowser() {
    if (!browser) {
        browser = await chromium.launch();
    }
    return browser;
  }

export default class RecursionsAT {
    constructor(){}

    async recursiveTestGoddesAT(stageLink?: string): Promise<any> {

        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        const regMethods = new RegMethods1Step(page)
        const randomEmail = `automaton_${await methods.generateRandomEmail(5)}@kingbilly.xyz`

        await methods.sleep(1000)
        await methods.visitPage(stageLink || AUSTRIA_LINK)
        const baseCurrentUrl = await methods.formBaseLink()

        if (baseCurrentUrl === EXPECTED_AUSTRIA_LINKS.goddes){
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRIA_LINKS.goddes, EXPECTED_AUSTRIA_LINKS.pharaoh)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expctedQueryAT)

            await page.waitForTimeout(1000)

            
            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/GoddesAT.png`})

            const currentUrl = await regMethods.page.url()
            const actualStag = await regMethods.extractStag(currentUrl);

            if(stageLink){
            const expectedStag = await regMethods.extractStag(stageLink);
            console.log('Expected stag:', expectedStag);
            

            const currentUrl = await regMethods.page.url()
            const actualStag = await regMethods.extractStag(currentUrl);
            expect(actualStag).toEqual(expectedStag)
            } else {
                console.log('The test is for prod, not checking Stag')
            }

            const finalUrl = await regMethods.page.url()

            await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n

                Actual stag: ${actualStag}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRIA_LINKS.goddes}\n${EXPECTED_AUSTRIA_LINKS.pharaoh}
                \n\n Expected parameters: ${EXPECTED_QUERY.expctedQueryAT}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            // console.log('Actual stag:', actualStag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)

            await ctx.close();

        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestGoddesAT(stageLink);
        }
    }

    async recursiveTestPharaohAT(stageLink?: string): Promise<any> {

        let browser = await startBrowser()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
       
        const methods = new Methods(page)

        const regMethods = new RegMethods1Step(page)
        const randomEmail = `automaton_${await methods.generateRandomEmail(5)}@kingbilly.xyz`

        await methods.sleep(1000)
        await methods.visitPage(stageLink || AUSTRIA_LINK)
        const baseCurrentUrl = await methods.formBaseLink()

        if (baseCurrentUrl === EXPECTED_AUSTRIA_LINKS.pharaoh){
            const baseCurrentUrl = await methods.formBaseLink()
            const receivedParameters = await methods.formQueryParameters()

            await methods.checkUrl(baseCurrentUrl, EXPECTED_AUSTRIA_LINKS.pharaoh, EXPECTED_AUSTRIA_LINKS.goddes)
            await methods.checkQueryParameters(receivedParameters, EXPECTED_QUERY.expctedQueryAT)

            await page.waitForTimeout(1000)

            
            await regMethods.makeFullScreenshot({fullPage: true, path: `Screenshots/PharaohAT.png`})

            // const expectedStag = await regMethods.extractStag(stageLink || AUSTRIA_LINK);
            // console.log('Expected stag:', expectedStag);
            

            // const currentUrl = await regMethods.page.url()
            // const actualStag = await regMethods.extractStag(currentUrl);
            // expect(actualStag).toEqual(expectedStag)

            const finalUrl = await regMethods.page.url()

            await regMethods.openRegForm('section.main .btn')

            await regMethods.fillEmailPass({email: randomEmail, pass:'193786Az()'})

            await regMethods.checkAdultCheckbox()
            const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    
            qase.comment(`Registered with: ${randomEmail}\n\n
                Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
                
                Current URL: ${baseCurrentUrl}\n Expected links: \n${EXPECTED_AUSTRIA_LINKS.pharaoh}\n${EXPECTED_AUSTRIA_LINKS.goddes}
                \n\n Expected parameters: ${EXPECTED_QUERY.expctedQueryAT}\n Received parameters: ${receivedParameters}
                
                `)

            console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
            // console.log('Actual stag:', actualStag);

            await regMethods.createAnAccount()
            await regMethods.page.waitForTimeout(10000)

            await ctx.close();

        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveTestPharaohAT(stageLink);
        }
    }
}