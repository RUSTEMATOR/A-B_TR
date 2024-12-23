import test from "@playwright/test";
import Registration from "../../../src/methods/Recursions/Registration/RecursiveReg.spec";
import VpnController from "../../../src/methods/vpnController/vpnController";
import { EXPECTED_QUERY, LOCATIONS, STAGE_LINK} from "../../../src/Data/constants";
import { NETHERLAND_LINK } from "../../../src/Data/NL/netherlandsLinks";
import { EXPECTED_NETHERLANDS_STAGE_LINKS } from "../../../src/Data/NL/netherlandsExpectedLinks";


test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.NL)
})


test.describe('Positive Registartion', () => {
    const country = 'NL'
    const typeA = 'Goddes'
    const typeB = 'Pharaoh'
    const registration = new Registration()

    const url = STAGE_LINK
    const expectedComparisonLink1 = EXPECTED_NETHERLANDS_STAGE_LINKS.goddes
    const expectedComparisonLink2 = EXPECTED_NETHERLANDS_STAGE_LINKS.pharaoh 
    const expectedUTMQuery = EXPECTED_QUERY.expctedQueryNL
    const isRegFormButton = false
    const regFormLocator = '.main button.btn'
    
    test.describe(`${country}`, () => {
        test(`${country} Registration test ${typeA} Btag`, async () => {
            
            const expectedLink = EXPECTED_NETHERLANDS_STAGE_LINKS.goddes
            const isRegFormButton = false

            await registration.recursiveRegistration({ 
                url: url,
                expectedLink: expectedLink ,
                expectedComparisonLink1: expectedComparisonLink1, 
                expectedComparisonLink2: expectedComparisonLink2, 
                expectedUTMQuery: expectedUTMQuery, 
                regFormLocator: regFormLocator, 
                isRegFormButton: isRegFormButton
            })

        })

        test(`${country} Registration test ${typeB} Btag`, async () => {
            
            const expectedLink = EXPECTED_NETHERLANDS_STAGE_LINKS.pharaoh
            const isRegFormButton = true

            await registration.recursiveRegistration({ 
                url: url,
                expectedLink: expectedLink ,
                expectedComparisonLink1: expectedComparisonLink1, 
                expectedComparisonLink2: expectedComparisonLink2, 
                expectedUTMQuery: expectedUTMQuery, 
                regFormLocator: regFormLocator, 
                isRegFormButton: isRegFormButton
            })
        })
    })
})



test.afterAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnDisconnect()
})