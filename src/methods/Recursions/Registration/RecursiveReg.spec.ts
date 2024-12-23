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
    regFormLocator,
    isRegFormButton
}: {
    url: string,
    expectedLink: string,
    expectedComparisonLink1: string,
    expectedComparisonLink2: string,
    expectedUTMQuery: string,
    regFormLocator: string,
    isRegFormButton: boolean
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
            if (isRegFormButton) {
                await test.step('Open reg form', async () => {
                    await regMethods.openRegForm(regFormLocator)
                })
            } else {
                await test.step('Reg form button not present', async () => {
                    console.log('Registration form button is not present.')
                })
            }

            await test.step('Fill in reg credentials', async () => {
                await regMethods.fillEmailPass({email: randomEmail, pass: '193786Az()'})
            })

            await test.step('Check adult checkbox', async () => {
                await regMethods.checkAdultCheckbox()
            })

            await test.step('Log actions', async () => {
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
                regFormLocator,
                isRegFormButton
            });
        }

    }
    
    async negativeRecursiveRegistration({
        url,
        expectedLink,
        expectedComparisonLink1,
        expectedComparisonLink2,
        expectedUTMQuery,
        regFormLocator,
        expectedLocator,
        expectedText,
        isRegFormButton
    }: {
        url: string,
        expectedLink: string,
        expectedComparisonLink1: string,
        expectedComparisonLink2: string,
        expectedUTMQuery: string,
        regFormLocator: string,
        expectedLocator: string,
        expectedText: string,
        isRegFormButton: boolean
        
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
    
                if (isRegFormButton) {
                    await test.step('Open reg form', async () => {
                        await regMethods.openRegForm(regFormLocator)
                    })
                } else {
                    await test.step('Reg form button not present', async () => {
                        console.log('Registration form button is not present.')
                    })
                }
    
                await test.step('Fill in reg credentials', async () => {
                    await regMethods.fillEmailPass({email: email, pass: '193786Az()'})
                })
    
                await test.step('Check adult checkbox', async () => {
                    await regMethods.checkAdultCheckbox()
                })
    
                await test.step('Log actions', async () => {
                    await regMethods.logActions(email)
                })
    
                await test.step('Create an account', async () => {
                    await regMethods.createAnAccount()
                })

                await regMethods.page.waitForTimeout(10000)
    
                await test.step('Expect error to be visible', async () => {
                    await regMethods.expectToBeVisible(expectedLocator, expectedText)
                })
    
                await ctx.close();
    
            } else {
                methods.sleep(1000)
                await ctx.close();
                return this.negativeRecursiveRegistration({
                    url,
                    expectedLink,
                    expectedComparisonLink1,
                    expectedComparisonLink2,
                    expectedUTMQuery,
                    expectedLocator,
                    expectedText,
                    regFormLocator,
                    isRegFormButton
                });
            }
    
        }
}