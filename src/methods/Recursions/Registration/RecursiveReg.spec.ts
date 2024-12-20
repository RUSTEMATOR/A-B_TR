import {test, chromium, expect} from "@playwright/test"
import { Methods} from "../../methods"
import { RegMethods1Step } from "../../regMethods1step"
import moment from "moment"
import { qase } from "playwright-qase-reporter/playwright"




export default class Registration {
    constructor(){}


async recursiveRegistration({
    url,
    expectedLink,
    expectedComparisonLink1,
    expectedComparisonLink2,
    expectedUTMQuery,
    isStage, 
    regFormLocator,
}: {
    url: string,
    expectedLink: string,
    expectedComparisonLink1: string,
    expectedComparisonLink2: string,
    expectedUTMQuery: string,
    isStage: boolean, 
    regFormLocator: string,
}

): Promise<void> {

        let browser = await chromium.launch()
        let ctx = await browser.newContext()
        let page = await ctx.newPage()
        
        const methods = new Methods(page)

        const regMethods = new RegMethods1Step(page)
        const randomEmail = `automaton_${await methods.generateRandomEmail(5)}@kingbilly.xyz`

        await methods.sleep(1000)
        await methods.visitPage(url)
        const baseCurrentUrl = await methods.formBaseLink()

        if (baseCurrentUrl === expectedLink){

            test.step('Open reg form',async () => {
                await regMethods.openRegForm(regFormLocator)
            })

            test.step('Fill in reg credentials', async () => {
                await regMethods.fillEmailPass({email: randomEmail, pass: '193786Az()'})
            })

            test.step('Check adult checkbox', async () => {
                await regMethods.checkAdultCheckbox()
            })

            test.step('Log actions', async () => {
                await regMethods.logActions(randomEmail)
            })

            test.step('Create an account', async () => {
                await regMethods.createAnAccount()
            })

            test.step('Expect deposit button to be visible', async () => {
                await regMethods.expectToBeVisible('div.mb-3 > .button-primary', 'Deposit')
            })


            await regMethods.page.waitForTimeout(10000)

            await ctx.close();

        } else {
            methods.sleep(1000)
            await ctx.close();
            return this.recursiveRegistration({
                url,
                expectedLink,
                expectedComparisonLink1,
                expectedComparisonLink2,
                expectedUTMQuery,
                isStage, 
                regFormLocator,
            });
        }

    }
    
    async negativeRecursiveRegistration({
        url,
        expectedLink,
        expectedComparisonLink1,
        expectedComparisonLink2,
        expectedUTMQuery,
        isStage, 
        regFormLocator,
    }: {
        url: string,
        expectedLink: string,
        expectedComparisonLink1: string,
        expectedComparisonLink2: string,
        expectedUTMQuery: string,
        isStage: boolean, 
        regFormLocator: string,
    }
    
    ): Promise<void> {
    
            let browser = await chromium.launch()
            let ctx = await browser.newContext()
            let page = await ctx.newPage()
            
            const methods = new Methods(page)
    
            const regMethods = new RegMethods1Step(page)
            const email = 'ross@kingbilly.xyz'
    
            await methods.sleep(1000)
            await methods.visitPage(url)
            const baseCurrentUrl = await methods.formBaseLink()
    
            if (baseCurrentUrl === expectedLink){
    
                test.step('Open reg form',async () => {
                    await regMethods.openRegForm(regFormLocator)
                })
    
                test.step('Fill in reg credentials', async () => {
                    await regMethods.fillEmailPass({email: email, pass: '193786Az()'})
                })
    
                test.step('Check adult checkbox', async () => {
                    await regMethods.checkAdultCheckbox()
                })
    
                test.step('Log actions', async () => {
                    await regMethods.logActions(email)
                })
    
                test.step('Create an account', async () => {
                    await regMethods.createAnAccount()
                })
    
                test.step('Expect error to be visible', async () => {
                    await regMethods.expectToBeVisible(, 'Deposit')
                })
    
    
                await regMethods.page.waitForTimeout(10000)
    
                await ctx.close();
    
            } else {
                methods.sleep(1000)
                await ctx.close();
                return this.recursiveRegistration({
                    url,
                    expectedLink,
                    expectedComparisonLink1,
                    expectedComparisonLink2,
                    expectedUTMQuery,
                    isStage, 
                    regFormLocator,
                });
            }
    
        }
}