import { type Page } from '@playwright/test';



export class Methods {
    readonly page: Page;
    

    constructor(page: Page){
        this.page = page;
    }
 
    async formBaseLink(){
        const fullUrl = await this.page.url()

        const url = new URL(fullUrl)
        
        const params = new URLSearchParams(url.search)

        const desiredParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

        let extractedQuery: string[] = [];

        desiredParams.forEach(parameter => {
          if (params.has(parameter)) {
            extractedQuery.push(`${parameter}=${params.get(parameter)}`);
          }
        })


        const baseCurrentUrl:string = `${url.origin}${url.pathname}`

        console.log(baseCurrentUrl)

        return baseCurrentUrl
    }

    async formQueryParameters(){
      const fullUrl = await this.page.url()

      const url = new URL(fullUrl)
      const params = new URLSearchParams(url.search)

      const desiredParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

      let extractedQuery: string[] = [];

      desiredParams.forEach(parameter => {
        if (params.has(parameter)) {
          extractedQuery.push(`${parameter}=${params.get(parameter)}`);
        }
      })

        const receivedParameters: string = extractedQuery.join('&');
      
        
        return receivedParameters
    }
        
    async visitPage(link: string){
        

        await this.page.goto(link)

        await this.page.waitForTimeout(7000)
    }

    async checkUrl(baseCurrentUrl: string, expectedUrlOne: string, expectedUrlTwo: string){
        if (baseCurrentUrl == expectedUrlOne) {
            
            console.log(`Expected link: ${expectedUrlOne}\n`)
          
          } else {
            // Explicitly fail the test if the URL doesn't match any expected value
       
            console.log(`Expected links: \n${expectedUrlOne}\n${expectedUrlTwo}`)
            throw new Error();
          }
        }
    
    async checkQueryParameters(extractedQuery: string, expectedQuery: string, ){
       if (extractedQuery == expectedQuery) {
        console.log(`Received query parameters: ${extractedQuery}\n Expected query parameters: ${expectedQuery}`)
      
      } else {
        // Explicitly fail the test if the query parameters don't match
      
        console.log(`Received query parameters: ${extractedQuery}\n Expected query parameters: ${expectedQuery}`)
        throw new Error(`Wrong query parameters: received: ${extractedQuery}  and expected query parameters: ${expectedQuery}`);
      }
}

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async generateRandomEmail(length: number): Promise<string> {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    let result  = ''

    for (let i = 0; i < length; i++){
        const randdomIndex = Math.floor(Math.random() * characters.length)
        result += characters[randdomIndex]
    }

    return result
}



}
