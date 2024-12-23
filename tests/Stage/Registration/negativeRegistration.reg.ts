import test from "@playwright/test";
import VpnController from "../../../src/methods/vpnController/vpnController";
import Registration from "../../../src/methods/Recursions/Registration/RecursiveReg.spec";
import { ERROR_TEXT, EXPECTED_QUERY, LOCATIONS, STAGE_LINK } from "../../../src/Data/constants";
import { EXPECTED_NETHERLANDS_STAGE_LINKS } from "../../../src/Data/NL/netherlandsExpectedLinks";

test.beforeAll(async () => {
    const vpnController = new VpnController()
    await vpnController.vpnConnnect(LOCATIONS.NL)
})


test.describe('Negative Registration', () => {

    const country = 'NL'
        const typeA = 'Goddes'
        const typeB = 'Pharaoh'
        const registration = new Registration()
    
        const url = STAGE_LINK
        const expectedComparisonLink1 = EXPECTED_NETHERLANDS_STAGE_LINKS.goddes
        const expectedComparisonLink2 = EXPECTED_NETHERLANDS_STAGE_LINKS.pharaoh 
        const expectedUTMQuery = EXPECTED_QUERY.expctedQueryNL
        const errorText = ERROR_TEXT.EN
        const regFormLocator = '.main button.btn'
        const expectedLocator = 'form.auth-form .warning'

    test.describe('', () => {

        test(`${country} Registration test ${typeA} Btag`, async () => {
            const expectedLink = EXPECTED_NETHERLANDS_STAGE_LINKS.goddes
            const isRegFormButton = false

            await registration.negativeRecursiveRegistration({
                url: url,
                expectedLink: expectedLink,
                expectedComparisonLink1: expectedComparisonLink1,
                expectedComparisonLink2: expectedComparisonLink2,
                expectedUTMQuery,
                regFormLocator,
                expectedText: errorText,
                expectedLocator: expectedLocator,
                isRegFormButton: isRegFormButton
            });
        })

        test(`${country} Registration test ${typeB} Btag`, async () => {
            const expectedLink = EXPECTED_NETHERLANDS_STAGE_LINKS.pharaoh
            const isRegFormButton = true

            await registration.negativeRecursiveRegistration({
                url: url,
                expectedLink: expectedLink,
                expectedComparisonLink1: expectedComparisonLink1,
                expectedComparisonLink2: expectedComparisonLink2,
                expectedUTMQuery,
                regFormLocator,
                expectedText: errorText,
                expectedLocator: expectedLocator,
                isRegFormButton: isRegFormButton
            });
        })

    })
})