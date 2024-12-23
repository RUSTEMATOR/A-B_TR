import { chromium, expect, test } from "@playwright/test"
import { Methods } from "../../methods"
import { RegMethods1Step } from "../../regMethods1step"
import moment from "moment"
import { qase } from "playwright-qase-reporter/playwright"

export default class GeneralRecursion {
    constructor(){}


    async recursiveTest({
        url, 
        expectedLink,
        expectedComparisonLink, 
        expectedQuery, 
        isStage }: 
        {url: string, 
        expectedLink: string, 
        expectedComparisonLink: string, 
        expectedQuery: string, 
        isStage: boolean} ): Promise<void> {
    
            let browser = await chromium.launch()
            let ctx = await browser.newContext()
            let page = await ctx.newPage()
            let actualStag: string
            let receivedParameters: string
           
            const methods = new Methods(page)
    
            const regMethods = new RegMethods1Step(page)
            const randomEmail = `automaton_${await methods.generateRandomEmail(5)}@kingbilly.xyz`
            
            await test.step('Visit landing', async () => {
                await methods.sleep(1000)
                await methods.visitPage(url)
            })

            const baseCurrentUrl = await methods.formBaseLink()
            if (baseCurrentUrl === expectedLink){

                await test.step('Check url and UTM', async () => {
                    const baseCurrentUrl = await methods.formBaseLink()
                    receivedParameters = await methods.formQueryParameters()
    
                    await methods.checkUrl(baseCurrentUrl, expectedLink, expectedComparisonLink)
                    await methods.checkQueryParameters(receivedParameters, expectedQuery)
        
                    await page.waitForTimeout(1000)

                })

                if(isStage === true){
                await test.step('Extract Stag if stage', async () => {
                    const expectedStag = await regMethods.extractStag(url);
                    console.log('Expected stag:', expectedStag);
                    
        
                    const currentUrl = await regMethods.page.url()
                    actualStag = await regMethods.extractStag(currentUrl);
                    expect(actualStag).toEqual(expectedStag)
                    

                })
                } else {
                    console.log('The test is for prod, not checking Stag')
                }

                test.step('Get final URL', async () => {
                    const finalUrl = await regMethods.page.url()

                
    
                const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        
                qase.comment(`
                    Date: ${currentTime}\n\n URL: ${finalUrl}\n\n
    
                    Actual stag: ${actualStag}\n\n
                    
                    Current URL: ${baseCurrentUrl}\n Expected links: \n${expectedLink}\n${expectedComparisonLink}
                    \n\n Expected parameters: ${expectedQuery}\n Received parameters: ${receivedParameters}
                    
                    `)
    
                console.log(`Registered with ${randomEmail} at ${currentTime}\n URL: ${finalUrl}\n`)
                // console.log('Actual stag:', actualStag);
                })
    
                await regMethods.createAnAccount()
                await regMethods.page.waitForTimeout(10000)
    
                await ctx.close();
    
            } else {
                methods.sleep(1000)
                await ctx.close();
                return this.recursiveTest({url, expectedLink, expectedComparisonLink, expectedQuery, isStage});
            }
        }
}