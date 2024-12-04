interface ILocation {
    AT: string
    AU: string
    CH: string
    DE: string
    IE: string
    NL: string
}

interface IExpectedQuery {
    expctedQueryAT: string
    expctedQueryAU: string
    expctedQueryCH: string
    expctedQueryDE: string
    expctedQueryIE: string
    expctedQueryNL: string
}


export const LOCATIONS: ILocation = {
    AT: 'Austria',
    AU: 'Australia - Melbourne',
    CH: 'Switzerland',
    DE: 'Germany - Frankfurt - 1',
    IE: 'Ireland',
    NL: 'Netherlands - Amsterdam'
}


export const EXPECTED_QUERY: IExpectedQuery = {
    expctedQueryAT: 'utm_source=Welcome&utm_medium=AT&utm_campaign=w1&utm_content=27_11_24&utm_term=Original',
    expctedQueryAU: 'utm_source=Welcome&utm_medium=AU&utm_campaign=w1&utm_content=27_11_24&utm_term=Original',
    expctedQueryCH: 'utm_source=Welcome&utm_medium=CH&utm_campaign=w1&utm_content=27_11_24&utm_term=Original',
    expctedQueryDE: 'utm_source=Welcome&utm_medium=DE&utm_campaign=w1&utm_content=27_11_24&utm_term=Original',
    expctedQueryIE: 'utm_source=Welcome&utm_medium=EN&utm_campaign=w1&utm_content=27_11_24&utm_term=Original',
    expctedQueryNL: 'utm_source=Welcome&utm_medium=NL&utm_campaign=w1&utm_content=27_11_24&utm_term=Original'
}


export const ERROR_TEXT = {
    EN: 'has already been taken',
    DE: 'ist bereits vergeben',
    FR: "n'est pas disponible",
    NO: "has already been taken"
}


export const STAGE_LINK = 'https://kbc-tr-landings-stage.pages.dev/pharaoh?stag=120590_6724fa558aa460dd58d0216a&tracking_link=http%3A%2F%2Frichestraf.com%2Fd55e681fe&nofingerprint=1'